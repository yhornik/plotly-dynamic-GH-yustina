import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  radioValue = 'A';
  constructor() { }
  
  ngOnInit(): void {
    console.log('================= radioValue', this.radioValue)
  } 
}
