// import { LightningElement,api, track } from 'lwc';

// export default class ViewAccountRecord extends LightningElement {

//  @api accrecordid;
//  @track showAccountPage = true;
  
// }
import { LightningElement, api,track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class RecordFormExample extends LightningElement {
    // Expose a field to make it available in the template
    fields = [NAME_FIELD];

    // Flexipage provides recordId and objectApiName
    @api accRecordId;
    @track showAccountPage = true;

    //@api objectApiName;
}