import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styles: [`
	.ng-invalid.ng-touched:not(form) {
		border: 1px solid red;
	}
	`
	]
})
export class TemplateComponent implements OnInit {
	usuario: Object = {
		nombre: null,
		apellido: null,
		correo: null,
		pais: '',
		sexo: 'hombre',
		acepta: false
	}

	paises = [{
		codigo: 'CRI',
		nombre: 'Costa Rica'
	},
	{
		codigo: 'MX',
		nombre: 'México'
	},
	{
		codigo: 'ESP',
		nombre: 'España'
	}];

	sexos: string[] = ['hombre', 'mujer'];

	constructor() { }

	ngOnInit() {
	}

	guardar(forma: NgForm) {
		console.log(forma);
		console.log(this.usuario);
	}

}
