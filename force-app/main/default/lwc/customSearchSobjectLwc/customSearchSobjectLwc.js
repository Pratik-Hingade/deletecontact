import { LightningElement, api, track} from 'lwc';
export default class RecordEditFormEditExampleLWC extends LightningElement {
    @api recordId;
   @track accId='';
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
    accId = (event.detail.id);
    }

}