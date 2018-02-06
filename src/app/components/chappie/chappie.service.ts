import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class DeepThoughtService {

    constructor(private http: Http) {

        this.getJSON().subscribe(data => {
            //console.log(data)
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get('../../assets/json/deepThought.json');
    }

}