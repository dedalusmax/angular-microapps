import { Injectable, Injector, NgModuleFactoryLoader, NgModuleRef, NgModuleFactory } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LazyLoaderOldService  {

    constructor(
        private loader: NgModuleFactoryLoader,
        private injector: Injector
    ) {
    }

    private moduleRef: NgModuleRef<any>;

    load(path): Promise<void> {

        if (this.moduleRef) {
            return Promise.resolve();
        }

        return this
            .loader
            .load(path)
            .then(moduleFactory => {
                this.moduleRef = moduleFactory.create(this.injector).instance;
            })
            .catch(err => {
                console.error('error loading module', err);
            });
    }
}
