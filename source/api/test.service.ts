/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V1.1.0
 * Contact: avishaybennatan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core'; import { FlexiCoreDecycle } from './flexiCoreDecycle';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';


@Injectable()
export class TestService {

    protected basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1, T2>(objA: T1, objB: T2) {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1 & T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @param junit 
     */
    public init(junit: string, extraHttpRequestParams?: any): Observable<boolean> {
        return this.initWithHttpInfo(junit, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response.json()) || {};
                }
            }));
    }

    /**
     * 
     */
    public init_1(extraHttpRequestParams?: any): Observable<{}> {
        return this.init_1WithHttpInfo(extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response.json()) || {};
                }
            }));
    }


    /**
     * 
     * 
     * @param junit 
     */
    public initWithHttpInfo(junit: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/test/${junit}'
            .replace('${' + 'junit' + '}', String(junit));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'junit' is not null or undefined
        if (junit === null || junit === undefined) {
            throw new Error('Required parameter junit was null or undefined when calling init.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     */
    public init_1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/test/test';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
