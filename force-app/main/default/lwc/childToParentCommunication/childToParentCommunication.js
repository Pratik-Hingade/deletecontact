import { LightningElement } from 'lwc';

export default class ChildToParentCommunication extends LightningElement {
    showHandler=false
    clickHandler(){
        this.showHandler=true
    }
    hideModel(){
        this.showHandler=false
    }

}