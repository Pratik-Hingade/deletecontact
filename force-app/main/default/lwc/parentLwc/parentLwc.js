import { LightningElement } from 'lwc';

export default class ParentLwc extends LightningElement {
    results=0;

    handleIncrement(){
        this.results ++ ;
    }
    
    handleDecrement(){
        this.results--;
    }
}