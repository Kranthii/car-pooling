import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewService: boolean= false;
  serverCreationStatus="No Server Created" ;
  serverName="";
  constructor() {
    setTimeout(() => {
      this.allowNewService=true;
    }, 2000);
  }

  ngOnInit() {
  }

  onButtonClick(){
    this.serverCreationStatus="New Server Created";

  }
  onInputServer(event:Event){
this.serverName= (<HTMLInputElement>event.target).value;
  }



}
