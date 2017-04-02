import { Component, Input, OnInit} from '@angular/core';

import 'rxjs/Rx';

import '../styles.css';
import {DacaUser} from '../services/daca-user';
import {Name} from '../services/name';
import {Address} from '../services/address';
import {DacaUserService} from '../services/send-service';

@Component({
    selector: 'daca-time-app',
    styles: [ require('./app.component.css')],
    template: require('./app.component.html'),
    providers: [DacaUserService]
})

export class AppComponent implements OnInit {
    backendUrl = '';
    title = 'DACA Time';

    @Input()
    formUser: DacaUser;

    constructor(
       private userService: DacaUserService
    ){}

    ngOnInit(): void {
           this.formUser = new DacaUser();
           this.formUser.name = new Name();
           this.formUser.address = new Address();
    }

    statusOrOutcomeOptions = [
        'activeProceedings',
        'closedProceedings',
        'terminated',
        'finalOrder',
        'other'
    ];

    apartmentOptions = [
        'ste',
        'apt',
        'flr'
    ];

    requestTypeOptions = [
        'initial',
        'renewal'
    ];

    sendDacaUser(): void {
        console.log(this.formUser);
        // this.userService.sendUserDataToBackend(this.formUser)
        //     .then(data => {
        //         this.formUser = data;
        //     })
    }
}
