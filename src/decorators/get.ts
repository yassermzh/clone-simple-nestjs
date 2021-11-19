import { controllerMetaKey } from './constants';
import { Handler } from './types';

export function Get(path: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const handler: Handler = {
      path,
      httpMethod: 'get',
      handler: descriptor.value,
    };
    const handlers = Reflect.getMetadata(controllerMetaKey, target) ?? [];
    handlers.push(handler);
    Reflect.defineMetadata(controllerMetaKey, handlers, target);
  };
}
