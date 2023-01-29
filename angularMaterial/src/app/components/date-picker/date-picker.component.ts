import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  formReserve: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.formReserve = this.formBuilder.group({
      start: new FormControl(new Date(year, month, 1)),
      end: new FormControl(new Date(year, month, 7)),
    });
  }

  ngOnInit(): void {}
}
