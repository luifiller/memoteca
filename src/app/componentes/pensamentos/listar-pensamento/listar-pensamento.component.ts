import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Eu estou amando aprender Angular! :)',
      autoria: 'Luiz Nison',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate molestiae distinctio sed quasi odit at nihil debitis ratione quas, vero iste atque facere tempora facilis quo eligendi voluptas expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae, error iusto dolor numquam sunt rerum ad aliquid cupiditate nam corrupti atque aspernatur perferendis rem molestiae fugit repudiandae pariatur. Praesentium?',
      autoria: 'Lorem Lorena',
      modelo: 'modelo3'
    }
  ];
}
