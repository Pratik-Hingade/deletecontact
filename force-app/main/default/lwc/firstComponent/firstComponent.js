import { LightningElement ,track } from 'lwc';

export default class FirstComponent extends LightningElement {
@track valueToShow = 'hello first copmponent';  
changeHandler(){
    this.valueToShow = event.targer.value;
}
}