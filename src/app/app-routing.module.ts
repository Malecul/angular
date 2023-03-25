import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/pages/about/about.component";
import {ContactComponent} from "./components/pages/contact/contact.component";
import {HomeComponent} from "./components/pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
