import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DonationService } from '../../service/donation.service'
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    constructor(private router: Router, public donation: DonationService, public translate: TranslateService, private cookieService: CookieService) { }

		public donationHistoryList: any;
    public gotHistory: boolean = true;

    ngOnInit() {
        this.translate.get('AccountRollingText1').subscribe((res: string) => {
            this.consoleText([res, res, res], 'text',['tomato','rebeccapurple','lightblue']);
        });

        // need check
        let code = this.cookieService.get('code');

        // Test code: SU677A7ESQZVT7BSZ5Y55S9CWBJF29
				this.donation.deposits(code).then((response:any)=>{
            // No history/deposits
            if(response.result.length == 0)
                this.gotHistory = false;
            else
	            this.donationHistoryList = response.result;
        });
    }


    public gotoDonation() {
        this.router.navigate(["/donation"]);
    }


    public consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function() {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function() {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function() {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
        window.setInterval(function() {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        }, 400)
    }


}
