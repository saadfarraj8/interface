import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { FluxcmpComponent } from 'app/pages/flux/fluxcmp.component';
import { AuthenticationGuard } from 'app/authentication.guard';
import { RoleGuardGuard } from 'app/role-guard.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[AuthenticationGuard]},
    { path: 'user',           component: UserComponent ,canActivate:[AuthenticationGuard]},
    { path: 'table',          component: TableComponent ,canActivate:[AuthenticationGuard,RoleGuardGuard],data:{role:'ROLE_ADMIN'}},
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent,canActivate:[AuthenticationGuard] },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'flux',        component: FluxcmpComponent ,canActivate:[AuthenticationGuard] },
    {path: '', redirectTo:'/login', pathMatch:'full'}, 



];
