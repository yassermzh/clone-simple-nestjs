import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { controllerMetaKey } from './constants';

export function Controller<T extends { new (...args: any[]) }>(path: string) {
  return function (constructor: T) {
    @Service()
    class ControllerWithRouter extends constructor {
      _router: Router;

      constructor(...args: any[]) {
        super(args);
        this._router = Router();
        Reflect.getMetadata(controllerMetaKey, this).forEach((meta) => {
          this._router[meta.httpMethod](
            path + meta.path,
            async (req: Request, res: Response) =>
              res.json(await meta.handler.call(this, req, res)),
          );
        });
      }

      getRouter() {
        return this._router;
      }
    }
    return ControllerWithRouter;
  };
}
