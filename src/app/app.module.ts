import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LinksButtonsModule } from '@caiocampos/links-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinksButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
