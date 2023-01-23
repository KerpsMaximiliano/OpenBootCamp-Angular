import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detailt-page',
  templateUrl: './contact-detailt-page.component.html',
  styleUrls: ['./contact-detailt-page.component.css']
})

export class ContactDetailtPageComponent implements OnInit {

  id: any | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.id = params.id;
        }
      }
    );

  }
}
