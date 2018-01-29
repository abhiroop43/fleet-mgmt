import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    signIn() {
        return this
            .httpClient
            .post('http://localhost:5000/connect/token',
            'client_id=ro.client&client_secret=secret&grant_type=password&username=test@test.com&password=Abcd@1234&scope=fleetMgmt',
            {
                headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
            }
            );
    }
}
