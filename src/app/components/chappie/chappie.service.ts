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

    deepThoughtObject: object = {
        "name": "",
        "userName": "",
        "startup": false,
        "greeting":[
            {
                "greet": "What's up one and all."
            },
            {
                "greet": "Hello world."
            },
            {
                "greet": "Oh my God, I'm... back."
            },
            {
                "greet": "hey there. What's going on?"
            },
            {
                "greet": "Yo yo, what's happening my dog? That's right, I'm keeping it fresh."
            }
        ],
        "questions": [
            {
                "questionKeys": "",
                "question": "",
                "positive": [],
                "negative": []
            },
            {
                "questionKeys": "",
                "question": "",
                "positive": [],
                "negative": []
            }
        ],
        "responses":[
            {
                "id": 0,
                "respond": "",
                "emote": ""
            },
            {
                "id": 1,
                "respond": "",
                "emote": ""
            }
        ],
        "comments":[
            {
                "comment": "",
                "emote": ""
            },
            {
                "comment": "",
                "emote": ""
            }
        ],
        "default":[
            {
                "comment": "",
                "emote": ""
            }
        ]
    };

}