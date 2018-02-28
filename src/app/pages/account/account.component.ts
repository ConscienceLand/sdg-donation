import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    constructor(private router: Router) { }

    // check for history API
    ngOnInit() {
    }


    public donation() {
        this.router.navigate(["/donation"]);
    }


}
