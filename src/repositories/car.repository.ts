import {DefaultCrudRepository} from '@loopback/repository';
import {Car, CarRelations} from '../models';
import {CarDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarRepository extends DefaultCrudRepository<
  Car,
  typeof Car.prototype.id,
  CarRelations
> {
  constructor(
    @inject('datasources.car') dataSource: CarDataSource,
  ) {
    super(Car, dataSource);
  }
}
