import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './Interface/Patient';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
 private baseUrl = "http://localhost:7070/api";
  constructor(private http:HttpClient){}
  getAllPatients(): Observable<Patient[]> {
    const getUrl = `${this.baseUrl}/getallpatients`;
    console.log("test");
    return this.http.get<Patient[]>(getUrl);
  }
  createPatient(patientsData:any):Observable<Patient[]>{
    const postUrl = `${this.baseUrl}/createpatient`;
  return this.http.post<Patient[]>(postUrl,patientsData);
  }
  DeletePatient(Id:any):Observable<Patient[]>{
    const DelUrl = `${this.baseUrl}/delpatient/${Id}`;
    return this.http.delete<Patient[]>(DelUrl);
  }
  UpdatePatient(Id:any,UpdatedPatient:Patient):Observable<Patient[]>{
    const UpdateUrl = `${this.baseUrl}/updatepatientbyid/${Id}`;
    return this.http.put<Patient[]>(UpdateUrl,UpdatedPatient);
  }
  GetPatientsById(Id:any):Observable<Patient[]>{
    const GetByIdUrl = `${this.baseUrl}/getpatientsbyid/${Id}`;
    return this.http.get<Patient[]>(GetByIdUrl)
  }
} 
