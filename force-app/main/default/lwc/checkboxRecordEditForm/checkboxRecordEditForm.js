import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Is_verification_Done__c_FIELD from "@salesforce/schema/Opportunity.Is_verification_Done__c";
const fields=[Is_verification_Done__c_FIELD]
export default class CheckboxRecordEditForm extends LightningElement {

    handleCheck(event){
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
     }
     handleToast(event){
        this.accountId= event.detail.id;
       const events =new ShowToastEvent({
         title:"Successfully",
         message:"Opportunity stage update successfully",
         variant:"Success",
       });
       
       this.dispatchEvent(events);
    }

     
}