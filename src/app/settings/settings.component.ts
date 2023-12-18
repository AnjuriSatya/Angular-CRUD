import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
 @Input() fromPatient:any;
@Output() custoevent = new EventEmitter();
 message = "passed to parent";
  ngOnInit(): void {
  }
 passToParent(){
  this.custoevent.emit(this.message)
 }
 updateMessage(data:any){
 this.message = data;
 }
}
