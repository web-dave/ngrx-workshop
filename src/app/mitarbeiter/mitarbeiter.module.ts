import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MitarbeiterRoutingModule } from './mitarbeiter-routing.module';
import { MitarbeiterComponent } from './mitarbeiter.component';
import { ListeComponent } from './liste/liste.component';
import { EinerComponent } from './einer/einer.component';

@NgModule({
  declarations: [MitarbeiterComponent, ListeComponent, EinerComponent],
  imports: [
    CommonModule,
    MitarbeiterRoutingModule
  ]
})
export class MitarbeiterModule { }
