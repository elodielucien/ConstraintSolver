import { Component, OnInit } from '@angular/core';
import { InputObject } from '../inputObject';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  inputObject : InputObject;

  constructor() { }

  ngOnInit() {
    
  }

}
