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
import { Observable } from 'rxjs/Observable';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { AuthenticationNewRequestHolder } from '../model/authenticationNewRequestHolder';
import { AuthenticationNewResponse } from '../model/authenticationNewResponse';
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';



@Injectable()
export class AuthenticationNewService {

    protected basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration: Configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * Login
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */

    public login(authenticationkey?: string, body?: AuthenticationNewRequestHolder, observe?: 'body', reportProgress?: boolean): Observable<AuthenticationNewResponse>;
    public login(authenticationkey?: string, body?: AuthenticationNewRequestHolder, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AuthenticationNewResponse>>;
    public login(authenticationkey?: string, body?: AuthenticationNewRequestHolder, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AuthenticationNewResponse>>;
    public login(authenticationkey?: string, body?: AuthenticationNewRequestHolder, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<AuthenticationNewResponse>(`${this.basePath}/authenticationNew/login`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o => FlexiCoreDecycle.retrocycle(o));
    }
}
