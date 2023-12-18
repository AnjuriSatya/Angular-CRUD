import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DatePipePipe } from '../date-pipe.pipe';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  patientDetailsForm: any = FormGroup;
  addPatientData: boolean = true;
  editPatientData: boolean = false;
  index: any;
  studentId: any;
  searchTerm: string = '';
  selectedDate: any;
  maxDate: string;
  // dob = new Date();
  // displayage:any;
  // myFormControlDOB = new FormControl();
  // myFormControlAge = new FormControl();

 url = "./assets/google.svg";


  patients = [
    { "id": 1, "name": "Vinodh", "dob": "12-12-2000", "age": 35, "mobilenumber": 8887235865, "gender": "F" },
    { "id": 2, "name": "Swapna", "dob": "22-09-2002", "age": 28, "mobilenumber": 7784583910, "gender": "F" },
    { "id": 3, "name": "Danial", "dob": "09-10-1999", "age": 42, "mobilenumber": 9739024780, "gender": "M" },
    { "id": 4, "name": "Satya", "dob": "10-11-2002", "age": 23, "mobilenumber": 9963876419, "gender": "F" },
    { "id": 5, "name": "Ajay", "dob": "01-08-1993", "age": 39, "mobilenumber": 7950825619, "gender": "M" },
    { "id": 6, "name": "Manoj", "dob": "06-03-1997", "age": 33, "mobilenumber": 7890490324, "gender": "M" },
    { "id": 7, "name": " Lucky", "dob": "08-02-1996", "age": 53, "mobilenumber": 9730823981, "gender": "F" },
    { "id": 8, "name": "Sunny", "dob": "12-06-1998", "age": 25, "mobilenumber": 8903467219, "gender": "M" }
  ];

  constructor(private toastr: ToastrService, public dialog: MatDialog,public datePipe: DatePipePipe,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0]
 }

  ngOnInit(): void {
    this.patientDetailsForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('',[Validators.required]),
      mobilenumber: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      gender: new FormControl('', [Validators.required])
    })
     console.log(this.data, "dsatata");
     console.log(typeof this.data.info.dob);
    this.patchForm();
  }

  save() {
    if (this.addPatientData) {
      let data = {
        id: this.patientDetailsForm.value['id'],
        name: this.patientDetailsForm.value['name'],
        dob: this.patientDetailsForm.value['dob'],
        age: this.patientDetailsForm.value['age'],
        mobilenumber: this.patientDetailsForm.value['mobilenumber'],
        gender: this.patientDetailsForm.value['gender'],

      }

      this.patientDetailsForm.reset();
      if (this.data) {
        this.toastr.success('', 'Update Patient Successfully', {
          positionClass: 'toast-top-right'
        });
      }
      else {
        this.toastr.success('', 'Add Patient Successfully', {
          positionClass: 'toast-top-right'
        });
      }
      this.dialogRef.close(data);
     this.addPatientData = false;
      }

  } 

  clearForm() {
    this.patientDetailsForm.reset();
    
  }

  onSearch(searchValue: string) {
    this.searchTerm = searchValue;
  }
  omit_special_char_number(event: any) {
    let k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32);
  }
  

  patchForm(){
   
    this.patientDetailsForm.patchValue({
      id: this.data.info.id,
      name: this.data.info.name,
      dob:this.data.info.dob,
      age: this.data.info.age,
      mobilenumber: this.data.info.mobilenumber,
      gender: this.data.info.gender
    });

    console.log(this.patientDetailsForm,'test');
  }
  uploadFile(){
    
  }
//    CalculateAge()
//      {
//       console.log("DOB Value",this.myFormControlDOB.value);
// const seldate=new Date(this.myFormControlDOB.value);
// const year=new Date().getFullYear();
// const syear=seldate.getFullYear();
// this.displayage=year-syear;
// if (isNaN(this.displayage)) this.displayage = '';
// this.myFormControlAge.setValue(this.displayage);
// console.log(this.myFormControlAge.value);

//     }

  
}