import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { Observable, Subject } from 'rxjs';
import { takeUntil, map, shareReplay } from 'rxjs/operators';

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  requiresAuth?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  isHandset$!: Observable<boolean>;

  navItems: NavItem[] = [
    { label: 'Home', path: '/home', icon: 'home' },
    { label: 'About', path: '/about', icon: 'info' },
    { label: 'Services', path: '/services', icon: 'construction' },
    { label: 'Contact', path: '/contact', icon: 'contact_mail' },
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard', requiresAuth: true },
  ];

  isAuthenticated = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(
        map((result) => result.matches),
        shareReplay(1)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  isActive(path: string): boolean {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  shouldShowItem(item: NavItem): boolean {
    return !item.requiresAuth || (item.requiresAuth && this.isAuthenticated);
  }

  onLogout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }

  onLogin(): void {
    this.isAuthenticated = true;
    this.router.navigate(['/dashboard']);
  }
}
