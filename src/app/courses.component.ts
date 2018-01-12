import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <button [style.backgroundColor]="isActive ? 'blue' : 'white' ">Save</button>
  `
})
export class CoursesComponent {
  isActive = true;
}
