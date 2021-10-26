import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-cosa',
  templateUrl: './nueva-cosa.component.html',
  styleUrls: ['./nueva-cosa.component.css']
})
export class NuevaCosaComponent implements OnInit {
  createEvento: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.createEvento = this.fb.group({
      fecha: ['', Validators.required],
      nombre: ['', Validators.required],
      sede: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarEvento() {
    this.submitted = true;

    if(this.createEvento.invalid) {
      return;
    }

    const evento: any = {
      fecha: this.createEvento.value.fecha,
      nombre: this.createEvento.value.nombre,
      sede: this.createEvento.value.sede
    }
  }
}
