import { Routes } from '@angular/router';
import { HomeComponent } from './utils/pages/home/home.component';
import { SalesComponent } from './utils/pages/sales/sales.component';
import { MembersComponent } from './utils/pages/members/members.component';
import { CatalogsComponent } from './utils/pages/catalogs/catalogs.component';
import { ShopComponent } from './utils/pages/shop/shop.component';
import { GoldPriceComponent } from './utils/pages/settings/gold-price/gold-price.component';
import { GoldQualityComponent } from './utils/pages/settings/gold-quality/gold-quality.component';

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sales", component: SalesComponent},
  {path: "members", component: MembersComponent},
  {path: "catalogs", component: CatalogsComponent},
  {path: "shop", component: ShopComponent},
  {path: "settings", children: [
    {path: "gold-price", component: GoldPriceComponent},
    {path: "gold-quality", component: GoldQualityComponent}
  ], pathMatch: 'prefix'},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];
