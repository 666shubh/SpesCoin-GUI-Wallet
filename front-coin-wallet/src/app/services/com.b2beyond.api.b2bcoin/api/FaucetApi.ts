/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class FaucetApi {
    protected basePath = 'https://api.spescoin.xyz/spescoin/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * create faucet address
     * Creates a faucet address and returns it
     * @param body 
     */
    public createFaucetAddress(body?: models.CreateFaucetAddressRequest, extraHttpRequestParams?: any): Observable<models.UserAddress> {
        return this.createFaucetAddressWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Gets the faucet address balance
     * Gets the faucet address balance and returns it
     * @param apiKey 
     * @param currency 
     */
    public getBalance(apiKey?: string, currency?: string, extraHttpRequestParams?: any): Observable<models.UserAddress> {
        return this.getBalanceWithHttpInfo(apiKey, currency, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Gets the faucet address
     * Gets the faucet address and returns it
     * @param faucetUser 
     * @param body 
     */
    public getFaucetAddress(faucetUser: boolean, body?: models.FaucetAddressRequest, extraHttpRequestParams?: any): Observable<models.UserAddress> {
        return this.getFaucetAddressWithHttpInfo(faucetUser, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get faucet list
     * Get faucet list and returns it
     */
    public getFaucetList(extraHttpRequestParams?: any): Observable<Array<models.UserAddress>> {
        return this.getFaucetListWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Gets the faucet address payments
     * Gets the faucet address payments and returns it
     * @param body 
     */
    public getFaucetPayments(body?: models.UserAddress, extraHttpRequestParams?: any): Observable<Array<models.FaucetAddressPayment>> {
        return this.getFaucetPaymentsWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Is the Service running ?
     * Returns if the service runs or not. Without other exceptions in mind, just running
     */
    public getResourceInfo(extraHttpRequestParams?: any): Observable<models.RestResourceInfo> {
        return this.getResourceInfoWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Send a payment from the faucet
     * Send a payment from the faucet
     * @param body 
     */
    public payout(body?: models.UserAddress, extraHttpRequestParams?: any): Observable<models.ResultOk> {
        return this.payoutWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Send a payment from the faucet
     * Send a payment from the faucet
     * @param body 
     * @param body2 
     * @param body3 
     * @param body4 
     * @param body5 
     */
    public send(body?: string, body2?: string, body3?: string, body4?: number, body5?: boolean, extraHttpRequestParams?: any): Observable<models.FaucetPaymentRequest> {
        return this.sendWithHttpInfo(body, body2, body3, body4, body5, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update the faucet address
     * Update the faucet address and returns it
     * @param body 
     */
    public updateFaucetAddress(body?: models.UserAddress, extraHttpRequestParams?: any): Observable<models.UserAddress> {
        return this.updateFaucetAddressWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * create faucet address
     * Creates a faucet address and returns it
     * @param body 
     */
    public createFaucetAddressWithHttpInfo(body?: models.CreateFaucetAddressRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/createFaucetAddress`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Gets the faucet address balance
     * Gets the faucet address balance and returns it
     * @param apiKey 
     * @param currency 
     */
    public getBalanceWithHttpInfo(apiKey?: string, currency?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/balance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        let formParams = new URLSearchParams();

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/x-www-form-urlencoded');

        if (apiKey !== undefined) {
            formParams.set('api_key', <any>apiKey);
        }

        if (currency !== undefined) {
            formParams.set('currency', <any>currency);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Gets the faucet address
     * Gets the faucet address and returns it
     * @param faucetUser 
     * @param body 
     */
    public getFaucetAddressWithHttpInfo(faucetUser: boolean, body?: models.FaucetAddressRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/getFaucetAddress/${faucetUser}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'faucetUser' is not null or undefined
        if (faucetUser === null || faucetUser === undefined) {
            throw new Error('Required parameter faucetUser was null or undefined when calling getFaucetAddress.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get faucet list
     * Get faucet list and returns it
     */
    public getFaucetListWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/getFaucetList`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Gets the faucet address payments
     * Gets the faucet address payments and returns it
     * @param body 
     */
    public getFaucetPaymentsWithHttpInfo(body?: models.UserAddress, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/getFaucetAddressPayments`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Is the Service running ?
     * Returns if the service runs or not. Without other exceptions in mind, just running
     */
    public getResourceInfoWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/info`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Send a payment from the faucet
     * Send a payment from the faucet
     * @param body 
     */
    public payoutWithHttpInfo(body?: models.UserAddress, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/payout`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Send a payment from the faucet
     * Send a payment from the faucet
     * @param body 
     * @param body2 
     * @param body3 
     * @param body4 
     * @param body5 
     */
    public sendWithHttpInfo(body?: string, body2?: string, body3?: string, body4?: number, body5?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/send`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            '*/*'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body5 == null ? '' : JSON.stringify(body5), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update the faucet address
     * Update the faucet address and returns it
     * @param body 
     */
    public updateFaucetAddressWithHttpInfo(body?: models.UserAddress, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/faucet/updateFaucetAddress`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
