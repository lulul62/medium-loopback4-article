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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CarController = class CarController {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async create(car) {
        return await this.carRepository.create(car);
    }
    async count(where) {
        return await this.carRepository.count(where);
    }
    async find(filter) {
        return await this.carRepository.find(filter);
    }
    async updateAll(car, where) {
        return await this.carRepository.updateAll(car, where);
    }
    async findById(id) {
        return await this.carRepository.findById(id);
    }
    async updateById(id, car) {
        await this.carRepository.updateById(id, car);
    }
    async replaceById(id, car) {
        await this.carRepository.replaceById(id, car);
    }
    async deleteById(id) {
        await this.carRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/cars', {
        responses: {
            '200': {
                description: 'Car model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Car } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Car]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "create", null);
__decorate([
    rest_1.get('/cars/count', {
        responses: {
            '200': {
                description: 'Car model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Car))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "count", null);
__decorate([
    rest_1.get('/cars', {
        responses: {
            '200': {
                description: 'Array of Car model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Car } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Car))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "find", null);
__decorate([
    rest_1.patch('/cars', {
        responses: {
            '200': {
                description: 'Car PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Car, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Car))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Car, Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/cars/{id}', {
        responses: {
            '200': {
                description: 'Car model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Car } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findById", null);
__decorate([
    rest_1.patch('/cars/{id}', {
        responses: {
            '204': {
                description: 'Car PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Car, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Car]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "updateById", null);
__decorate([
    rest_1.put('/cars/{id}', {
        responses: {
            '204': {
                description: 'Car PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Car]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/cars/{id}', {
        responses: {
            '204': {
                description: 'Car DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "deleteById", null);
CarController = __decorate([
    __param(0, repository_1.repository(repositories_1.CarRepository)),
    __metadata("design:paramtypes", [repositories_1.CarRepository])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map