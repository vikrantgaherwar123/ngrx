import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { addCoinReducer } from './reducers/blockchain.reducer';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // MatSliderModule,
    StoreModule.forRoot({blockchain: addCoinReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
