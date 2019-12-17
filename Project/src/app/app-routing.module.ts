import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home-page/home/home.component";
import {CryptoCoinListComponent} from "./components/numismatics/crypto-coin-list/crypto-coin-list.component";
import {ViewCoinComponent} from "./components/numismatics/view-coin/view-coin.component";
import {ProjectInfoComponent} from "./components/project-info/project-info.component";
import {ScholarlyHtmlComponent} from "./components/project-info/scholarly-html/scholarly-html.component";
import {BlogComponent} from "./components/project-info/blog/blog.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'numismatics', component: CryptoCoinListComponent },
  { path: 'numismatics/:id', component: ViewCoinComponent },
  { path: 'project-info', component: ProjectInfoComponent },
  { path: 'project-info/scholarly-html', component: ScholarlyHtmlComponent },
  { path: 'project-info/blog', component: BlogComponent },

  // Route unrecognised routes to the home page
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }