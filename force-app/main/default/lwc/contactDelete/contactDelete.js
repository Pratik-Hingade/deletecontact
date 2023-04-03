import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';




 import Contact_Object from '@salesforce/schema/Contact';
 import Contact_Name from '@salesforce/schema/Contact.Name';
 import Contact_MobilePhone from '@salesforce/schema/Contact.MobilePhone';
 import Contact_Email from '@salesforce/schema/Contact.Email';

  

 

export default class ContactDelete extends LightningElement {
   
    ConObjectName=Contact_Object;
    ConNameField=Contact_Name;
    ConPhoneField=Contact_MobilePhone;
    ConEmailField= Contact_Email;
    
   
  
    showContactpage = false;
    showAccountDetails= false;
    

    handleContactdetails()
    {
        this.showAccountpage = false;
        this.showContactpage = true;
        this.showOpportunitypage=false;
        this.showAccountDetails=false;
    }
    
    handleAccountyImformation(){
        this.showAccountpage= false;
        this.showContactpage= false;
        this.showOpportunitypage=false;
        this.showAccountDetails=true;
    }
   
    
    contacthandleSave(event){
        const enents1= new ShowToastEvent({
            title : "Succesfully !!",
            message:"Contact Record Succesfully Created",
            variant:"success",
            
        });
        this.dispatchEvent(enents1);
    }
    
    @api recordId;

    // @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    // account;

    // get name() {
    //     return this.account.data.fields.Name.value;
    // }
    // get phone() {
    //     return this.contact.data.fields.Phone.value;
    // }

}