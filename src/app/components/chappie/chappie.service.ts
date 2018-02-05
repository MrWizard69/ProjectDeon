import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class DeepThoughtService {

    constructor(private http: Http) {}

    getDataObservable() {
        return this.http.get('../../assets/json/deepThought.json')
            .map(data => {
                data.json();
                console.log(data.json());
                return data.json();
        });
    }

}