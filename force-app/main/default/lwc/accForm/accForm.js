import { api, LightningElement, track } from 'lwc';
import Account_Object from '@salesforce/schema/Account';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Website from '@salesforce/schema/Account.Website';
import Account_Phone from '@salesforce/schema/Account.Phone';

export default class AccForm extends LightningElement {
   @api accid ;
   @track showAccountPage = false;
   accountrecordform = true;
   
    AccObjectName= Account_Object;
    AccNameField=Account_Name;
    AccWebsiteField=Account_Website;                                                    
    AccPhoneField=Account_Phone;

    handleSuccess(event){
        console.log('onsuccess event recordEditForm', event.detail.id);
        this.accrecordId = event.detail.id;
        console.log('onsuccess event recordEditForm', this.accid);
        this.showAccountPage=true;
        this.accountrecordform=false;
    }
}