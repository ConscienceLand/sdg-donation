import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CookieService } from 'ngx-cookie-service';
import { DonationService } from '../../service/donation.service'

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

    public selectedCurrency:any;
    public angularxQrCode: string;
    public currencyAddress: any;
    public currencyEnd: any;
    // assign a value anywhere in/below your constructor

    constructor(private route: ActivatedRoute,
                public donation: DonationService,
                private cookieService: CookieService) {}

    ngOnInit() {

        this.route.params.subscribe( params => {
	if(params.currency)
            this.selectedCurrency = params.currency.toUpperCase();
            console.log(params)

            // need check
            let code = this.cookieService.get('code');

            // Test code: SU677A7ESQZVT7BSZ5Y55S9CWBJF29
            this.donation.address(code, this.selectedCurrency).then((response:any)=> {
                console.log(response);
                this.currencyAddress = response.result.address;
                this.currencyEnd = new Date(response.result.end*1000);
                this.angularxQrCode = this.currencyAddress;
            })
        } );

        this.angularxQrCode = ' ';
    }



}
