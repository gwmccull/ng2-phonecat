/// <reference path="../../typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var forms_1 = require('angular2/forms');
var router_1 = require('angular2/router');
var angularfire_1 = require('lib/firebase/angularfire');
var PhonesService_1 = require('common/service/PhonesService');
var PhoneListComponent = (function () {
    function PhoneListComponent(phonesService) {
        this.message = "I'm the child";
        //this.sync = sync;
        this.phonesService = phonesService;
        //this.phonesService = sync.asArray();
        //this.phones = this.phonesService.list;
        console.log(this.phonesService);
        console.log(this.phones);
    }
    PhoneListComponent.prototype.init = function () {
        this.phones = this.phonesService.getPhones();
    };
    PhoneListComponent = __decorate([
        angular2_1.Component({
            selector: 'phone-list',
            hostInjector: [
                angularfire_1.AngularFire,
                angular2_1.bind(Firebase).toValue(new Firebase('https://ng2-phonecat.firebaseio.com/phones')),
                PhonesService_1.PhonesService
            ]
        }),
        angular2_1.View({
            templateUrl: 'phone-list/phone-list.html',
            directives: [
                angular2_1.NgFor,
                forms_1.formDirectives,
                angular2_1.NgModel,
                router_1.RouterLink
            ]
        })
    ], PhoneListComponent);
    return PhoneListComponent;
})();
exports.PhoneListComponent = PhoneListComponent;
