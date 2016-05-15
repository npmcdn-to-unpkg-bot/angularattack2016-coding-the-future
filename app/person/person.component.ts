import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {PersonService} from '../person/person.service';
import {Person} from '../person/person.model';

@Component({
    selector: 'my-app',
    templateUrl: 'app/person/person.component.html',
    providers: [PersonService]
})
export class PersonComponent implements OnInit {
    public person: Person = new Person;
    
    constructor(
        private _service: PersonService,
        private _router: Router
    ){}

    ngOnInit() {
        
    }

    onSubmit() {
        this._service.setStorage(this.person);
        this.onclickGoToMood();
    }

    onclickGoToMood() {
        this._router.navigate(['Mood']);
    }
}