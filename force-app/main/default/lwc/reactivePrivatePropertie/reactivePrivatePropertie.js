import { LightningElement,api } from 'lwc';

export default class ReactivePrivatePropertie extends LightningElement {
message1 = 'Reactive Property';
handleChange(event){
    this.message1 = event.target.value 
}
}