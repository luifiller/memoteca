import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário Reativo'],
      autoria: ['Angulaaar'],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
