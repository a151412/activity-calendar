import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {
  onSubmit(form: any): void {
    console.log('Formulário enviado!', form.value);
  }
}

