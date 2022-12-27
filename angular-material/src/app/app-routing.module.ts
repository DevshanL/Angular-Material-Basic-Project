import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path:'blog',component: BlogPageComponent},
  {path:'single', component:SingleBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
