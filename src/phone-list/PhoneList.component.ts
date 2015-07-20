/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind, NgFor, NgModel} from 'angular2/angular2';
import { formDirectives } from 'angular2/forms';
import { RouterLink } from 'angular2/router';

import {AngularFire, FirebaseArray} from 'lib/firebase/angularfire';
import {PhonesService} from 'common/service/PhonesService'


@Component({
    selector: 'phone-list',
    hostInjector: [
        AngularFire,
        bind(Firebase).toValue(new Firebase('https://ng2-phonecat.firebaseio.com/phones')),
        PhonesService
    ]
})
@View({
    templateUrl: 'phone-list/phone-list.html',
    directives: [
        NgFor,
        formDirectives,
        NgModel,
        RouterLink
    ]
})

class PhoneListComponent {
    message: string;
    //sync: AngularFire;
    //phonesService: any;
    phonesService: PhonesService;
    phones: any;

    constructor(phonesService: PhonesService) {
        this.message = "I'm the child";
        //this.sync = sync;
        this.phonesService = phonesService;
        //this.phonesService = sync.asArray();
        //this.phones = this.phonesService.list;
        console.log(this.phonesService);
        console.log(this.phones);
    }

    init() {
        this.phones = this.phonesService.getPhones();
    }
}

export {PhoneListComponent};