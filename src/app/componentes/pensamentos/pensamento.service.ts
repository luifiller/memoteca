import { Pensamento } from './pensamento/pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(pagina: number, filtro: string): Observable<Pensamento[]> {
    const itensPorPagina = 6;
    // Os comentários abaixo são referências da Paginação da API -> https://github.com/typicode/json-server#paginate
    // GET /posts?_page=7
    // GET /posts?_page=7&_limit=20
    // Não é considerada uma boa prática a interpolação de variáveis na URL como a da linha abaixo; para isso, utiliza-se uma classe do Angular: 'HttpParams'
    // return this.http.get<Pensamento[]>(this.API + `?_page=${pagina}&_limit=${itensPorPagina}`);
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    return this.http.get<Pensamento[]>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;

    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;

    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;

    return this.http.get<Pensamento>(url);
  }
}
