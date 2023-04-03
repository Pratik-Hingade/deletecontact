import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track showdiv=false;
    displayDiv(event){
        this.showdiv=event.target.checked;
    }
   
}