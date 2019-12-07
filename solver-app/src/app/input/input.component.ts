import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {InputObject} from 'src/app/inputObject'
import { SolverService } from '../solver.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() input : InputObject;
  form : FormGroup;

  constructor(private fb : FormBuilder, solverService : SolverService) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstInput : [this.input.first],
      secondInput : [this.input.second],
      thirdInput : [this.input.third]
    });
  }

  onSubmit() {
    this.input.first = this.firstInput.value;
    this.input.second = this.secondInput.value;
    this.input.third = this.thirdInput.value;

  }

  get firstInput() {
    return this.form.get('firstInput');
  }

  get secondInput() {
    return this.form.get('secondInput');
  }

  get thirdInput() {
    return this.form.get('thirdInput');
  }

}
