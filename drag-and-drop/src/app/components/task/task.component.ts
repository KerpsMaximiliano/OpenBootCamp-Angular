import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  // elements = [
  //   'Episode I',
  //   'Episode II',
  //   'Episode III',
  //   'Episode IV',
  //   'Episode V',
  //   'Episode VI',
  //   'Episode VII',
  //   'Episode VIII',
  //   'Episode IX',
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
  // }

  task = '';
  todo: string[] = ['action I', 'action II', 'action III'];
  progress: string[] = [];
  done: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTask() {
    if (this.task === '') return;
    this.todo.push(this.task);
    this.task = '';
  }
}
