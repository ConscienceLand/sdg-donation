import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

    public selectedCurrency:any;
    public angularxQrCode: string = '';
    // assign a value anywhere in/below your constructor

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
            this.selectedCurrency = params.currency.toUpperCase();
            console.log(params)
        } );
    }

    ngOnInit() {

    	this.angularxQrCode = this.selectedCurrency;
    }



}
