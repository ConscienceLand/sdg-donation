import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DonationService {

    private SERVER='https://api.caringcurrency.com/';

    constructor(private http: HttpClient) { }

    login(code){
        return new Promise((resolve, reject)=>{
            this.http.get(this.SERVER+'user/check',{params: new HttpParams().set('donation-code', code)})
                .subscribe((_)=>resolve(_), _=>reject(Error(_.message)))
        })
    }


    register(email, language){
        return new Promise((resolve, reject)=>{
            this.http.post(this.SERVER+'user/signup',{
                email: email,
                language: language
            }).subscribe((_)=>resolve(_), _=>reject(Error(_.message)))
        })
    }

    deposits(code){
        return new Promise((resolve, reject)=>{
            this.http.get(this.SERVER+'deposits',{params: new HttpParams().set('donation-code', code)})
                .subscribe((_)=>resolve(_), _=>reject(Error(_.message)))
        });
    }

		address(code, asset){
        return new Promise((resolve, reject)=>{
            this.http.get(this.SERVER+'address/'+asset,{params: new HttpParams().set('donation-code', code)})
                .subscribe((_)=>resolve(_), _=>reject(Error(_.message)))
        });
    }
}
