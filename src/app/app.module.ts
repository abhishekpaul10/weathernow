import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationserverService } from './services/locationserver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LocationserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
