import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';






@Component({
  selector: 'app-diag-add-group',
  templateUrl: './diag-add-group.component.html',
  styleUrls: ['./diag-add-group.component.scss']
})
export class DiagAddGroupComponent implements OnInit ,  AfterViewInit{
  data:any;
 
  groupName: any = '';
  categoryName: any = '';
  categoryName2: any = '';
  infoBox:any = '';
 fieldsArray: any = [];
 disableCategoryButton: Boolean = false;
 disableGroupButton: Boolean = false;

 showId = false;
 

 templateJson:object={

};



  constructor(public dialogRef: MatDialogRef<DiagAddGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any,   private element: ElementRef) {
      this.data=_data;
   
    }

  ngOnInit() {
   let ele = this.element.nativeElement.querySelector('#addGroupMainDiv');
  }

  ngAfterViewInit(){
 //   let ele = this.element.nativeElement.querySelector('#addGroupMainDiv');

  }
  

  addCategory(){
    let obj =  {
      isInfo: false,
      title: this.categoryName,
      info:[],
      tempInfoName: '',
      dataType:[{name: 'Numeric', value:'number'},
                {name: 'Boolean', value:'boolean'}
                 ],
      format:[{name: '%', value:'%'},
                {name: '$', value:'$'}
                 ],

                 
      };

      this.fieldsArray.push(obj);

      this.categoryName =  "";

      this.templateJson[this.groupName][this.categoryName] = {};
     


      
  }

  cancel(): any {
    let dataToSendBack: any = {};
    this.dialogRef.close(dataToSendBack);
  }


addGroup(){
  this.disableGroupButton = true;

  this.templateJson[this.groupName] = {};


}

deleteCategory(i,j){
  this.fieldsArray[i].info.splice(j,1)
//  this.fieldsArray.splice(i, 1);


}

toggleId(i){
  this.fieldsArray.forEach((obj, index) => {
    if(i == index){
      obj.isInfo = !obj.isInfo;
    }
  });
  
   
  
}

saveInfo(i){

  let infoObj = {name: this.fieldsArray[i].tempInfoName, type: '', formatValue: null};

  this.fieldsArray[i].info.push(infoObj);
  this.fieldsArray[i].tempInfoName = '';
//console.log(this.fieldsArray);
  
}

submit(){
  this.fieldsArray.forEach((obj, index) => {
    this.templateJson[this.groupName][obj.title] = {};

    if(obj.isInfo == true){
 obj.info.forEach((obj1: any, key: number) => {
  this.templateJson[this.groupName][obj.title][obj1.name] = {};
 
   this.templateJson[this.groupName][obj.title][obj1.name].type= obj1.type;
   this.templateJson[this.groupName][obj.title][obj1.name].format= obj1.formatValue;
   this.templateJson[this.groupName][obj.title][obj1.name].required = true;
   console.log(this.templateJson);
 
 });
    }
    else{
      this.templateJson[this.groupName][obj.title].type = obj.type;
      this.templateJson[this.groupName][obj.title].format = obj.formatValue;
      this.templateJson[this.groupName][obj.title].required = true;
    console.log(this.templateJson);
  }});


}

saveInfoType(){
  console.log(this.fieldsArray);
}




}
