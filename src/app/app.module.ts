import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { ItemPreviewComponent } from './cmps/item-preview/item-preview.component';
import { ItemFilterComponent } from './cmps/item-filter/item-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemAppComponent,
    ItemDetailsComponent,
    ItemEditComponent,
    ItemPreviewComponent,
    ItemFilterComponent
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
