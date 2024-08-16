import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { FormsModule } from '@angular/forms';
import { AreaManagementComponent } from './area-management/area-management.component';
import { FreezingManagementComponent } from './freezing-management/freezing-management.component';
import { HomeComponent } from './home/home.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    ActivityFormComponent,
    AreaManagementComponent,
    FreezingManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
