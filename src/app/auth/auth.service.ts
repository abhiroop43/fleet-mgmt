import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from './models/register-user';
import { AccessToken } from './models/access-token';
import { LoginUser } from './models/login-user';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    signIn(user: LoginUser) {
        return this
            .httpClient
            .post('http://localhost:5000/connect/token',
                `client_id=ro.client&client_secret=secret&grant_type=password&username=${user.email}&password=${user.password}&scope=fleetMgmt`,
                {
                    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
                }
            );
    }

    signUp(newUser: RegisterUser) {
        return this.httpClient.post('http://localhost:5000/account/registeruser', newUser, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }

    isAuthenticated() {
        let token: AccessToken = new AccessToken();
        if (sessionStorage.getItem('access_token') != undefined || sessionStorage.getItem('access_token') != null) {
            token.access_token = sessionStorage.getItem('access_token');
            token.expires_in = parseInt(sessionStorage.getItem('expires_in'));
            token.expiry_date = new Date(sessionStorage.getItem('expiry_date'));
            token.token_type = sessionStorage.getItem('token_type');

            if (!(token.expiry_date < new Date())) {
                return true;
            }
        }

        return false;
    }
}
