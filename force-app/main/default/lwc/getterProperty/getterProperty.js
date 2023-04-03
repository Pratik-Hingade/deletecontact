import { LightningElement } from 'lwc';

export default class GetterProperty extends LightningElement {
    fName='pratik';
    lName='hingade';
    handlefirstName(event){
        this.fName=event.target.value;
    }
    handlelastName(event){
        this.lName=event.target.value;
    }
    
    get handleFullName(){
      //  this.lName=event.target.value;
        return `${this.fName} ${this.lName}`.toUpperCase();
    }

  
}