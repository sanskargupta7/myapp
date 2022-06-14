import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SecComponent } from './sec/sec.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { DummyComponent } from './dummy/dummy.component';
import { Dummy2Component } from './dummy2/dummy2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SecComponent,
    SearchPipePipe,
    DummyComponent,
    Dummy2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
