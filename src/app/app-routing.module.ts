import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

const routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  }
  // { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
