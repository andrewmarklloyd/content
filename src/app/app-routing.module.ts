import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects-component/projects.component';
import { HomeComponent } from './components/home-component/home.component';

const routes: Routes = [
	{
		path: 'projects',
		component: ProjectsComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: '**',
		redirectTo: '/',
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
