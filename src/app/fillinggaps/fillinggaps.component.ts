import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-fillinggaps',
  templateUrl: './fillinggaps.component.html',
  styleUrls: ['./fillinggaps.component.css']
})
export class FillinggapsComponent implements OnInit {
  text = 'In other words, m represents the number of remaining cards to shuffle. Compact the remaining deck as you move cards so that you can easily pick out the next card for shuffling.';
  words = ['shuffle', 'deck', 'pick out', 'card'];
  gaps = [];
  textWithGaps = '';
  shuffledWords = ['card', 'shuffle', 'deck', 'pick out'];
  message = "";
  
  constructor() { }

  ngOnInit() {
	  this.textWithGaps = this.text.replace(new RegExp(this.words.join('|') + '\\b', 'g'), '...........');
  }

  
}
