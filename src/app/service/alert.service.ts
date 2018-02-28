import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AlertService {

    constructor(private notificationsService: NotificationsService) { }

    successToast(title, content) {
        let notify =  this.notificationsService.success(
            title,
            content,
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            })
        return Promise.resolve(notify);
    }


    errorToast(title, content) {
        let notify =  this.notificationsService.error(
            title,
            content,
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            })
        return Promise.resolve(notify);
    }

}
