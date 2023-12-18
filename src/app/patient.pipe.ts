import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patient'
})
export class PatientPipe implements PipeTransform {
  transform(patients: any[], searchTerm: string): any[] {
    if (!patients || !searchTerm) {
      return patients;
    }
    searchTerm = searchTerm.toLowerCase();
    return patients.filter((data: any) => {
      return data.id.toString().includes(searchTerm) || data.name.toLowerCase().includes(searchTerm);
    });
  }
}


