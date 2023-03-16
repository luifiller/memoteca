import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    // Classe que fornece infos dos parâmetros e rotas dos cards por meio do snpaShot e paramMap
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      // snapShot -> captura instantânea da rota no momento em que foi acessado
      // paramMap -> propriedade que disponibiliza um mapa de parâmetros obrigatórios e opcionais do pensamento
      const id = this.route.snapshot.paramMap.get('id');
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento;
      } )
    }

    excluirPensamento() {
      if (this.pensamento.id) {
        this.service.excluir(this.pensamento.id).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
        })
      }
    }

    cancelar() {
      this.router.navigate(['/listarPensamento'])
    }

}
