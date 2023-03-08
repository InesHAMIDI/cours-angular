import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './components/personne/personne.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonneReactiveComponent } from './components/personne-reactive/personne-reactive.component';
import { PersonneDetailsComponent } from './components/personne-details/personne-details.component';
import { PersonneReactiveDetailsComponent } from './components/personne-reactive-details/personne-reactive-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    ObservableComponent,
    PersonneReactiveComponent,
    PersonneDetailsComponent,
    PersonneReactiveDetailsComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, // = CommonModule + Module qui permet d'exécuter l'appliccation dans le navigateur
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("app.module");

  }
}
