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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("../../types");
const base_controller_1 = require("../../common/base.controller");
let CharacterController = class CharacterController extends base_controller_1.BaseController {
    constructor(loggerService) {
        super(loggerService);
        this.loggerService = loggerService;
        this.bindRoutes([
            { path: '/', method: 'get', func: this.getAll },
            { path: '/:id', method: 'get', func: this.getSingle },
            { path: '/', method: 'post', func: this.createSingle },
        ]);
    }
    getAll(req, res, next) {
        this.ok(res, 'get all Characters');
    }
    getSingle(req, res, next) {
        this.ok(res, 'get a single Character');
    }
    createSingle(req, res, next) {
        console.log(req.body);
        this.ok(res, 'created a single Character');
    }
};
CharacterController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ILogger)),
    __metadata("design:paramtypes", [Object])
], CharacterController);
exports.CharacterController = CharacterController;
//# sourceMappingURL=character.controller.js.map