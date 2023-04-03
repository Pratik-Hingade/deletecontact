import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


import AccountObject from '@salesforce/schema/Account';
import AccountName from '@salesforce/schema/Account.Name';
import AccountPhone from '@salesforce/schema/Account.Phone';
import AccountWebsite from '@salesforce/schema/Account.Website';

import ContactObject from '@salesforce/schema/Contact';
import ContactName from '@salesforce/schema/Contact.Name';
import ContactEmail from '@salesforce/schema/Contact.Email';


import OpportunityObject from '@salesforce/schema/Opportunity';
import OpportunityName from '@salesforce/schema/Opportunity.Name';
import OpportunityClosedate from '@salesforce/schema/Opportunity.CloseDate';
import OpportunityStageName from '@salesforce/schema/Opportunity.StageName';

export default class CreateAccount extends NavigationMixin(LightningElement) {
    @api recordId;

    fields =[AccountName, AccountPhone, AccountWebsite];
    fields1=[ContactName,ContactEmail];
    fields2=[OpportunityName,OpportunityClosedate,OpportunityStageName];

    accObject=AccountObject;
    accName=AccountName;
    accPhone=AccountPhone;
    accWebsite =AccountWebsite;
    accountId='Account Id';
 
    conObject=ContactObject;
    conName=ContactName;
    conEmail=ContactEmail;
    contactId='Contact Id';

    OppObject=OpportunityObject;
    oppName=OpportunityName;
    oppCloseDate=OpportunityClosedate;
    oppStage=OpportunityStageName;
    oppId='Opportunity Id';
    
    handleAccountCreate=true;
    handleContactCreate=false;
    handleOpportunityCreate=false;
    handleInfo=false;
    
    
     handlesave(event){
        this.accountId= event.detail.id;
       const events =new ShowToastEvent({
         title:"Successfully",
         message:"Account Record Created",
         variant:"Success",
       });
       console.log('Account detail : ',event.detail.id);
       this.dispatchEvent(events);
    }

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
    handlesave2(event){
        this.oppId= event.detail.id;
       const events2 =new ShowToastEvent({
         title:"Successfully",
         message:"Opportunity Record Created",
         variant:"Success",
       });
       console.log('Opportunity detail : ',event.detail.id);
       this.dispatchEvent(events2);
    }


    showContactForm(){
      this.handleAccountCreate=false;
       this.handleContactCreate=true;
       this.handleOpportunityCreate=false;
       this.handleInfo=false
    }
    showOpportunityForm(){
        this.handleAccountCreate=false;
       this.handleContactCreate=false;
       this.handleOpportunityCreate=true;
       this.handleInfo=false
    }

    
    showRecordsInfo(){
       this.handleAccountCreate=false;
       this.handleContactCreate=false;
       this.handleOpportunityCreate=false;
       this.handleInfo=true
    } 
    
navigateToRecordPage() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {  
            recordId: '0015i00000YRQFXAA5',
            objectApiName: 'Account',
            actionName: 'view'
        }
    });
}
}