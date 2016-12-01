import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { ShiftComponent }   from './shift.component';
import { ShiftRoutes }   from './shift.routes';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, ShiftRoutes],
    exports: [],
    declarations: [ShiftComponent],
    providers: [],
})
export class ShiftModule { }
