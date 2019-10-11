import 'reflect-metadata';
import { Methods } from './enums/Methods';
import { MetadataKeys } from './enums/MetadataKeys';

const routeBinder = (method: string) => {
  return (path: string) => {
    return (target: any, key: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
};

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
export const put = routeBinder(Methods.put);
