import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'app'
})
@View({
    templateUrl: 'app.html'
})

class AppController {
    name: string;

    constructor() {
        this.name = 'Bob';
    }
}

// example of dependency injection
// AppComponent.$inject = ['Notes'];

export {AppController};
