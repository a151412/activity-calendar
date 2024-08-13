// src/app/freezing.service.ts
import { Injectable } from '@angular/core';

export interface FreezingPeriod {
  startDate: string;
  endDate: string;
  environment: 'Banco' | 'Cartões';
}

@Injectable({
  providedIn: 'root',
})
export class FreezingService {
  freezingPeriods: FreezingPeriod[] = [
    // { startDate: '2024-08-10', endDate: '2024-08-12', environment: 'Banco' },
    // { startDate: '2024-08-15', endDate: '2024-08-18', environment: 'Cartões' },
    // { startDate: '2024-08-20', endDate: '2024-08-22', environment: 'Banco' },
    // Adicione mais períodos aqui
  ];

  getFreezingPeriods(): FreezingPeriod[] {
    return this.freezingPeriods;
  }
}
