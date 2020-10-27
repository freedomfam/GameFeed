import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { ShowpostsComponent } from './showposts/showposts.component';
import { CreatepostsComponent } from './createposts/createposts.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { PostviewComponent } from '../app/postview/postview.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'posts/:dataID',
    component: ShowpostsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'createposts',
    component: CreatepostsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'viewdata/:dataId',
    component: PostviewComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'edit/:dataId',
    component: EditComponent,
    // canActivate: [AuthGuard],
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
