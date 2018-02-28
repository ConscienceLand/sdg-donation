import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing'
import { DonationService } from '../../service/donation.service'
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../service/alert.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TranslateModule } from '@ngx-translate/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ LoginComponent ],
        imports:[RouterTestingModule,
                 HttpClientModule,
                 FormsModule,
                 SimpleNotificationsModule.forRoot(),
                 TranslateModule.forRoot()
                ],
        providers: [ DonationService, AlertService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
