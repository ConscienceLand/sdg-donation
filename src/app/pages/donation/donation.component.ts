import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    selector: 'app-donation',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
    cryptos: Object[];

    constructor(private router: Router) { }

    ngOnInit() {
        this.cryptos = ['btc', 'eth', 'etc', 'etp'];
    }

    gotoCurrency(currency:string) {
        console.log(currency)
        this.router.navigate(['donation', currency]);
    }
}
