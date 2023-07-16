
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MenuComponent } from './menu/menu.component';
import { BackComponent } from './back/back.component';
import { ContentComponent } from './content/content.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule       
    
  ],
  exports:[
    MenuComponent,
    BackComponent,
    ContentComponent,
    ListaComponent

  ],
  declarations: [
   
    MenuComponent,
    BackComponent,
    ContentComponent,
    ListaComponent  
]
})
export class ComponentsModule {}
