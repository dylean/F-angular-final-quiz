import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TraineeComponent } from './trainee/trainee.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainerComponent } from './trainer/trainer.component';

@NgModule({
  declarations: [AppComponent, TraineeComponent, TrainerComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
