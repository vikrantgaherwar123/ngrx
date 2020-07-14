import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainComponent } from './blockchain/blockchain.component';


const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full', //default
  //   redirectTo: 'main'
  // },
  // {
  //   path: 'main',
  //   component: BlockchainComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
