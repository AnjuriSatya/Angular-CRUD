import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PatientService } from '../patient.service';
import { Patient } from '../Interface/Patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientDetailsForm: any = FormGroup;
  addPatient: boolean = false;
  editPatient: boolean = false;
  index: any;
  searchTerm: string = '';
  // selectedDate: any;
  maxDate: string;
  patients: Patient[] = [];

  constructor(private _patientService: PatientService, private toastr: ToastrService, public dialog: MatDialog,) {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.inItForm();
    this.getPatientsList();
  }

  inItForm(){
    this.patientDetailsForm = new FormGroup({
      Id: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required]),
      DOB: new FormControl('', [Validators.required]),
      Age: new FormControl('', [Validators.required]),
      MobileNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      Gender: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required])
    });
  }

  getPatientsList() {
    this._patientService.getAllPatients().subscribe((res: any) => {
      this.patients = res.data;
      console.log(this.patients);
      })
  }

  add() {
    this.addPatient = true;
    this.editPatient = false;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '30rem', height: '100%', position: { right: '0' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getPatientsList();
      }
    });
  }

  edit(info: any, index: any) {
    this.editPatient = true;
    this.addPatient = false;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '30rem',
      height: '100%',
      position: { right: '0' },
      data: { info }
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this.getPatientsList();
      }
    });
  }

  deletePatient(Id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete this patient ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._patientService.DeletePatient(Id).subscribe(
          (response:any) => {
            this.getPatientsList();
            this.toastr.info('Delete Patient Successfully', '', {
              positionClass: 'toast-bottom-center'
            });    
          });
      }
    });
  }
}