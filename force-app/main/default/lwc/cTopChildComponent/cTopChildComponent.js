import { api, LightningElement } from 'lwc';

export default class CTopChildComponent extends LightningElement {
  @api name ;
    handleOnChange(event){
this.name=event.target.value;
const customevent = new customevent('namevalue',{details:this.name})
this.dispatchEvent(customevent);
    }
}