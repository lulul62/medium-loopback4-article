import { Entity } from '@loopback/repository';
export declare class Car extends Entity {
    brand: string;
    id: number;
    constructor(data?: Partial<Car>);
}
export interface CarRelations {
}
export declare type CarWithRelations = Car & CarRelations;
