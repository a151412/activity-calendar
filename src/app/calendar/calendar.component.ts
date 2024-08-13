import { Component, OnInit } from '@angular/core';
import { ActivityService, Activity } from '../activity.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarOptions: any;

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    const activities = this.activityService.getActivities();
    const events = activities.map(activity => ({
      title: activity.description,
      start: `${activity.date}T${activity.time}`,
      end: `${activity.datet}T${activity.timet}`,
      backgroundColor: activity.color,

      // Se houver um horário de término, adicione a lógica aqui para calcular o 'end'
    }));


    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin],
      events: events,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      height: 650
    };
    console.log(this.calendarOptions);
  }
}
