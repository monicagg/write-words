import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-wordspelling',
  templateUrl: './wordspelling.component.html',
  styleUrls: ['./wordspelling.component.css']
})
export class WordspellingComponent implements OnInit {
  wordLetters = [];
  letters = ['b', 'r', 'o', 'd', 'r', 'e'];
  message = "";
  words = ['bored', 'border'];
  
  constructor() { }

  ngOnInit() {
  }
  
  drop(event: CdkDragDrop<string[]>) {
	if (event.previousContainer === event.container) {
	    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
	} else {
	    transferArrayItem(event.previousContainer.data,
	                      event.container.data,
	                      event.previousIndex,
	                      event.currentIndex);
	}
	if (this.words.indexOf(this.wordLetters.join(''))>-1) {
		this.message = "Well done!";
	} else {
		this.message = "";
	}
  }
}
