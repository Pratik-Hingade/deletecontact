import { LightningElement } from 'lwc';

export default class ChildToParentModelComponent extends LightningElement {
    
    closehandler(){
        const myEvent = new CustomEvent('close')
        this.dispatchEvent(new CustomEvent('close'))
    }
  
}