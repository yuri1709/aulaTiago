import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.models';

@Component({
  selector: 'phw-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {
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

}
