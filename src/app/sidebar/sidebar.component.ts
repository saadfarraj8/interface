import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'app/auth/user-auth.service';



export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/table',         title: 'Tasks',        icon:'nc-tile-56',    class: '' },
    { path: '/flux',          title: 'flux',              icon:'nc-vector',     class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
   constructor(private auth:UserAuthService)
   {
     if(!this.menudisplay())
     {
        delete ROUTES[2]; 
     }
   }
 
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    menudisplay()
    {
        if(this.auth.user.roles.join(',').includes('ROLE_ADMIN')==true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    logout()
    {
        this.auth.loggout();
    }
  
}
