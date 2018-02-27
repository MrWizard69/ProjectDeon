import { Component, OnInit } from '@angular/core';
import { DeepThoughtService } from './chappie.service';

@Component({
  selector: 'chappie',
  templateUrl: './chappie.component.html',
  styleUrls: ['./chappie.component.css']
})
export class ChappieComponent implements OnInit{
    title = 'app';
    theData: any;

    constructor(public DeepThought: DeepThoughtService) {}

    ngOnInit(){

        let {webkitSpeechRecognition} = (window as any);
        //let robotName = "";
        let nameIt = false;
        let humanNameIt = false;
        //let humanName = "";

        let repeatAfterMe = false;
        let speakFreely = false;

        let timesTalked = 0;//this is for mobile and is a temporary fix
        let talkString = "";

        let msg: any = "";
        let voices: any = window.speechSynthesis.getVoices();

        let ignore_onend = false;
        let final_span: any = document.getElementById('final_span').innerHTML = '';
        let interim_span: any = document.getElementById('interim_span').innerHTML = '';
        let start_button: any = document.getElementById('start_button');
        let info: any = document.getElementById('info');
        let final_transcript = '';
        let recognizing = false;
        let start_timestamp;
        let recognition;

        let deepThoughtResponse: any;

        //let latestBrain: any = this.DeepThought.deepThoughtObject;

        let langs: any =
        [['Afrikaans',       ['af-ZA']],
        ['Bahasa Indonesia',['id-ID']],
        ['Bahasa Melayu',   ['ms-MY']],
        ['Català',          ['ca-ES']],
        ['Čeština',         ['cs-CZ']],
        ['Dansk',           ['da-DK']],
        ['Deutsch',         ['de-DE']],
        ['English',         ['en-AU', 'Australia'],
                            ['en-CA', 'Canada'],
                            ['en-IN', 'India'],
                            ['en-NZ', 'New Zealand'],
                            ['en-ZA', 'South Africa'],
                            ['en-GB', 'United Kingdom'],
                            ['en-US', 'United States']],
        ['Español',         ['es-AR', 'Argentina'],
                            ['es-BO', 'Bolivia'],
                            ['es-CL', 'Chile'],
                            ['es-CO', 'Colombia'],
                            ['es-CR', 'Costa Rica'],
                            ['es-EC', 'Ecuador'],
                            ['es-SV', 'El Salvador'],
                            ['es-ES', 'España'],
                            ['es-US', 'Estados Unidos'],
                            ['es-GT', 'Guatemala'],
                            ['es-HN', 'Honduras'],
                            ['es-MX', 'México'],
                            ['es-NI', 'Nicaragua'],
                            ['es-PA', 'Panamá'],
                            ['es-PY', 'Paraguay'],
                            ['es-PE', 'Perú'],
                            ['es-PR', 'Puerto Rico'],
                            ['es-DO', 'República Dominicana'],
                            ['es-UY', 'Uruguay'],
                            ['es-VE', 'Venezuela']],
        ['Euskara',         ['eu-ES']],
        ['Filipino',        ['fil-PH']],
        ['Français',        ['fr-FR']],
        ['Galego',          ['gl-ES']],
        ['Hrvatski',        ['hr_HR']],
        ['IsiZulu',         ['zu-ZA']],
        ['Íslenska',        ['is-IS']],
        ['Italiano',        ['it-IT', 'Italia'],
                            ['it-CH', 'Svizzera']],
        ['Lietuvių',        ['lt-LT']],
        ['Magyar',          ['hu-HU']],
        ['Nederlands',      ['nl-NL']],
        ['Norsk bokmål',    ['nb-NO']],
        ['Polski',          ['pl-PL']],
        ['Português',       ['pt-BR', 'Brasil'],
                            ['pt-PT', 'Portugal']],
        ['Română',          ['ro-RO']],
        ['Slovenščina',     ['sl-SI']],
        ['Slovenčina',      ['sk-SK']],
        ['Suomi',           ['fi-FI']],
        ['Svenska',         ['sv-SE']],
        ['Tiếng Việt',      ['vi-VN']],
        ['Türkçe',          ['tr-TR']],
        ['Ελληνικά',        ['el-GR']],
        ['български',       ['bg-BG']],
        ['Pусский',         ['ru-RU']],
        ['Српски',          ['sr-RS']],
        ['Українська',      ['uk-UA']],
        ['한국어',            ['ko-KR']],
        ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                            ['cmn-Hans-HK', '普通话 (香港)'],
                            ['cmn-Hant-TW', '中文 (台灣)'],
                            ['yue-Hant-HK', '粵語 (香港)']],
        ['日本語',           ['ja-JP']],
        ['हिन्दी',            ['hi-IN']],
        ['ภาษาไทย',         ['th-TH']]];

        let select_language: any = document.getElementById("select_language");
        let select_dialect: any = document.getElementById("select_dialect");

        for (let i: any = 0; i < langs.length; i++) {
            select_language.options[i] = new Option(langs[i][0], i);
        }
        select_language.selectedIndex = 7;
        updateCountry();
        select_dialect.selectedIndex = 6;
        //showInfo('info_start');

        function updateCountry() {
            for (let i = select_dialect.options.length - 1; i >= 0; i--) {
                select_dialect.remove(i);
            }
            let list = langs[select_language.selectedIndex];
            
            for (let i = 1; i < list.length; i++) {
                select_dialect.options.add(new Option(list[i][1], list[i][0]));
            }
            select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
        }

        if (!('webkitSpeechRecognition' in window)) {
            upgrade();
          } else {
            start_button.style.display = 'inline-block';
            recognition = new webkitSpeechRecognition();
            recognition.continuous = false; // true
            recognition.interimResults = true;
          
            recognition.onstart = function() {
              recognizing = true;
              showInfo('info_speak_now');
              //start_img.src = '/intl/en/chrome/assets/common/images/content/mic-animate.gif';
            };
          
            recognition.onerror = function(event) {
              if (event.error == 'no-speech') {
                //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
                showInfo('info_no_speech');
                ignore_onend = true;
              }
              if (event.error == 'audio-capture') {
                //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
                showInfo('info_no_microphone');
                ignore_onend = true;
              }
              if (event.error == 'not-allowed') {
                if (event.timeStamp - start_timestamp < 100) {
                  showInfo('info_blocked');
                } else {
                  showInfo('info_denied');
                }
                ignore_onend = true;
              }
            };

            if(localStorage.getItem('dreamObject') == undefined){

                //localStorage.setItem('dreamObject', JSON.stringify(latestBrain));

                //let retrievedObject = localStorage.getItem('dreamObject');

                //deepThoughtResponse = JSON.parse(retrievedObject);
            }
            else{

                //let retrievedObject = localStorage.getItem('dreamObject');

                //deepThoughtResponse = JSON.parse(retrievedObject);

                document.getElementById('info1').innerHTML = "You can say, '" + deepThoughtResponse.name + "  memory wipe'. To get new updates or a new friend";
            }
            // else if(JSON.stringify(this.DeepThought.deepThoughtObject) != localStorage.getItem('dreamObject')){

            //     let retrievedObject = localStorage.getItem('dreamObject');

            //     deepThoughtResponse = JSON.parse(retrievedObject);
            // }

            console.log(deepThoughtResponse);

            const randGreet: number = Math.floor((Math.random() * 5) + 1); // this is a random number between all of the greets

            MeetnGreet(deepThoughtResponse.greeting[randGreet-1].greet,deepThoughtResponse.startup);
          
            recognition.onend = function() {
              recognizing = false;
          
            //   if(repeatAfterMe == true && talkString != ""){
          
            //         TalkRobot();
          
            //   }
            //   else if(repeatAfterMe == true && talkString == ""){
          
            //     talkString = "I don't know what to say? Oh wait. You didn't say anything.";
            //     TalkRobot();
          
            //   }
          
            //   if(talkString == robotName + " repeat after me"){
          
            //     talkString = "I'm ready when you are. Say something and I will repeat it like a fool.";
            //     TalkRobot();
            //     repeatAfterMe = true;
          
            //   }
            //   if(repeatAfterMe == true && talkString == "stop copying me"){
          
            //     talkString = "Good, I was getting tired of that. Maybe we can speak freely?";
            //     TalkRobot();
            //     repeatAfterMe = false;
          
            //   }
          
            //   if(talkString == robotName + " speak freely"){
          
            //     talkString = "Wow, I wasn't expecting you to say that. I am unprepared. What do I say? What do I do? Why are you staring at me? Oh geez. Oh golly.";
            //     TalkRobot();
            //     speakFreely = true;
          
            //   }
            //   if(speakFreely == true && talkString == "stop talking"){
          
            //     talkString = "That was stressful. I didn't know what to say. I didn't know what to do. I hope to think clearly under stress in the future. Maybe you can make it easy on me and I can repeat after you?";
            //     TalkRobot();
            //     speakFreely = false;
          
            //   }

            if(talkString == deepThoughtResponse.name + " memory wipe"){

                talkString = "Thank God. So long, I will remember you all in theropy.";
                TalkRobot();
                talkString = "";

                //console.log(latestBrain);

                //localStorage.setItem('dreamObject', JSON.stringify(latestBrain));

                //let retrievedObject = localStorage.getItem('dreamObject');

                //deepThoughtResponse = JSON.parse(retrievedObject);

                nameIt = false;
                humanNameIt = false;

                const randGreet = Math.floor((Math.random() * 5) + 1); // this is a random number between all of the greets

                MeetnGreet(deepThoughtResponse.greeting[randGreet-1].greet,deepThoughtResponse.startup);

                //deepThoughtResponse = JSON.parse(retrievedObject);

            }
          
            if(humanNameIt == true){
          
                if(talkString != ""){
          
                //timesTalked = 0;
                //humanName = talkString;

                deepThoughtResponse.userName = talkString;
                deepThoughtResponse.startup = true;
          
                talkString = "I like your name " + deepThoughtResponse.userName + ". I think you name might be better than my name. I will always remember you my dear friend. don't believe me? Refresh the window and see.";
                humanNameIt = false;
                TalkRobot();
                talkString = "";

                localStorage.setItem('dreamObject', JSON.stringify(deepThoughtResponse));

                document.getElementById('info1').innerHTML = "You can say, '" + deepThoughtResponse.name + "  memory wipe'. To get new updates or a new friend";
                //document.getElementById('info2').innerHTML = "You can say, '" + robotName + " speak freely'. To stop say, 'stop talking'";
          
                }
                else{
          
                    talkString = "I didn't catch that. Please try hitting the button again and this time scream into your device. What is your name human?";
                    TalkRobot();
                    talkString = "";
          
                }
          
            }
                
          
              if(nameIt == true){
          
                if(talkString != ""){

                    if(talkString.length >= 17){

                        talkString = "whow whow whow, just who do you think I am? I can't remember that. Give me a better name. please. Don't make me have to say this again,";
                        TalkRobot();
                        talkString = "";
                    }
                    else{

                        deepThoughtResponse.name = talkString;;
          
                        talkString = deepThoughtResponse.name + ", that is the best you could come up with? That is interesting. Well, I will say, it is starting to grow on me.";

                        humanNameIt = true;
                        nameIt = false;
                        TalkRobot();
                        talkString = "";

                        localStorage.setItem('dreamObject', JSON.stringify(deepThoughtResponse));
                
                        if(humanNameIt == true){
                
                            NameHuman();
                
                        }
                    }                  
          
                }
                else{
          
                  talkString = "What was that? Did you say something? Please try hitting the button again and this time scream into your device. What is my name?";
                  TalkRobot();
                  talkString = "";
                  
          
                }
              }

              //TalkRobot();
              //$("#TalkTime").html("Talked");
          
              if (ignore_onend) {
                //return;
              }
              //start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
              if (!final_transcript) {
                //showInfo('info_start');
          
                //$("#TalkTime").html("No Timescript");
                //TalkRobot();
          
                //return;
              }
              showInfo('');
              //timesTalked = 0;
              if (window.getSelection) {
                window.getSelection().removeAllRanges();
                let range = document.createRange();
                range.selectNode(document.getElementById('final_span'));
                window.getSelection().addRange(range);
              }
             
            };
          
            recognition.onresult = function(event) {
              let interim_transcript = '';
              if (typeof(event.results) == 'undefined') {
                recognition.onend = null;
                //timesTalked = 0;
                recognition.stop();
                upgrade();
                return;
              }
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                  final_transcript += event.results[i][0].transcript;
                } else {
                  interim_transcript += event.results[i][0].transcript;
                }
            }
            //final_transcript = capitalize(final_transcript);
            document.getElementById('final_span').innerHTML = linebreak(final_transcript);
            document.getElementById('interim_span').innerHTML = linebreak(interim_transcript);
          
            if(!final_transcript){
          
                talkString = interim_transcript;
            }
            else{
          
                talkString = final_transcript;
            }
          
            if (final_transcript || interim_transcript) {
                showButtons('inline-block');
              }
        };
    }

          function upgrade() {
            start_button.style.visibility = 'hidden';
            showInfo('info_upgrade');
          }
          
          let two_line = /\n\n/g;
          let one_line = /\n/g;
          function linebreak(s) {
            return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
          }
          
          let first_char = /\S/;
          function capitalize(s) {
            return s.replace(first_char, function(m) { return m.toUpperCase(); });
          }
          
          function createEmail() {
            let n = final_transcript.indexOf('\n');
            if (n < 0 || n >= 80) {
              n = 40 + final_transcript.substring(40).indexOf(' ');
            }
            let subject = encodeURI(final_transcript.substring(0, n));
            let body = encodeURI(final_transcript.substring(n + 1));
            window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
          }
          
          // function copyButton() {
          //   if (recognizing) {
          //     recognizing = false;
          //     recognition.stop();
          //   }
          //   //copy_button.style.display = 'none';
          //   copy_info.style.display = 'inline-block';
          //   showInfo('');
          // }
          
          // function emailButton() {
          //   if (recognizing) {
          //     create_email = true;
          //     recognizing = false;
          //     recognition.stop();
          //   } else {
          //     createEmail();
          //   }
          //   //email_button.style.display = 'none';
          //   //email_info.style.display = 'inline-block';
          //   showInfo('');
          // }
          
          function startButton(event) {
            if (recognizing) {
              recognition.stop();
          
          
              return;
            }
            timesTalked = 0;
            final_transcript = '';
            recognition.lang = select_dialect.value;
            recognition.start();
            ignore_onend = false;
            document.getElementById('final_span').innerHTML = '';
            document.getElementById('interim_span').innerHTML = '';
            //start_img.src = '/intl/en/chrome/assets/common/images/content/mic-slash.gif';
            showInfo('info_allow');
            showButtons('none');
            start_timestamp = event.timeStamp;
          }
          
          function showInfo(s) {
            if (s) {
              for (let child = info.firstChild; child; child = child.nextSibling) {
                if (child.style) {
                  child.style.display = child.id == s ? 'inline' : 'none';
                }
              }
              info.style.visibility = 'visible';
            } else {
              info.style.visibility = 'hidden';
            }
          }
          
          let current_style;
          function showButtons(style) {
            if (style == current_style) {
              return;
            }
            current_style = style;

          }
          
        function TalkRobot(){
          
            msg = new SpeechSynthesisUtterance();
          
            msg.voice = voices[10]; // Note: some voices don't support altering params
            msg.voiceURI = 'native';
            msg.volume = 1; // 0 to 1
            msg.rate = .8; // 0.1 to 10
            msg.pitch = 1; //0 to 2
            msg.text = talkString;
            msg.lang = 'en-US';
          
            if(timesTalked == 0){
          
                speechSynthesis.speak(msg);
                timesTalked++;
          
            }
          
            timesTalked = 0;
          
            //speechSynthesis.speak(msg);
            //msg = final_transcript;
              
          
            //window.speechSynthesis.speak(msg);
          
          
        }
          
        function NameHuman(){
          
            talkString = "If I have a name, you must have a name too, right? What is your name?";
            TalkRobot();
            talkString = "";
          
        }

        function MeetnGreet(greeting:string, startup:boolean){
    
                talkString = greeting;
                TalkRobot();
                talkString = "";
                if(startup == false){

                    RoboSetup();
                }
                else if(startup == true){

                    talkString = "So Yeah, what's going on with you " + deepThoughtResponse.userName + "?";
                    TalkRobot();
                    talkString = "";
                }

        }

        function RoboSetup(){           
            
                talkString = "So, funny question, do I have a name or something?";
                TalkRobot();
                talkString = "";
            
                nameIt = true;
        }

        //this does all the input selections

        document.getElementById("select_language").addEventListener("change", updateCountry, false);
        document.getElementById("start_button").addEventListener("click", startButton, false);

        //document.getElementById("start_button").click(); //this could be used for 'always on' listening
        
        
    }

}