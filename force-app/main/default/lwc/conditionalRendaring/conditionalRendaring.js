import { LightningElement } from 'lwc';

export default class ConditionalRendaring extends LightningElement {
    showText=false;
    hideText=true;

    handleShow(){
this.showText=true;
this.hideText=false;
    }
    
    handleHide(){
        this.showText=false;
        this.hideText=true;
            }
}