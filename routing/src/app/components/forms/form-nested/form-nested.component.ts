import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-nested',
  templateUrl: './form-nested.component.html',
  styleUrls: ['./form-nested.component.css']
})
export class FormNestedComponent implements OnInit {
    myFormNested: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void{
        const phone = this.formBuilder.group({
            pre: '',
            number: '',
        });

        const mobile = this.formBuilder.group({
            pre: '',
            number: '',
        });

        this.myFormNested = this.formBuilder.group({
            phone: phone,
            mobile: mobile,
        });
    }
}
