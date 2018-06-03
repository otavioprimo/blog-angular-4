import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './dashboard/login/login.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PainelComponent } from './dashboard/painel/painel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'tutorial/:title', component: TutorialComponent },
  { path: 'dashboard', component: PainelComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/login', component: LoginComponent },
  { path: '**', redirectTo: '' }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
