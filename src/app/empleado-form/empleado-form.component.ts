import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent {
  nombre: string = '';
  apellido: string = '';
  edad: number | null = null;
  direccion: string = '';
  empresa: string = '';
  nacionalidad: string = '';
  estado: 'registrado' | 'no-registrado' = 'no-registrado';

  enviarFormulario() {
    console.log('Formulario enviado', {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      direccion: this.direccion,
      empresa: this.empresa,
      nacionalidad: this.nacionalidad,
      estado: this.estado,
    });
  }
}
