import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'notify-easy-home', pathMatch: 'full' },
  { path: 'notify-easy-home', loadChildren: './notify-easy-home/notify-easy-home.module#NotifyEasyHomePageModule' },  { path: 'add-reminder', loadChildren: './add-reminder/add-reminder.module#AddReminderPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
