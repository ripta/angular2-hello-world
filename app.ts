/// <reference path="typings/tsd.d.ts" />

import {bootstrap, Component, View} from 'angular2/angular2';

@Component({selector: 'hello-world'})
@View({template: '<h1>Hello {{ name }} from {{ location }}!</h1>'})
class HelloWorldComponent {
	location: string;
	name: string;
	constructor() {
		this.name = 'World';
		this.location = 'Angular 2';
	}
}

bootstrap(HelloWorldComponent);
