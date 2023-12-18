import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup,FormControl,Validators
 } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientDetailsForm:any = FormGroup;
  addPatientData:boolean = false;
  editPatientData:boolean = false;
  index:any;
 patientId:any;
 searchTerm:string = '';
 selectedDate: any;
 maxDate: string;
 patientMessage =" This is patient data";

 patients = [
  { "id": 1, "name": "Vinodh", "dob": "12-12-2000", "age": 35, "mobilenumber": 8887235865, "gender": "F" },
  { "id": 2, "name": "Swapna", "dob": "12-09-2002", "age": 28, "mobilenumber": 7784583910, "gender": "F" },
  { "id": 3, "name": "Danial", "dob": "09-10-1999", "age": 42, "mobilenumber": 9739024780, "gender": "M" },
  { "id": 4, "name": "Satya", "dob": "10-11-2002", "age": 23, "mobilenumber": 9963876419, "gender": "F" },
  { "id": 5, "name": "Ajay", "dob": "01-08-1993", "age": 39, "mobilenumber": 7950825619, "gender": "M" },
  { "id": 6, "name": "Manoj", "dob": "06-03-1997", "age": 33, "mobilenumber": 7890490324, "gender": "M" },
  { "id": 7, "name": " Lucky", "dob": "08-02-1996", "age": 53, "mobilenumber": 9730823981, "gender": "F" },
  { "id": 8, "name": "Sunny", "dob": "12-06-1998", "age": 25, "mobilenumber": 8903467219, "gender": "M" }
];
  
  constructor( private toastr: ToastrService,public dialog: MatDialog) {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];

   }

  ngOnInit(): void {
    this.patientDetailsForm = new FormGroup({
      id: new FormControl('',[Validators.required]), 
      name: new FormControl('',[Validators.required]), 
      dob: new FormControl('',[Validators.required]), 
      age: new FormControl('',[Validators.required]), 
      mobilenumber: new FormControl('',[Validators.required,Validators.pattern("[0-9 ]{10}")]), 
      gender: new FormControl('',[Validators.required])
  })
  this.patientId = this.patients;
  console.log(this.patientId);
  
}

  addPatient(){
    this.addPatientData= true;
    this.editPatientData = false;
    const dialogRef = this.dialog.open(ModalComponent, {
      width:'30rem',height:'100%',position:{right:'0'}
     
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const currentData = this.patients
        currentData.push(result);
        this.patients = currentData; // Update the MatTableDataSource with new data
        console.log(currentData)
      }
      
    });
  }
  editPatient(info: any, index: number){
    this.editPatientData = true;
    this.addPatientData= false;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '30rem',
      height: '100%',
      position: { right: '0' },
      data: { info }
    });
  
    dialogRef.afterClosed().subscribe(updatedInfo=> {
      if (updatedInfo) {
        
        this.patients[index] = updatedInfo; 
      }
    });
    
  }
  
 delPatient(id: number) {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    width: '300px', // Set your preferred width
    data: { message: 'Are you sure you want to delete this patient?' } // You can pass data to your dialog
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Delete patient logic here
      this.patients = this.patients.filter(row => row.id !== id);
      console.log(this.patients, 'delete');
      this.toastr.warning('Delete Patient Successfully', '', {
        positionClass: 'toast-top-center' 
    });
    } else {
      console.log('Deletion canceled');
    }
  });
}
  // save(){
  //       if (this.addPatientData) {
  //     let data = {
  //       id: this.patientDetailsForm.value['id'],
  //       name: this.patientDetailsForm.value['name'],
  //       dob: this.patientDetailsForm.value['dob'],
  //       age: this.patientDetailsForm.value['age'],
  //       mobilenumber: this.patientDetailsForm.value['mobilenumber'],
  //       gender: this.patientDetailsForm.value['gender'],

  //     }
  //     this.patients.push(data);
  //     console.log(this.patients);
  //     this.patientDetailsForm.reset();
  //     this.toastr.success('', 'Add Patient Successfully',{
  //       positionClass: 'toast-top-right' 
  //     });
  //    this.addPatientData=false;
      

  // }
  // if(this.editPatientData){
  //   this.patients[this.index].id=this.patientDetailsForm.value['id'],
  //   this.patients[this.index].name=this.patientDetailsForm.value['name'],
  //   this.patients[this.index].dob=this.patientDetailsForm.value['dob'],
  //   this.patients[this.index].age=this.patientDetailsForm.value['age'],
  //   this.patients[this.index].mobilenumber=this.patientDetailsForm.value['mobilenumber'],
  //   this.patients[this.index].gender=this.patientDetailsForm.value['gender']
    
  //   this.patientDetailsForm.reset();
  //   this.editPatientData=false;
  //  }
  // }
  clearForm(){
  this.patientDetailsForm.reset();
  }
  onSearch(searchValue: string) {
    this.searchTerm = searchValue; 
  }
  omit_special_char_number(event:any)
    {
       let k;
       k = event.charCode;  //         k = event.keyCode;  (Both can be used)
       return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 );
   }
  
  openModal(){
    
    const dialogRef = this.dialog.open(ModalComponent, {
      width:'50rem',height:'100%',position:{right:'0'}
     
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  }