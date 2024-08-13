import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  activities: Activity[] = [
    { date:         '2024-08-12',
      time:         '23:00',
      datet:        '2024-08-18',
      timet:        '23:59',
      description:  'IPL SBCC',
      area:         'Software Basico',
      color:        '#ff0000',
    },
  ];

  getActivities(): Activity[] {
    return this.activities;
  }
}
export interface Activity {
  date: string;
  time: string;
  datet: string;
  timet: string;
  description: string;
  area: string;
  color: string;
}
