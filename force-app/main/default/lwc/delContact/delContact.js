import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';


import ContactObject from '@salesforce/schema/Contact';
import ContactName from '@salesforce/schema/Contact.Name';
import ContactEmail from '@salesforce/schema/Contact.Email';
import ContactAccount from '@salesforce/schema/Contact.AccountId'

export default class DelContact extends LightningElement {
    @api recordId;

    fields1=[ContactName,ContactEmail,ContactAccount];
 
    conObject=ContactObject;
    conName=ContactName;
    conEmail=ContactEmail;
    contactId;

    handleContactCreate=true;
    handleInfo=false;
        
    handlesave1(event){
        this.contactId= event.detail.id;
       const events1 =new ShowToastEvent({
         title:"Successfully",
         message:"Contact Record Created",
         variant:"Success",
       });
       console.log('Contact detail : ',event.detail.id);
       this.dispatchEvent(events1);
    }

    showRecordsInfo(){
       this.handleContactCreate=false;
       this.handleInfo=true;
    }
   

    handleContactDelete(event){
        //this.recordId = event.target.value;
        //window.console.log('recordId# ' + this.recordId);
        deleteRecord(this.contactId) 
        //.then(() =>{
    
           const toastEvent = new ShowToastEvent({
               title:'Record Deleted',
               message:'Record deleted successfully',
               variant:'success',
           })
           this.updateRecordView();
           this.dispatchEvent(toastEvent);
           return handleContactCreate=true;
           
       // })
        // .catch(error =>{
        //     window.console.log('Unable to delete record due to ' + error.body.message);
        // });
     }
     updateRecordView() {
      setTimeout(() => {
           eval("$A.get('e.force:refreshView').fire();");
      }, 1000); 
   }

  
}