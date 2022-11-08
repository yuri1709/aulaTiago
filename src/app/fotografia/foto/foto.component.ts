import { Component, Input, OnInit } from '@angular/core';
import { Foto } from './foto.models';

@Component({
  selector: 'phw-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  tituloPagina = "Need For Speed Underground 2 - Fotos"
  controle: boolean = true;
  butaoNome: string = "Ver todas as imagens"
  fotos: Foto[] = [
    {
      Path: "https://i.imgur.com/eM4yHER.png",
      Titulo: "Nissan Sentra"
    },
    {
      Path: "https://i.imgur.com/ZeSJ6Tf.png",
      Titulo: "Pontiac GTO"
    },
    {
      Path: "https://i.imgur.com/tKiE7vO.png",
      Titulo: "Subaru Impreza"
    },
    {
      Path: "https://i.imgur.com/5g7Twgr.png",
      Titulo: "Toyota Célica"
    },
    {
      Path: "https://i.imgur.com/dvwoy2u.png",
      Titulo: "Toyota Supra"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  //Método do botão
  mudar() {
      if(this.tituloPagina == "Minhas Fotos") {
        this.tituloPagina = "Minhas Imagens"
      } else {
        this.tituloPagina = "Minhas Fotos"
      }
  }

  show() {
    if(this.controle) {
      this.controle = false
      this.butaoNome = "Ver todas as imagens"
    } else {
      this.controle = true;
      this.butaoNome = "Ver imagens pares"
    }
  }
}