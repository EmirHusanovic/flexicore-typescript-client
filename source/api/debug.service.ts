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

import { Inject, Injectable, Optional } from '@angular/core';
import { FlexiCoreDecycle } from './flexiCoreDecycle';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FileResource } from '../model/fileResource';
import { FilteringInformationHolder } from '../model/filteringInformationHolder';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';


@Injectable()
export class DebugService {

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
     * create heap dump
     * @summary createHeapDump
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path 
     */
    public createHeapDump(authenticationkey?: string, path?: string, extraHttpRequestParams?: any): Observable<FileResource> {
        return this.createHeapDumpWithHttpInfo(authenticationkey, path, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response.json()) || {};
                }
            }));
    }

    /**
     * delete heap dump
     * @summary deleteHeapDump
     * @param id 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public deleteHeapDump(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<boolean> {
        return this.deleteHeapDumpWithHttpInfo(id, authenticationkey, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response.json()) || {};
                }
            }));
    }

    /**
     * list heap dumps
     * @summary listHeapDumps
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param start 
     */
    public listHeapDumps(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, start?: number, extraHttpRequestParams?: any): Observable<Array<FileResource>> {
        return this.listHeapDumpsWithHttpInfo(authenticationkey, body, pagesize, currentpage, start, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response.json()) || {};
                }
            }));
    }


    /**
     * createHeapDump
     * create heap dump
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path 
     */
    public createHeapDumpWithHttpInfo(authenticationkey?: string, pathparam?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/debug/createHeapDump';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }

        if (path !== undefined && path !== null) {
            headers.set('path', String(pathparam));
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
     * deleteHeapDump
     * delete heap dump
     * @param id 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public deleteHeapDumpWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/debug/deleteHeapDump/${id}'
            .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteHeapDump.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
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
     * listHeapDumps
     * list heap dumps
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param start 
     */
    public listHeapDumpsWithHttpInfo(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, start?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/debug/listHeapDumps';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }

        if (pagesize !== undefined && pagesize !== null) {
            headers.set('pagesize', String(pagesize));
        }

        if (currentpage !== undefined && currentpage !== null) {
            headers.set('currentpage', String(currentpage));
        }

        if (start !== undefined && start !== null) {
            headers.set('start', String(start));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
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
