
// Mapeamento das rotas do projeto:

import { RouterModule, Routes } from "@angular/router"; // o tab importou o Routes
import { CadastroProdutosComponent } from "./components/pages/cadastro-produtos/cadastro-produtos.component";
import { ConsultaProdutosComponent } from "./components/pages/consulta-produtos/consulta-produtos.component";
import { EdicaoProdutosComponent } from "./components/pages/edicao-produtos/edicao-produtos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path : 'pages/cadastro-produtos', component: CadastroProdutosComponent  },
  { path : 'pages/consulta-produtos', component: ConsultaProdutosComponent },
  { path : 'pages/edicao-produtos', component: EdicaoProdutosComponent },
  { path : '', pathMatch: 'full', redirectTo: '/pages/consulta-produtos' }, // Endereço da página inicial do projeto. Ele vai direto para consulta-produtos.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModules {}
