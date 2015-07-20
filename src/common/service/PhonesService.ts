import { Component, bind     } from 'angular2/angular2';
import {AngularFire, FirebaseArray} from 'lib/firebase/angularfire';


@Component({})
class PhonesService {
    phones: FirebaseArray;

    constructor(sync: AngularFire) {
        this.phones = sync.asArray();
        console.log("service", this.phones);
    }

    getPhones() {
        return this.phones.list;
    }
}

export {PhonesService};