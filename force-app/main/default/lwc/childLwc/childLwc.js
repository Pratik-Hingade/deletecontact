import { LightningElement } from 'lwc';

export default class ChildLwc extends LightningElement {
    
    handleAdd(){
         this.dispatchEvent(new CustomEvent('add'));
    }

    handleSub(){
        this.dispatchEvent(new CustomEvent('sub'));
    }
}