/// <reference path="../typings/angular2/angular2.d.ts" />
import { Component, View,
    bootstrap, bind } from 'angular2/angular2';
import { RouteConfig, RouterOutlet, Router } from 'angular2/router';
import { routerInjectables, LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';
import { httpInjectables } from 'angular2/http';
//import { PipeRegistry } from 'angular2/change_detection';
//import { pipes } from 'app/components/pipes/pipes';
import {PhoneListComponent} from './phone-list/PhoneList.component';
//import {PhoneComponent} from './phone/Phone.component';

@Component({
    selector: 'app'
})
@View({
    template: `<router-outlet></router-outlet>`,
    directives: [RouterOutlet]
})
@RouteConfig([
    //{ path: '/',  redirectTo: '/customers' },
    { path: '/',              as: 'phones',  component: PhoneListComponent }
    //{ path: '/phone/:id',    as: 'phone',     component: PhoneComponent    }
])
export class App {
    router: Router;
    location: Location;

    constructor(router: Router) {
        this.router = router;

        //Manual navigation for now
        //let url = browserLocation.path();
        //router.navigate(url);
    }
}

//Bootstrap App
bootstrap(App, [
    httpInjectables,
    routerInjectables,
    bind(LocationStrategy).toClass(HashLocationStrategy)
    //Hook custom pipe into the PipeRegistry
    //bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);
