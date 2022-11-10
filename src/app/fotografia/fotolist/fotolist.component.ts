import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.models';

@Component({
  selector: 'phw-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {
  fotos: Foto[] = []

  //Injeção de dependendência é quando solicitamos uma ferramenta.
  //Toda injeção de dpedencia deve ser feita no parentêses {} do construtor.
  //Toda ferramenta.
  constructor( private http: HttpClient ) { }
  //O ngOnit inicia assim que começamos a aplicação.
  ngOnInit(): void {
    this.pegarFotos();
  }

  pegarFotos() {
    this.http.get<Foto[]>("http://localhost:3000/imagem").subscribe(resultado => this.fotos = resultado)//esse subscribe ele é responsável por
    //pegar as fotos. Porque o get só fica lendo o conteúdo de /imagens. e para baixarmos esses contéudo chamamos o .subscribe()
    //no subscribe passamos uma arrow function para pegar as fotos e armazena-las dentro do nosso array fotos.
    //Agora precisamos dizer para o método .get<> qual é o tipo de dados iremos receber para que ele possa armazenar.
  }
}
