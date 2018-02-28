import { TestBed, inject } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { SimpleNotificationsModule } from 'angular2-notifications';

describe('AlertService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AlertService],
            imports: [SimpleNotificationsModule.forRoot()]
        });
    });

    it('should be created', inject([AlertService], (service: AlertService) => {
        expect(service).toBeTruthy();
    }));
});
