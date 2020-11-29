import { DefaultCrudRepository } from '@loopback/repository';
import { Car, CarRelations } from '../models';
import { CarDataSource } from '../datasources';
export declare class CarRepository extends DefaultCrudRepository<Car, typeof Car.prototype.id, CarRelations> {
    constructor(dataSource: CarDataSource);
}
