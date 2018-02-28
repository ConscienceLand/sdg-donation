import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing'
import { DonationService } from '../../service/donation.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../service/alert.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TranslateModule } from '@ngx-translate/core';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RegisterComponent ],
            imports:[ RouterTestingModule,
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
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
