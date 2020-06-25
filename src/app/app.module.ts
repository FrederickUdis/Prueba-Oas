import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import{AngularFireDatabaseModule} from 'angularfire2/database'
import{AngularFireModule} from 'angularfire2'
import{ environment } from '../environments/environment';

//componentes
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquiposListComponent } from './components/equipos/equipos-list/equipos-list.component';
import { EquipoComponent } from './components/equipos/equipo/equipo.component'

//servicios
import{EquipoService} from './service/equipo.service'

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    EquiposListComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
