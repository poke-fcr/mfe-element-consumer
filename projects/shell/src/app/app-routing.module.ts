import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'input-output',
    loadChildren: ()=>
    loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfeOne',
      exposedModule: './InputOutputModule'
    }).then(v => v.InputOutputModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
