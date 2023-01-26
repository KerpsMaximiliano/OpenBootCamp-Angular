import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  table = 5;
  until = 10;
  results: any[] = [];
  error = false;

  calculate() {
    if (this.table < 1 || this.until < 1) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
      return;
    }

    this.results = [];

    for (let i = 0; i < this.until; i++) {
      this.results.push({
        table: this.table,
        result: this.table * i,
      });
    }
  }
}
