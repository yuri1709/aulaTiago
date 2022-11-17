import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'phw-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit {

  formulario!: FormGroup 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      img: ['',[Validators.required]],
      titulo: ['',[Validators.required]]      
    })
  }
  //Metodo de cadastro
  // cadastrar(form: any) {
  //   console.log(form.value);
  // }

  cadastrar(form: any) {
    console.log(form.value)
  }

}
