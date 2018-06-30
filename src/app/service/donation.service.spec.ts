import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { DonationService } from './donation.service';
import { HttpClientModule } from '@angular/common/http';

describe('DonationService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DonationService],
            imports: [HttpClientModule]
        });
    });

    it('should be created', inject([DonationService], (service: DonationService) => {
        expect(service).toBeTruthy();
    }));

    it('login', (done) => {
        let donationservice: DonationService = getTestBed().get(DonationService);
        donationservice.login('SU677A7ESQZVT7BSZ5Y55S9CWBJF29')
            .then((result) => {
                expect(result).toEqual({ message: 'SUC_USER_EXISTS_NOT' });
                done()
            })
    });
});
