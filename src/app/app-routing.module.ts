import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
// import { AboutComponent } from './pages/about/about.component';
import { ItemAppComponent } from './pages/item-app/item-app.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { SecretComponent } from './pages/secret/secret.component';
import { ItemResolverService } from './services/item-resolver.service';

const routes: Routes = [
  { path: 'item/edit/:id', resolve: { item: ItemResolverService }, runGuardsAndResolvers: 'paramsChange', component: ItemEditComponent },
  { path: 'item/edit', component: ItemEditComponent },
  { path: 'item/:id', component: ItemDetailsComponent, resolve: { item: ItemResolverService }, runGuardsAndResolvers: 'paramsChange' },
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
  { path: '', component: ItemAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
