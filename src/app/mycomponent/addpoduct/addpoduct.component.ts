import { Component, OnInit, Output ,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-addpoduct',
  templateUrl: './addpoduct.component.html',
  styleUrls: ['./addpoduct.component.css']
})


export class AddpoductComponent implements OnInit {
 //@OUTPUT_VALUES_WITH_EVENTEMITTER 
@Output() mytodoadd: EventEmitter<any> = new EventEmitter();
@Output() update: EventEmitter<any> = new EventEmitter();


//@INPUT_VALUES
@Input() up_ad:string = "add"
@Input() proNamee:string;
@Input() proiid:string;
date = new Date()

constructor(){}
  

  
  
  
  ngOnInit(): void {
  }
  
  
  onadd(){
   if(this.proNamee == undefined && this.proiid == undefined){
     alert("plz fill the inputs")
    }
    else{

      if(this.up_ad == "add"){
        const myobj = {
          proid:this.proiid,
          pronames:this.proNamee,
          prodate:this.date
          
        };
  
      this.mytodoadd.emit(myobj);
      }
      else{
        
        const updata_data = {
          upname:this.proNamee,
          upid:this.proiid
        }
         this.update.emit(updata_data)

    }
   }
 }
}
