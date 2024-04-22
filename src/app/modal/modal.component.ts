import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DatepipePipe } from '../datepipe.pipe';
import { PatientService } from '../patient.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  patientDetailsForm: any = FormGroup;
  addPatient: boolean = true;
  editPatient: boolean = false;
  index: any;
  searchTerm: string = '';
  errorMessage!:string;
  readonly:boolean= true;
 
  constructor( private _patientService:PatientService,private toastr: ToastrService, public dialog: MatDialog,public datePipe: DatepipePipe,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModel: any) {
 }

  ngOnInit(): void {
    this.inItForm();
    this.addPatient = this.dataModel ? false : true;
    if(!this.addPatient) {
      this.patchForm();
    }
    this.readonly = !this.addPatient;
  }

  inItForm(){
    this.patientDetailsForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl(''),
      mobilenumber: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required])
    });
    this.patientDetailsForm.get('dob').valueChanges.subscribe((dob:Date)=>{
     this.calculateAge(dob);
    });
  }

    calculateAge(dob: Date) {
      if (dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
          age--;
        }
        this.patientDetailsForm.get('age').setValue(age);
      }
    }

  save() {
    let patientsData = {
      Id: this.patientDetailsForm.value['id'],
      Name: this.patientDetailsForm.value['name'],
      DOB: this.patientDetailsForm.value['dob'],
      Age: this.patientDetailsForm.value['age'],
      MobileNumber: this.patientDetailsForm.value['mobilenumber'],
      Gender: this.patientDetailsForm.value['gender'],
      Email:this.patientDetailsForm.value['email']

    }
    if (this.addPatient) {
      this.readonly = false;
      this._patientService.createPatient(patientsData).subscribe(
        (response: any) => {
          if (response.success) {
            this.toastr.success('', 'Created Patient Successfully', {
              positionClass: 'toast-bottom-center'
            });
            this.dialogRef.close(true);
          } else if (response.error) {
            
            if (response.error.toLowerCase().includes('already exists')) {
              this.toastr.error('', 'Error', {
                positionClass: 'toast-bottom-center',
              
              });
            } 
          }
        },
        (error) => {
          console.error('Error creating patient:', error);
          this.toastr.error('',error.error.message ,{
            positionClass: 'toast-bottom-center'
          });
        }
      );
    }
    else {
      this.readonly = true;
      this._patientService.UpdatePatient(this.patientDetailsForm.value['id'], patientsData).subscribe((response: any)=>
      {
        if (response.success) {
          this.toastr.success('', 'Updated Patient Successfully', {
            positionClass: 'toast-bottom-center'
          });
          this.dialogRef.close(true);
        }
        else {
          this.toastr.error('', 'Failed to Update a Patient', {
            positionClass: 'toast-bottom-center'
          });
          this.dialogRef.close(false);
        }
      });
    }
      
  }
  clearForm() 
  {
    this.patientDetailsForm.reset(); 
  }

  patchForm(){
    this.patientDetailsForm.patchValue({
      id: this.dataModel.info.Id,
      name: this.dataModel.info.Name,
      dob:this.dataModel.info.DOB,
      age: this.dataModel.info.Age,
      mobilenumber: this.dataModel.info.MobileNumber,
      gender: this.dataModel.info.Gender,
      email:this.dataModel.info.Email
    });
    console.log(this.patientDetailsForm,'test');
  }
  
}     