import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from './models/register-user';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    signIn() {
        return this
            .httpClient
            .post('http://localhost:5000/connect/token',
                'client_id=ro.client&client_secret=secret&grant_type=password&username=test1@test.com&password=Abcd@1234&scope=fleetMgmt',
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
}
