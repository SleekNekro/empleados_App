import { bootstrapApplication } from '@angular/platform-browser';
import { EmpleadoFormComponent } from './app/empleado-form/empleado-form.component';

bootstrapApplication(EmpleadoFormComponent)
  .catch(err => console.error(err));
