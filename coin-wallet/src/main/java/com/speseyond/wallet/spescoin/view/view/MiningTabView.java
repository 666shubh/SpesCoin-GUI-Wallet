package com.speseyond.wallet.spescoin.view.view;

import com.speseyond.wallet.rpc.model.Addresses;
import com.speseyond.wallet.spescoin.view.controller.MiningController;
import com.speseyond.wallet.spescoin.view.model.JComboboxItem;
import com.speseyond.wallet.spescoin.view.view.panel.AbstractWhitePanel;
import org.apache.commons.configuration.PropertiesConfiguration;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.text.DefaultCaret;
import java.awt.BorderLayout;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Observable;
import java.util.Observer;


public class MiningTabView extends AbstractWhitePanel implements ActionListener, Observer {

    private MiningController miningController;

    private Map<String, List<String>> portsPerPool = new HashMap<>();

    private JComboBox<JComboboxItem> addresses;
    private JComboBox<JComboboxItem> numberOfProcessors;
    private JComboBox<JComboboxItem> ports;
    private JComboBox<JComboboxItem> pools;

    private JTextArea logging;
    private BufferedReader loggingBuffer;


    public MiningTabView(MiningController miningController, PropertiesConfiguration applicationProperties) {
        this.miningController = miningController;
        this.setLayout(new BorderLayout());

        JLabel poolsLabel = new JLabel("Mining on pool : ");
        pools = new JComboBox<>();
        JLabel portsLabel = new JLabel("Pool ports: ");
        ports = new JComboBox<>();
        JLabel addressLabel = new JLabel("Mining for address : ");
        addresses = new JComboBox<>();
        JLabel numberOfProcessorsLabel = new JLabel("Use # Cpu Cores : ");
        numberOfProcessors = new JComboBox<>();

        pools.addActionListener(this);

        // Fills the portsPerPool map
        fillPortsPerPool(applicationProperties);
        // Fills the pools combobox and the first ports set based on the portsPerPool map
        fillPoolsComboBoxAndFirstPoolPorts();
        // Get the number of cpus and add them to a combobox
        fillNumberOfProcessorsCombobox();

        JPanel settingsPanel = new JPanel();

        GridBagLayout gridBagLayout = new GridBagLayout();
        gridBagLayout.columnWidths = new int[]{1, 1, 1, 1, 1};
        gridBagLayout.rowHeights = new int[]{1, 1, 1, 1};
        gridBagLayout.columnWeights = new double[]{0.02, 0.19, 0.3, 0.19, 0.3};
        gridBagLayout.rowWeights = new double[]{0.01, 0.33, 0.33, 0.33};
        settingsPanel.setLayout(gridBagLayout);
        GridBagConstraints gbc = new GridBagConstraints();

        gbc.anchor = GridBagConstraints.WEST;
        gbc.gridx = 1;
        gbc.gridy = 1;
        settingsPanel.add(poolsLabel, gbc);
        gbc.fill = GridBagConstraints.BOTH;
        gbc.gridx = 2;
        gbc.gridy = 1;
        gbc.gridwidth = 3;
        settingsPanel.add(pools, gbc);

        gbc.gridwidth = 1;
        gbc.gridx = 1;
        gbc.gridy = 2;
        settingsPanel.add(portsLabel, gbc);
        gbc.gridx = 2;
        gbc.gridy = 2;
        settingsPanel.add(ports, gbc);

        gbc.gridx = 3;
        gbc.gridy = 2;
        settingsPanel.add(numberOfProcessorsLabel, gbc);
        gbc.gridx = 4;
        gbc.gridy = 2;
        settingsPanel.add(numberOfProcessors, gbc);

        gbc.gridx = 1;
        gbc.gridy = 3;
        settingsPanel.add(addressLabel, gbc);
        gbc.gridx = 2;
        gbc.gridy = 3;
        settingsPanel.add(addresses, gbc);

        JButton startMiningButton = new JButton("Start Mining");
        startMiningButton.addActionListener(this);
        JButton stopMiningButton = new JButton("Stop Mining");
        stopMiningButton.addActionListener(this);

        logging = new JTextArea();
        DefaultCaret caret = (DefaultCaret)logging.getCaret();
        caret.setUpdatePolicy(DefaultCaret.ALWAYS_UPDATE);
        JScrollPane loggingScrollPane = new JScrollPane(logging);
        loggingScrollPane.setVisible(true);

        JPanel buttonPanel = new JPanel();
        buttonPanel.add(startMiningButton);
        buttonPanel.add(stopMiningButton);

        this.add(settingsPanel, BorderLayout.NORTH);
        this.add(loggingScrollPane, BorderLayout.CENTER);
        this.add(buttonPanel, BorderLayout.SOUTH);
    }

    private void setPoolComboBoxes(String pool) {
        ports.removeAllItems();
        for (String port : portsPerPool.get(pool)) {
            JComboboxItem portItem = new JComboboxItem(port, port);
            this.ports.addItem(portItem);
        }
    }

    private void fillPortsPerPool(PropertiesConfiguration applicationProperties) {
        String[] pools = applicationProperties.getStringArray("pool-pools");

        for (String value: pools) {
            String[] values = value.trim().split(":");

            List<String> ports = portsPerPool.get(values[0]);
            if (ports == null) {
                ports = new ArrayList<>();
            }
            ports.add(values[1]);
            portsPerPool.put(values[0], ports);
        }
    }

    private void fillNumberOfProcessorsCombobox() {
        int cores = Runtime.getRuntime().availableProcessors();

        for (int i = 0; i < cores; i++) {
            String value = String.valueOf(i + 1);
            JComboboxItem item = new JComboboxItem(value, value);
            numberOfProcessors.addItem(item);
        }
    }

    private void fillPoolsComboBoxAndFirstPoolPorts() {
        boolean first = true;
        for (String value : portsPerPool.keySet()) {
            JComboboxItem item = new JComboboxItem(value, value);
            this.pools.addItem(item);

            if (first) {
                for (String port : portsPerPool.get(value)) {
                    JComboboxItem portItem = new JComboboxItem(port, port);
                    this.ports.addItem(portItem);
                }
                first = false;
            }
        }
    }

    @Override
    public void update(Observable observable, Object data) {
        Addresses availableAddresses;
        if (data instanceof Addresses) {
            this.addresses.removeAllItems();
            availableAddresses = (Addresses) data;
            for (String address : availableAddresses.getAddresses()) {
                JComboboxItem item = new JComboboxItem(address, address);
                addresses.addItem(item);
            }
        }
    }

    public void setController(MiningController miningController) {
        this.miningController = miningController;
    }


    @Override
    public void actionPerformed(ActionEvent e) {
        String command = e.getActionCommand();

        if (e.getSource() instanceof JComboBox) {
            if (pools == e.getSource()) {
                JComboboxItem selectedItem = (JComboboxItem) pools.getSelectedItem();
                if (selectedItem != null) {
                    setPoolComboBoxes(selectedItem.getValue());
                }
            }
        }

        if ("Start Mining".equalsIgnoreCase(command)) {
            JComboboxItem pool = (JComboboxItem) pools.getSelectedItem();
            JComboboxItem port = (JComboboxItem) ports.getSelectedItem();
            JComboboxItem address = (JComboboxItem) addresses.getSelectedItem();
            JComboboxItem numberOfProcessorsSelectedItem = (JComboboxItem) numberOfProcessors.getSelectedItem();
            miningController.startMining(pool.getKey(), port.getKey(), address.getKey(), numberOfProcessorsSelectedItem.getKey());
            setLogging(miningController.getMiningOutput());
        }
        if ("Stop Mining".equalsIgnoreCase(command)) {
            miningController.stopMining();
        }
    }

    public void setLogging(BufferedReader loggingBufferedReader) {
        this.loggingBuffer = loggingBufferedReader;
        new Thread(new Runnable() {
            @Override
            public void run() {
                while (miningController.isMining()) {
                    try {
                        String line;
                        while ((line = loggingBuffer.readLine()) != null) {
                            logging.append(line + System.getProperty("line.separator"));
                        }

                        try {
                            Thread.sleep(5000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    } catch (IOException e) {
                        // TODO log accordingly
                    }
                }
            }
        }).start();
    }
}
