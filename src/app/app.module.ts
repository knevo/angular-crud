import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { ItemPreviewComponent } from './cmps/item-preview/item-preview.component';
import { ItemFilterComponent } from './cmps/item-filter/item-filter.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { SecretComponent } from './pages/secret/secret.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemAppComponent,
    ItemDetailsComponent,
    ItemEditComponent,
    ItemPreviewComponent,
    ItemFilterComponent,
    AppHeaderComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
