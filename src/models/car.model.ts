import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Car extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  brand: string;
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  constructor(data?: Partial<Car>) {
    super(data);
  }
}

export interface CarRelations {
  // describe navigational properties here
}

export type CarWithRelations = Car & CarRelations;
