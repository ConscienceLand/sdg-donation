import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertService } from '../../service/alert.service'

import { DonationService } from '../../service/donation.service'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public input: any;

    constructor(public donation: DonationService, private router: Router, private alert: AlertService) {
        this.input = {
            "email": ""
        };
    }

    ngOnInit() {
    }

    public register() {
        if(this.input.email) {
            this.donation.register(this.input.email, 'en')
                .then(() => {
                    this.router.navigate(["/login"]);
                    this.alert.successToast("Succss", "Check your Email!")
                })
                .catch((error)=> {
                    console.log(error)
                    this.alert.errorToast('Error', "Email not Valid")
                })
                    }
    }

}
