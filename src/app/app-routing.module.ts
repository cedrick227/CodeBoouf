import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'youtube', loadChildren: './youtube/youtube.module#YoutubePageModule' },
  { path: 'y1', loadChildren: './y1/y1.module#Y1PageModule' },
  { path: 'y2', loadChildren: './y2/y2.module#Y2PageModule' },
  { path: 'y3', loadChildren: './y3/y3.module#Y3PageModule' },
  { path: 'y4', loadChildren: './y4/y4.module#Y4PageModule' },
  { path: 'y5', loadChildren: './y5/y5.module#Y5PageModule' },
  { path: 'y6', loadChildren: './y6/y6.module#Y6PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
