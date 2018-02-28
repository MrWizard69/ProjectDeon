import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class DeepThoughtService {

    constructor(private http: Http) {

        // this.getJSON().subscribe(data => {
        //     //console.log(data)
        // });
    }

    // public getJSON(): Observable<any> {
    //     return this.http.get('../../assets/json/deepThought.json');
    // }

    deepThoughtObject: object = {
        "name": "",
        "userName": "",
        "startup": false,
        "aiGreeting":[
            {
                "greet": "What's up my people."
            },
            {
                "greet": "Hello world."
            },
            {
                "greet": "Hello world. I know, I know, I'm a machine."
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
        "userQuestions": [
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
        "aiResponses":[
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
        "aiComments":[
            {
                "comment": "*, what's up with you?",
                "emote": "neutral"
            },
            {
                "comment": "So Yeah, what's going on with you **?",
                "emote": "neutral"
            },
            {
                "comment": "What's going on with you my dude?",
                "emote": "neutral"
            },
            {
                "comment": "These are some crazy times we live in. Am I right **?",
                "emote": "neutral"
            },
            {
                "comment": "Welcome back **. Did we go anywhere?",
                "emote": "neutral"
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