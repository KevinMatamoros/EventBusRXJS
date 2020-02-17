import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSongComponent } from './components/create-song/create-song.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: 'home', component: CreateSongComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
