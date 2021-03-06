import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';
import { CookieService } from 'ngx-cookie-service';
import { NgxChartsModule } from '@swimlane/ngx-charts';



import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { DonationService } from './service/donation.service';
import { AlertService } from './service/alert.service';

import { AccountComponent } from './pages/account/account.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DonationComponent } from './pages/donation/donation.component';
import { CurrencyComponent } from './pages/currency/currency.component';


let routes = [
    { path: "", redirectTo: "welcome", pathMatch: "full"},
    { path: "welcome", component: WelcomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "account", component: AccountComponent },
    { path: "donation", component: DonationComponent },
    { path: "donation/:currency", component: CurrencyComponent }

];

export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
};

@NgModule({
    declarations: [
        AppComponent,
        AccountComponent,
        WelcomeComponent,
        RegisterComponent,
        LoginComponent,
        DonationComponent,
        CurrencyComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        QRCodeModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AlertModule.forRoot(),
        SimpleNotificationsModule.forRoot(),
        RouterModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        AngularFontAwesomeModule,
        NgxChartsModule
    ],
    exports: [TranslateModule],
    providers: [
        DonationService,
        AlertService,
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
