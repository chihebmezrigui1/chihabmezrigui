import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortoflioComponent } from './portoflio/portoflio.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'por?tfoliofor?chiheb',component:HomeComponent},
  {path:'about?chihebmezrigui',component:AboutComponent},
  {path:'Work?chihebmezrigui?projects',component:PortoflioComponent},
  {path:'contact?contactmezrigui',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
