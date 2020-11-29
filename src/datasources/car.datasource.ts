import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './car.datasource.json';

export class CarDataSource extends juggler.DataSource {
  static dataSourceName = 'car';

  constructor(
    @inject('datasources.config.car', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
