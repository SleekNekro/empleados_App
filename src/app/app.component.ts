import { Component } from '@angular/core';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  template: '<app-empleado-form></app-empleado-form>',
  imports: [CommonModule, EmpleadoFormComponent]
})
export class AppComponent { }
