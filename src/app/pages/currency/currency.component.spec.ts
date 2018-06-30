import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { QRCodeModule } from 'angularx-qrcode';
import { CurrencyComponent } from './currency.component';
import { DonationService } from '../../service/donation.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { TranslateModule } from '@ngx-translate/core';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ CurrencyComponent ],
        imports: [ RouterTestingModule,
                   QRCodeModule,
                   HttpClientModule,
                   TranslateModule.forRoot()
                 ],
        providers: [ DonationService, CookieService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
