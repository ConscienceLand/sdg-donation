import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountComponent } from './account.component';
import { DonationService } from '../../service/donation.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { TranslateModule } from '@ngx-translate/core';
describe('AccountComponent', () => {
    let component: AccountComponent;
    let fixture: ComponentFixture<AccountComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AccountComponent ],
            imports:[RouterTestingModule,
                     HttpClientModule,
                     TranslateModule.forRoot(),
                    ],
            providers: [ DonationService, CookieService ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
