import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MitarbeiterComponent } from './mitarbeiter.component';
import { ListeComponent } from './liste/liste.component';
import { EinerComponent } from './einer/einer.component';
import { EinerGuard } from './einer/einer.guard';

const routes: Routes = [
  {
    path: '',
    component: MitarbeiterComponent,
    children: [
      {
        path: 'liste',
        component: ListeComponent,
      },
      {
        path: ':id',
        component: EinerComponent,
        canDeactivate: [EinerGuard],
        canActivate: [EinerGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitarbeiterRoutingModule {}
