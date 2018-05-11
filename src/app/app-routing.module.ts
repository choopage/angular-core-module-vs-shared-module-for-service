import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent, children:
      [
        {path: '', redirectTo: 'feature1', pathMatch: 'full'},
        {path: 'feature1', loadChildren: 'app/feature1/feature1.module#Feature1Module'},
        {path: 'feature2', loadChildren: 'app/feature2/feature2.module#Feature2Module'},
        {path: 'feature3', loadChildren: 'app/feature3/feature3.module#Feature3Module'},
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
