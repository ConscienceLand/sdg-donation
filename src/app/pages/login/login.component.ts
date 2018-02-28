import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DonationService } from '../../service/donation.service'
import { NotificationsService } from 'angular2-notifications';
import { AlertService } from '../../service/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public input: any;

    constructor(public donation: DonationService,
                private router: Router,
                private notificationsService: NotificationsService,
                private alert: AlertService,
               	) {
        this.input = {"code": ""};
    }

    ngOnInit() {
    }

    public login() {
        if(this.input.code) {
            this.donation.login(this.input.code)
                .then(()=>this.router.navigate(["/account"]))
                .catch((error)=>{
                    console.log(error)
                    this.alert.errorToast('Error', 'Wrong Passcode');
                })
                    }
    }
}
