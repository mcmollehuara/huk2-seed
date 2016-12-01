import { ModuleWithProviders }  from '@angular/core';
import {Routes,  RouterModule } from '@angular/router';
import { ShiftComponent } from './shift.component';
import {LayoutComponent} from '../layout/layout.component';

const routes: Routes = [{
    path:'app',
    component: LayoutComponent,
    children:[
      { path: 'dashboard', component: ShiftComponent}
    ]
  }];


export const appRoutingProviders: any[] = [];

  export const ShiftRoutes : ModuleWithProviders=RouterModule.forChild(routes);
