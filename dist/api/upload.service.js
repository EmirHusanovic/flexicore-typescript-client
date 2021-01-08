"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
/* tslint:disable:no-unused-variable member-ordering */
const core_1 = require("@angular/core");
const flexiCoreDecycle_1 = require("./flexiCoreDecycle");
const http_1 = require("@angular/http");
const http_2 = require("@angular/http");
const variables_1 = require("../variables");
const configuration_1 = require("../configuration");
let UploadService = class UploadService {
    constructor(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
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
    extendObj(objA, objB) {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
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
     * @param md5
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteFileResource(md5, authenticationkey, extraHttpRequestParams) {
        return this.deleteFileResourceWithHttpInfo(md5, authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * finalize FileResource , sending it for processing
     * @summary finalize
     * @param md5
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param hint
     * @param fileType
     * @param dontProcess
     */
    finalizeUpload(md5, authenticationkey, hint, fileType, dontProcess, extraHeaders, extraHttpRequestParams) {
        return this.finalizeUploadWithHttpInfo(md5, authenticationkey, hint, fileType, dontProcess, extraHeaders, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param md5
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getFileResource(md5, authenticationkey, extraHttpRequestParams) {
        return this.getFileResourceWithHttpInfo(md5, authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param jobID
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getJob(jobID, authenticationkey, extraHttpRequestParams) {
        return this.getJobWithHttpInfo(jobID, authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     * @param calcMd5
     */
    registerFile(authenticationkey, path, calcMd5, extraHttpRequestParams) {
        return this.registerFileWithHttpInfo(authenticationkey, path, calcMd5, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     * @param hint
     * @param fileType
     * @param dontProcess
     * @param calcMd5
     */
    registerFileAndFinlize(authenticationkey, path, hint, fileType, dontProcess, calcMd5, extraHttpRequestParams) {
        return this.registerFileAndFinlizeWithHttpInfo(authenticationkey, path, hint, fileType, dontProcess, calcMd5, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param jobID
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    stopJob(jobID, authenticationkey, extraHttpRequestParams) {
        return this.stopJobWithHttpInfo(jobID, authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param jobID
     * @param phaseName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    updateJobPhase(jobID, phaseName, authenticationkey, extraHttpRequestParams) {
        return this.updateJobPhaseWithHttpInfo(jobID, phaseName, authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param jobID
     * @param key
     * @param value
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    updateJobProperty(jobID, key, value, authenticationkey, extraHttpRequestParams) {
        return this.updateJobPropertyWithHttpInfo(jobID, key, value, authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    uploadFile(authenticationkey, md5, name, blob, extraHttpRequestParams) {
        return this.uploadFileWithHttpInfo(authenticationkey, md5, name, null, false, blob, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    uploadFileWithChunkMd5(authenticationkey, md5, name, chunkMd5, lastChunk, blob, extraHttpRequestParams) {
        return this.uploadFileWithHttpInfo(authenticationkey, md5, name, chunkMd5, lastChunk, blob, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    uploadFileMulti(authenticationkey, body, extraHttpRequestParams) {
        return this.uploadFileMultiWithHttpInfo(authenticationkey, body, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    validate(authenticationkey, extraHttpRequestParams) {
        return this.validateWithHttpInfo(authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     *
     *
     * @param md5
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteFileResourceWithHttpInfo(md5, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/resources/${md5}'
            .replace('${' + 'md5' + '}', String(md5));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'md5' is not null or undefined
        if (md5 === null || md5 === undefined) {
            throw new Error('Required parameter md5 was null or undefined when calling deleteFileResource.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * finalize
     * finalize FileResource , sending it for processing
     * @param md5
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param hint
     * @param fileType
     * @param dontProcess
     */
    finalizeUploadWithHttpInfo(md5, authenticationkey, hint, fileType, dontProcess, extraHeaders, extraHttpRequestParams) {
        const path = this.basePath + '/resources/finalize/${md5}'
            .replace('${' + 'md5' + '}', String(md5));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'md5' is not null or undefined
        if (md5 === null || md5 === undefined) {
            throw new Error('Required parameter md5 was null or undefined when calling finalizeUpload.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (hint !== undefined && hint !== null) {
            headers.set('hint', String(hint));
        }
        if (fileType !== undefined && fileType !== null) {
            headers.set('fileType', String(fileType));
        }
        if (dontProcess !== undefined && dontProcess !== null) {
            headers.set('dontProcess', String(dontProcess));
        }
        if (extraHeaders !== undefined && extraHeaders !== null) {
            extraHeaders.forEach((value, key) => {
                headers.set(key, value);
            });
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param md5
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getFileResourceWithHttpInfo(md5, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/resources/${md5}'
            .replace('${' + 'md5' + '}', String(md5));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'md5' is not null or undefined
        if (md5 === null || md5 === undefined) {
            throw new Error('Required parameter md5 was null or undefined when calling getFileResource.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param jobID
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getJobWithHttpInfo(jobID, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/jobProcess/${jobID}'
            .replace('${' + 'jobID' + '}', String(jobID));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling getJob.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     * @param calcMd5
     */
    registerFileWithHttpInfo(authenticationkey, pathparam, calcMd5, extraHttpRequestParams) {
        const path = this.basePath + '/resources/register';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (path !== undefined && path !== null) {
            headers.set('path', String(pathparam));
        }
        if (calcMd5 !== undefined && calcMd5 !== null) {
            headers.set('calcMd5', String(calcMd5));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     * @param hint
     * @param fileType
     * @param dontProcess
     * @param calcMd5
     */
    registerFileAndFinlizeWithHttpInfo(authenticationkey, pathparam, hint, fileType, dontProcess, calcMd5, extraHttpRequestParams) {
        const path = this.basePath + '/resources/registerAndFinalize';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (path !== undefined && path !== null) {
            headers.set('path', String(pathparam));
        }
        if (hint !== undefined && hint !== null) {
            headers.set('hint', String(hint));
        }
        if (fileType !== undefined && fileType !== null) {
            headers.set('fileType', String(fileType));
        }
        if (dontProcess !== undefined && dontProcess !== null) {
            headers.set('dontProcess', String(dontProcess));
        }
        if (calcMd5 !== undefined && calcMd5 !== null) {
            headers.set('calcMd5', String(calcMd5));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param jobID
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    stopJobWithHttpInfo(jobID, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/jobProcess/${jobID}'
            .replace('${' + 'jobID' + '}', String(jobID));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling stopJob.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param jobID
     * @param phaseName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    updateJobPhaseWithHttpInfo(jobID, phaseName, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/jobProcess/updateJobPhase/${jobID}/${phaseName}'
            .replace('${' + 'jobID' + '}', String(jobID))
            .replace('${' + 'phaseName' + '}', String(phaseName));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling updateJobPhase.');
        }
        // verify required parameter 'phaseName' is not null or undefined
        if (phaseName === null || phaseName === undefined) {
            throw new Error('Required parameter phaseName was null or undefined when calling updateJobPhase.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param jobID
     * @param key
     * @param value
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    updateJobPropertyWithHttpInfo(jobID, key, value, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/jobProcess/updateJobProperty/${jobID}/${key}/${value}'
            .replace('${' + 'jobID' + '}', String(jobID))
            .replace('${' + 'key' + '}', String(key))
            .replace('${' + 'value' + '}', String(value));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling updateJobProperty.');
        }
        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling updateJobProperty.');
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling updateJobProperty.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    uploadFileMultiWithHttpInfo(authenticationkey, body, extraHttpRequestParams) {
        const path = this.basePath + '/resources/upload';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
        *
        *
        * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
        * @param body
        */
    uploadFileWithHttpInfo(authenticationkey, md5, name, chunkMd5, lastChunk, blob, extraHttpRequestParams) {
        const path = this.basePath + '/resources/upload';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (md5 !== undefined && md5 !== null) {
            headers.set('md5', String(md5));
        }
        if (name !== undefined && name !== null) {
            headers.set('name', String(name));
        }
        if (chunkMd5 !== undefined && chunkMd5 !== null) {
            headers.set('chunkMd5', String(chunkMd5));
        }
        if (lastChunk !== undefined && lastChunk !== null) {
            headers.set('lastChunk', String(lastChunk));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/octet-stream');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: blob,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    validateWithHttpInfo(authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/resources/validate';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
};
UploadService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional())
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map