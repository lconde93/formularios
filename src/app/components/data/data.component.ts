import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styles: []
})
export class DataComponent implements OnInit {
	forma: FormGroup;
	usuario: Object = {
		nombreCompleto: {
			nombre: null,
			apellido: null
		},
		correo: null,
		pasatiempos: ['correr']
	}

	constructor() {
		this.forma = new FormGroup({
			'nombreCompleto': new FormGroup({
				'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
				'apellido': new FormControl('', [Validators.required, this.noHerrera]),
			}),
			'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
			'pasatiempos': new FormArray([
				new FormControl('correr', Validators.required)
			]),
			'username': new FormControl('', Validators.required),
			'password1': new FormControl('', Validators.required),
			'password2': new FormControl()
		});

		/* this.forma.setValue(this.usuario); */
		this.forma.controls['password2'].setValidators([
			Validators.required,
			this.validarContrasena
		]);

	}

	ngOnInit() { }

	guardarCambios() {
		console.log(this.forma);
		/* resetear todo el form */
		/* this.forma.reset({
			nombreCompleto: {
				nombre: null,
				apellido: null
			},
			correo: null
		}); */
	}

	agregarPasatiempo() {
		(<FormArray>this.forma.controls['pasatiempos']).push(
			new FormControl('', Validators.required)
		);
	}

	noHerrera(control: FormControl): { [s: string]: boolean } {
		if (control.value === 'herrera') {
			return {
				noherrera: true
			}
		}
		return null;
	}	

	validarContrasena = (control: FormControl): { [s: string]: boolean } => {		
		/* console.log('validarContrasena2', control.value);
		console.log('validarContrasena1', this.forma.controls['password1'].value); */
		if (control.value != this.forma.controls['password1'].value) {
			return {
				noiguales: true
			}
		}
		return null;
	}

	validarUsuario(control: FormControl): Promise<any | Observable <any> {
		let promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				if(control.value === 'strider') {
					resolve({ existe: true})
				}else{
					resolve(null)
				}
			}, 3000)
		});

		return promesa;
	}
}
