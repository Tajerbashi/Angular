import { Routes } from '@angular/router';
import { UsersComponent } from './pages/app/security/users/users.component';
import { SettingComponent } from './pages/app/setting/setting.component';
import { DashboardComponent } from './pages/app/dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './pages/app/dashboard/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingComponent },
  { path: '**', redirectTo: '/dashboard' }, // fallback
];
