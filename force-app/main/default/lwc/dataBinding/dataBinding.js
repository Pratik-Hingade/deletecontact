import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {
    name='';
    city='';
    

    handleName(event){
        this.name=event.target.value;

    }
    get helloMethod(){
      return this.name==='Pratik';
    }
    handleCity(event){
        this.city=event.target.value;
    }
    get helloMethod1(){
        return this.city==='Pune'
    }
   
   
}