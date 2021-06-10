import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mycrudapp';
  
     //_______VARIABLES______//                                  
  mycrud:any[] = []                    
  change:string ="add";
  proname:string;
  proiid:number;
  mainindex:any;
  mymethod:any = {};
  read:string = "Read"
  readed:boolean = false;
  books:number = 0;
  available:string = "no book found" ;
  id:string;
  names:string;
  show_table_data:boolean =  false;

  
  

  

  
                                              

 

  //_______PUSH_DATA_IN_ARRAY______//                                      
 myword(mydata){                       
   console.log(mydata)                 
   var myobj = {                       
     proId:mydata.proid,                
     proName:mydata.pronames,           
     proDates:mydata.prodate,
     prostatus:"read"
 };

   this.mycrud.push(myobj);
   this.books += 1;
   if(this.books >= 1){
     this.available = "totall books are"
   }else{
    this.available = "no book found"
   }}
 


   //_______REMOVE_ITEM_FROM_ARRAY______// 
                                        
 Deletesbuton(removeItem){             
this.mycrud.splice(removeItem, 1);
this.books -= 1;
if(this.books >= 1){
  this.available = "totall books are"
}else{
 this.available = "no book found"
}

   }
   

//_______EDIT_ITEM_FROM_ARRAY______//                                       
 edit(index){                          

   this.change = "update"
    this.show_table_data = false;

     this.mymethod = {
     pronames:this.mycrud[index].proName,
    proidd:this.mycrud[index].proId,
  }
  this.proname = this.mymethod.pronames;
  this.proiid = this.mymethod.proidd;
  this.mainindex = this.mycrud[index];
  console.log(this.mainindex)
  this.mycrud[index].prostatus = "read"
  }


 //_______UPDATE_ITEM_IN_ARRAY______// 
 updateData(data){
  this.mainindex.proName = data.upname
  this.mainindex.proId = data.upid
  this.change = "add"
   console.log("testing..")
 }


 //_______READ_DATA_FROM_ARRAY______// 
 status(indexdata){
  this.id = "Product Id : " + this.mycrud[indexdata].proId;
   this.names = "Product Name : " + this.mycrud[indexdata].proName;
   this.mycrud[indexdata].prostatus = "readed"
  this.readed = true;
  console.log(this.mycrud[indexdata])
    }
 
  
}
