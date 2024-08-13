import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { AreaManagementComponent } from './area-management/area-management.component';
import { FreezingManagementComponent } from './freezing-management/freezing-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'new-activity', component: ActivityFormComponent },
  { path: 'area-management', component: AreaManagementComponent },
  { path: 'freezing-management', component: FreezingManagementComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
