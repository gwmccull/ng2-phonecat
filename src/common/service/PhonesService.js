if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angularfire_1 = require('lib/firebase/angularfire');
var PhonesService = (function () {
    function PhonesService(sync) {
        this.phones = sync.asArray();
        console.log("service", this.phones);
    }
    PhonesService.prototype.getPhones = function () {
        return this.phones.list;
    };
    PhonesService = __decorate([
        angular2_1.Component({}), 
        __metadata('design:paramtypes', [angularfire_1.AngularFire])
    ], PhonesService);
    return PhonesService;
})();
exports.PhonesService = PhonesService;
