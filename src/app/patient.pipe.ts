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
      return data.Id.toString().includes(searchTerm) || data.Name.toLowerCase().startsWith(searchTerm);
    });
  }
}
