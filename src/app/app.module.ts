import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { GenderFilter } from './gender-filter.pipe';
import { QueryFilter } from './query-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, HelloComponent, GenderFilter, QueryFilter],
  bootstrap: [AppComponent],
})
export class AppModule {}
