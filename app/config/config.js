"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var Config = (function () {
    function Config(http) {
        this.http = http;
    }
    Config.prototype.getEnv = function (key) {
        return this.env[key];
    };
    Config.prototype.getConfig = function () {
        return this.config;
    };
    Config.prototype.getUrl = function () {
        return this.get('host') + ':' + this.get('port');
    };
    Config.prototype.get = function (key) {
        return this.config[key];
    };
    Config.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('env.json').map(function (res) { return res.json(); })
                .subscribe(function (envResponse) {
                _this.env = envResponse;
                var request = null;
                switch (envResponse.env) {
                    case 'production':
                        {
                            request = _this.http.get('config.' + envResponse.env + '.json');
                        }
                        break;
                    case 'development':
                        {
                            request = _this.http.get('config.' + envResponse.env + '.json');
                        }
                        break;
                    case 'default':
                        {
                            console.error('Environment file is not set or invalid');
                            resolve(true);
                        }
                        break;
                }
                if (request) {
                    request
                        .map(function (res) {
                        _this.config = res.json();
                    })
                        .catch(function (error) {
                        console.error('Error reading ' + envResponse.env + ' configuration file');
                        resolve(error);
                        return Rx_1.Observable.throw(error.json().error || 'Server error');
                    })
                        .subscribe(function (responseData) {
                        resolve(true);
                    });
                }
                else {
                    console.error('Env config file "env.json" is not valid');
                    resolve(true);
                }
            });
        });
    };
    Config = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Config);
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map