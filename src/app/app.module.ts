import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { WordspellingComponent } from './wordspelling/wordspelling.component';
import { FillinggapsComponent } from './fillinggaps/fillinggaps.component';

@NgModule({
  declarations: [
    AppComponent,
    WordspellingComponent,
    FillinggapsComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
