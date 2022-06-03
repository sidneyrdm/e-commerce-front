import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './product-list-component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Array<Book> = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.livrosMock();

  }

  livrosMock(){
    this.livros.push({id: '0', name:'Harry Potter', price: 19, quantity: 5, category: 'Ficção', img:'livro1'});
    this.livros.push({id: '1', name:'O segredo nas Sombras', price: 15, quantity: 1, category: 'Ficção', img:'livro2'});
    this.livros.push({id: '2', name:'A teoria de tudo', price: 29, quantity: 2, category: 'Científico', img:'livro3'});
    this.livros.push({id: '3', name:'Quarta capa', price: 29, quantity: 2, category: 'Livros', img:'livro4'});
    this.livros.push({id: '4', name:'O labirinto do Fauno', price: 29, quantity: 2, category: 'Ficção', img:'livro5'});
    this.livros.push({id: '5', name:'Mi portada de libro', price: 29, quantity: 2, category: 'geral', img:'livro6'});
  }

}
