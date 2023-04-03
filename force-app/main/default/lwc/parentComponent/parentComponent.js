import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    valueofA
    valueofB
    handleChangeA(event){
this.valueofA=event.detail.value;
    }
    handleChangeB(event){
        this.valueofB=event.detail.value;
            }
}