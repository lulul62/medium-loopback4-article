import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Car} from '../models';
import {CarRepository} from '../repositories';

export class CarController {
  constructor(
    @repository(CarRepository)
    public carRepository : CarRepository,
  ) {}

  @post('/cars', {
    responses: {
      '200': {
        description: 'Car model instance',
        content: {'application/json': {schema: {'x-ts-type': Car}}},
      },
    },
  })
  async create(@requestBody() car: Car): Promise<Car> {
    return await this.carRepository.create(car);
  }

  @get('/cars/count', {
    responses: {
      '200': {
        description: 'Car model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return await this.carRepository.count(where);
  }

  @get('/cars', {
    responses: {
      '200': {
        description: 'Array of Car model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Car}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Car)) filter?: Filter<Car>,
  ): Promise<Car[]> {
    return await this.carRepository.find(filter);
  }

  @patch('/cars', {
    responses: {
      '200': {
        description: 'Car PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {partial: true}),
        },
      },
    })
    car: Car,
    @param.query.object('where', getWhereSchemaFor(Car)) where?: Where<Car>,
  ): Promise<Count> {
    return await this.carRepository.updateAll(car, where);
  }

  @get('/cars/{id}', {
    responses: {
      '200': {
        description: 'Car model instance',
        content: {'application/json': {schema: {'x-ts-type': Car}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Car> {
    return await this.carRepository.findById(id);
  }

  @patch('/cars/{id}', {
    responses: {
      '204': {
        description: 'Car PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Car, {partial: true}),
        },
      },
    })
    car: Car,
  ): Promise<void> {
    await this.carRepository.updateById(id, car);
  }

  @put('/cars/{id}', {
    responses: {
      '204': {
        description: 'Car PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() car: Car,
  ): Promise<void> {
    await this.carRepository.replaceById(id, car);
  }

  @del('/cars/{id}', {
    responses: {
      '204': {
        description: 'Car DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.carRepository.deleteById(id);
  }
}
