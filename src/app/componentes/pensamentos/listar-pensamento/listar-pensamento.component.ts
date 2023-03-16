import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService) {}
  // toda lógica a ser executada quando um componente for carregada é inserida no ngOnInit
  // utiliza-se "subscribe" para indicar que precisa notificar quando há mudanças no array
  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual).subscribe(listaPensamentos => {
      // Os '...' representam o spread operator para carregar os outros itens que já estavam na página junto aos novos que serão carregados
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    });
  }
}


