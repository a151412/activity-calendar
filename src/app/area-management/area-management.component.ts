import { Component } from '@angular/core';

interface Area {
  name: string;
  color: string;
}

@Component({
  selector: 'app-area-management',
  templateUrl: './area-management.component.html',
  styleUrls: ['./area-management.component.css']
})
export class AreaManagementComponent {
  areas: Area[] = [];
  editingArea: Area | null = null;

  onSubmit(form: any): void {
    if (this.editingArea) {
      // Atualizar a área existente
      this.editingArea.name = form.value.areaName;
      this.editingArea.color = form.value.areaColor;
      this.editingArea = null;
    } else {
      // Adicionar nova área
      const newArea: Area = {
        name: form.value.areaName,
        color: form.value.areaColor
      };
      this.areas.push(newArea);
    }

    form.resetForm();
  }

  editArea(area: Area): void {
    this.editingArea = area;
  }

  deleteArea(area: Area): void {
    this.areas = this.areas.filter(a => a !== area);
  }
}

