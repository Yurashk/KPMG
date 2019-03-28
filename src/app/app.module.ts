import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { ThirdRowComponent } from './main/third-row/third-row.component';
import { FirstRowComponent } from './main/first-row/first-row.component';
import { SecondRowComponent } from './main/second-row/second-row.component';
import { FooterComponent } from './main/footer/footer.component';
import { HronologyComponent } from './main/hronology/hronology.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThirdRowComponent,
    FirstRowComponent,
    SecondRowComponent,
    FooterComponent,
    HronologyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
