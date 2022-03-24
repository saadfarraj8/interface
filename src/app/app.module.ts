import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms"; 
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SinterceptorService } from "./interceptor/sinterceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    
    

  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,HttpClientModule,
    FixedPluginModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:SinterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
