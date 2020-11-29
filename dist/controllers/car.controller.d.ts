import { Count, Filter, Where } from '@loopback/repository';
import { Car } from '../models';
import { CarRepository } from '../repositories';
export declare class CarController {
    carRepository: CarRepository;
    constructor(carRepository: CarRepository);
    create(car: Car): Promise<Car>;
    count(where?: Where<Car>): Promise<Count>;
    find(filter?: Filter<Car>): Promise<Car[]>;
    updateAll(car: Car, where?: Where<Car>): Promise<Count>;
    findById(id: number): Promise<Car>;
    updateById(id: number, car: Car): Promise<void>;
    replaceById(id: number, car: Car): Promise<void>;
    deleteById(id: number): Promise<void>;
}
