import { Component } from '@angular/core';

interface FreezingPeriod {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  environment: string;
}

@Component({
  selector: 'app-freezing-management',
  templateUrl: './freezing-management.component.html',
  styleUrls: ['./freezing-management.component.css']
})
export class FreezingManagementComponent {
  freezingPeriods: FreezingPeriod[] = [];

  onSubmit(form: any): void {
    const newFreezingPeriod: FreezingPeriod = {
      startDate: form.value.startDate,
      startTime: form.value.startTime,
      endDate: form.value.endDate,
      endTime: form.value.endTime,
      environment: form.value.environment
    };

    this.freezingPeriods.push(newFreezingPeriod);
    form.resetForm();
  }
}
