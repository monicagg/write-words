import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { WordspellingComponent } from './wordspelling/wordspelling.component';

@NgModule({
  declarations: [
    AppComponent,
    WordspellingComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
