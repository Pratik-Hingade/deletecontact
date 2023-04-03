import { api, LightningElement } from 'lwc';

export default class CTopParentComponent extends LightningElement {
   @api  name
    handleName(event){
        this.name=event.target.value;
    }
}