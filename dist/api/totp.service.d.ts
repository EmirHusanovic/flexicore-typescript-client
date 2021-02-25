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
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../configuration';
import { TotpAuthenticationRequest, TotpAuthenticationResponse, TotpFinishSetupRequest, TotpFinishSetupResponse, TotpRecoverRequest, TotpRecoverResponse, TotpSetupRequest, TotpSetupResponse } from '../model/models';
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
export declare class TotpService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    authenticateTotp(authenticationkey?: string, body?: TotpAuthenticationRequest, observe?: 'body', reportProgress?: boolean): Observable<TotpAuthenticationResponse>;
    authenticateTotp(authenticationkey?: string, body?: TotpAuthenticationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TotpAuthenticationResponse>>;
    authenticateTotp(authenticationkey?: string, body?: TotpAuthenticationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TotpAuthenticationResponse>>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    finishSetupTotp(authenticationkey?: string, body?: TotpFinishSetupRequest, observe?: 'body', reportProgress?: boolean): Observable<TotpFinishSetupResponse>;
    finishSetupTotp(authenticationkey?: string, body?: TotpFinishSetupRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TotpFinishSetupResponse>>;
    finishSetupTotp(authenticationkey?: string, body?: TotpFinishSetupRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TotpFinishSetupResponse>>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    recoverTotp(authenticationkey?: string, body?: TotpRecoverRequest, observe?: 'body', reportProgress?: boolean): Observable<TotpRecoverResponse>;
    recoverTotp(authenticationkey?: string, body?: TotpRecoverRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TotpRecoverResponse>>;
    recoverTotp(authenticationkey?: string, body?: TotpRecoverRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TotpRecoverResponse>>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    setupTotp(authenticationkey?: string, body?: TotpSetupRequest, observe?: 'body', reportProgress?: boolean): Observable<TotpSetupResponse>;
    setupTotp(authenticationkey?: string, body?: TotpSetupRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TotpSetupResponse>>;
    setupTotp(authenticationkey?: string, body?: TotpSetupRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TotpSetupResponse>>;
}
