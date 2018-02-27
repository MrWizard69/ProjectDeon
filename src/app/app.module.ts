import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChappieComponent } from './components/chappie/chappie.component';
import { DeepThoughtService } from './components/chappie/chappie.service';

//import{ DeepThoughtDump } from './components/chappie/deepThought'

@NgModule({
  declarations: [
    AppComponent,
    ChappieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DeepThoughtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
