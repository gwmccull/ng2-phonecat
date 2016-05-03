if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var http_1 = require('angular2/http');
//import { PipeRegistry } from 'angular2/change_detection';
//import { pipes } from 'app/components/pipes/pipes';
var PhoneList_component_1 = require('./phone-list/PhoneList.component');
//import {PhoneComponent} from './phone/Phone.component';
var App = (function () {
    function App(router) {
        this.router = router;
        //Manual navigation for now
        //let url = browserLocation.path();
        //router.navigate(url);
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "<router-outlet></router-outlet>",
            directives: [router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            //{ path: '/',  redirectTo: '/customers' },
            { path: '/', as: 'phones', component: PhoneList_component_1.PhoneListComponent }
        ])
    ], App);
    return App;
})();
exports.App = App;
//Bootstrap App
angular2_1.bootstrap(App, [
    http_1.httpInjectables,
    router_2.routerInjectables,
    angular2_1.bind(router_2.LocationStrategy).toClass(router_2.HashLocationStrategy)
]);
