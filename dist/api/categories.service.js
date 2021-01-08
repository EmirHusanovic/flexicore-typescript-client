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
exports.CategoriesService = void 0;
/* tslint:disable:no-unused-variable member-ordering */
const core_1 = require("@angular/core");
const flexiCoreDecycle_1 = require("./flexiCoreDecycle");
const http_1 = require("@angular/http");
const http_2 = require("@angular/http");
const variables_1 = require("../variables");
const configuration_1 = require("../configuration");
let CategoriesService = class CategoriesService {
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
     * Connect a Category to an instance of any entity in the system
     * @summary Connect to Category
     * @param baseId The ID of an existing entity in the system, entity must inherit from FC Baseclass
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param catId The ID of an existing Category
     */
    connectCategory(baseId, authenticationkey, catId, extraHttpRequestParams) {
        return this.connectCategoryWithHttpInfo(baseId, authenticationkey, catId, extraHttpRequestParams)
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
     * Return a single category
     * @summary Create a Category
     * @param categoryName Inside a user interface categories are displayed by thier name
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    createCategory(categoryName, authenticationkey, extraHttpRequestParams) {
        return this.createCategoryWithHttpInfo(categoryName, authenticationkey, extraHttpRequestParams)
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
     * Disable a previously disabled Category, the CategoryID to be enabled is passed as the entity in the Post request(!)
     * @summary Disable Category on Class
     * @param className the cannonical name of a Class of an Entity in the system, such Class must extend Baseclass, for Example: &#39;com.flexicore.model.User&#39;
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    disableCategory(className, authenticationkey, body, extraHttpRequestParams) {
        return this.disableCategoryWithHttpInfo(className, authenticationkey, body, extraHttpRequestParams)
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
     * Disconnect a Category from an instance of a connected(to this Category) entity in the system
     * @summary Disconnect from Category
     * @param baseId The ID of an existing entity in the system, entity must inherit from FC Baseclass and connected to the specified Category
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param catId The ID of an existing Category
     */
    disconnectCategory(baseId, authenticationkey, catId, extraHttpRequestParams) {
        return this.disconnectCategoryWithHttpInfo(baseId, authenticationkey, catId, extraHttpRequestParams)
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
     * Before a Category can be connected to an INSTANCE of a class it must be enabled to the class, thus a list of categories can be easily filtered by the context of the class at hand, the CategoryID to be enabled is passed as the entity in the Post request(!)
     * @summary Enable Category on Class
     * @param className the cannonical name of a Class of an Entity in the system, such Class must extend Baseclass, for Example: &#39;com.flexicore.model.User&#39;
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    enableCategory(className, authenticationkey, body, extraHttpRequestParams) {
        return this.enableCategoryWithHttpInfo(className, authenticationkey, body, extraHttpRequestParams)
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
     * Get a list of all Categories whose name starts with the supplied string
     * @summary Get a list of Categories  by name
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    getAllCategories(authenticationkey, pagesize, currentpage, extraHttpRequestParams) {
        return this.getAllCategoriesWithHttpInfo(authenticationkey, pagesize, currentpage, extraHttpRequestParams)
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
     * Get a list of all Categories that are connected to an instance
     * @summary List Categories  by Instance
     * @param baseId The ID of an existing entity in the system, entity must inherit from FC Baseclass
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAllCategoriesConnected(baseId, authenticationkey, extraHttpRequestParams) {
        return this.getAllCategoriesConnectedWithHttpInfo(baseId, authenticationkey, extraHttpRequestParams)
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
     * Get a list of all Categories that can be used (previously enabled) by a Class
     * @summary List Categories  by Class
     * @param className the cannonical name of a Class of an Entity in the system, such Class must extend Baseclass, for Example: &#39;com.flexicore.model.media.Media&#39; will retrieve only Categories that can be used with a Media Object(Instance)
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getCategory(className, authenticationkey, extraHttpRequestParams) {
        return this.getCategoryWithHttpInfo(className, authenticationkey, extraHttpRequestParams)
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
     * Get a list of all Categories whose name starts with the supplied string
     * @summary Get a list of Categories  by name
     * @param name A string that must match the left characters of a retrieved Category name
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getCategoryByName(name, authenticationkey, extraHttpRequestParams) {
        return this.getCategoryByNameWithHttpInfo(name, authenticationkey, extraHttpRequestParams)
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
     * Connect to Category
     * Connect a Category to an instance of any entity in the system
     * @param baseId The ID of an existing entity in the system, entity must inherit from FC Baseclass
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param catId The ID of an existing Category
     */
    connectCategoryWithHttpInfo(baseId, authenticationkey, catId, extraHttpRequestParams) {
        const path = this.basePath + '/category/${baseId}'
            .replace('${' + 'baseId' + '}', String(baseId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'baseId' is not null or undefined
        if (baseId === null || baseId === undefined) {
            throw new Error('Required parameter baseId was null or undefined when calling connectCategory.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (catId !== undefined && catId !== null) {
            headers.set('catId', String(catId));
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
     * Create a Category
     * Return a single category
     * @param categoryName Inside a user interface categories are displayed by thier name
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    createCategoryWithHttpInfo(categoryName, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/category';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'categoryName' is not null or undefined
        if (categoryName === null || categoryName === undefined) {
            throw new Error('Required parameter categoryName was null or undefined when calling createCategory.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (categoryName !== undefined && categoryName !== null) {
            headers.set('categoryName', String(categoryName));
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
     * Disable Category on Class
     * Disable a previously disabled Category, the CategoryID to be enabled is passed as the entity in the Post request(!)
     * @param className the cannonical name of a Class of an Entity in the system, such Class must extend Baseclass, for Example: &#39;com.flexicore.model.User&#39;
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    disableCategoryWithHttpInfo(className, authenticationkey, body, extraHttpRequestParams) {
        const path = this.basePath + '/category/${class_name}/disable'
            .replace('${' + 'class_name' + '}', String(className));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'className' is not null or undefined
        if (className === null || className === undefined) {
            throw new Error('Required parameter className was null or undefined when calling disableCategory.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
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
     * Disconnect from Category
     * Disconnect a Category from an instance of a connected(to this Category) entity in the system
     * @param baseId The ID of an existing entity in the system, entity must inherit from FC Baseclass and connected to the specified Category
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param catId The ID of an existing Category
     */
    disconnectCategoryWithHttpInfo(baseId, authenticationkey, catId, extraHttpRequestParams) {
        const path = this.basePath + '/category/${baseId}'
            .replace('${' + 'baseId' + '}', String(baseId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'baseId' is not null or undefined
        if (baseId === null || baseId === undefined) {
            throw new Error('Required parameter baseId was null or undefined when calling disconnectCategory.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (catId !== undefined && catId !== null) {
            headers.set('catId', String(catId));
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
     * Enable Category on Class
     * Before a Category can be connected to an INSTANCE of a class it must be enabled to the class, thus a list of categories can be easily filtered by the context of the class at hand, the CategoryID to be enabled is passed as the entity in the Post request(!)
     * @param className the cannonical name of a Class of an Entity in the system, such Class must extend Baseclass, for Example: &#39;com.flexicore.model.User&#39;
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    enableCategoryWithHttpInfo(className, authenticationkey, body, extraHttpRequestParams) {
        const path = this.basePath + '/category/enable/${class_name}'
            .replace('${' + 'class_name' + '}', String(className));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'className' is not null or undefined
        if (className === null || className === undefined) {
            throw new Error('Required parameter className was null or undefined when calling enableCategory.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
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
     * Get a list of Categories  by name
     * Get a list of all Categories whose name starts with the supplied string
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    getAllCategoriesWithHttpInfo(authenticationkey, pagesize, currentpage, extraHttpRequestParams) {
        const path = this.basePath + '/category/getAll';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (pagesize !== undefined && pagesize !== null) {
            headers.set('pagesize', String(pagesize));
        }
        if (currentpage !== undefined && currentpage !== null) {
            headers.set('currentpage', String(currentpage));
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
     * List Categories  by Instance
     * Get a list of all Categories that are connected to an instance
     * @param baseId The ID of an existing entity in the system, entity must inherit from FC Baseclass
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAllCategoriesConnectedWithHttpInfo(baseId, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/category/connected/${baseId}'
            .replace('${' + 'baseId' + '}', String(baseId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'baseId' is not null or undefined
        if (baseId === null || baseId === undefined) {
            throw new Error('Required parameter baseId was null or undefined when calling getAllCategoriesConnected.');
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
     * List Categories  by Class
     * Get a list of all Categories that can be used (previously enabled) by a Class
     * @param className the cannonical name of a Class of an Entity in the system, such Class must extend Baseclass, for Example: &#39;com.flexicore.model.media.Media&#39; will retrieve only Categories that can be used with a Media Object(Instance)
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getCategoryWithHttpInfo(className, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/category/${class_name}'
            .replace('${' + 'class_name' + '}', String(className));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'className' is not null or undefined
        if (className === null || className === undefined) {
            throw new Error('Required parameter className was null or undefined when calling getCategory.');
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
     * Get a list of Categories  by name
     * Get a list of all Categories whose name starts with the supplied string
     * @param name A string that must match the left characters of a retrieved Category name
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getCategoryByNameWithHttpInfo(name, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/category/byname/${name}'
            .replace('${' + 'name' + '}', String(name));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getCategoryByName.');
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
};
CategoriesService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional())
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map