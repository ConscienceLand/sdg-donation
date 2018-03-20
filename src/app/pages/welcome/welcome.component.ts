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

single: any[] = [
    {
      "name": "Other",
      "value": 30
    },
    {
      "name": "Monero",
      "value": 46
    },
    {
      "name": "Litcoin",
      "value": 62
    },
    {
      "name": "Dash",
      "value": 78
    },
    {
      "name": "Zcash",
      "value": 94
    },
    {
      "name": "Ripple",
      "value": 110
    },
    {
      "name": "ETH",
      "value": 126
    },
    {
      "name": "Bitcoin",
      "value": 142
    },
    {
      "name": "ETC",
      "value": 120
    },
    {
      "name": "ETP",
      "value": 110
    },
    {
      "name": "Dogecoin",
      "value": 100
    },
    {
      "name": "AGI",
      "value": 90
    },
    {
      "name": "NULS",
      "value": 80
    },
    {
      "name": "NEO",
      "value": 70
    },
    {
      "name": "MCM",
      "value": 60
    },
    {
      "name": "ELA",
      "value": 50
    },
    {
      "name": "AER",
      "value": 40
    },
    {
      "name": "SER",
      "value": 30
    },
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = false;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Currency';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';

  colorScheme = {
      domain: ['#a972cb', '#cb72aa', '#ef6eae', '#ef8f6e', '#ff7f82', '#ffdc7f', '#ffa260', '#e5ff60', '#e4cb58', '#94e458', '#8fc866', '#66c887', '#19bc8b', '#1973bc']
  };

  onSelect(event) {
    console.log(event);
  }

}
