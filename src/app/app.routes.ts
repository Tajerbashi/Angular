import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  //   { path: 'services', component: ServicesComponent },
  //   { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //   { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/home' }, // Wildcard route for 404
];

// export const routes: Routes = [
//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [
//       { path: '', component: HomeComponent },
//       { path: 'home', component: HomeComponent },
//       { path: 'about', component: AboutComponent },
//     ],
//   },
//   {
//     path: 'auth',
//     component: AuthLayoutComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'signup', component: SignupComponent },
//     ],
//   },
// ];
