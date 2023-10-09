import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SenhaButtonComponent } from './senha-button/senha-button.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [HeaderComponent, SenhaButtonComponent],
  exports: [HeaderComponent, SenhaButtonComponent],
})
export class ComponentModule {}
