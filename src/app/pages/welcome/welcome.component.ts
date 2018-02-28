import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }


    public login() {
        this.router.navigate(["/login"]);
    }


    public register() {
        this.router.navigate(["/register"]);
    }

}
