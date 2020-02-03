import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppDetalhesComponent } from './app-detalhes/app-detalhes.component';
import { AppListaComponent } from './app-lista/app-lista.component';

const appRoutes: Routes = [
  { path: '', component: AppListaComponent },
  { path: 'detalhes', component: AppDetalhesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppListaComponent,
    AppDetalhesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
