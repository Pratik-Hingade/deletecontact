import { LightningElement, api} from 'lwc';

export default class ApiDecorator extends LightningElement {
   @api itemName="Salesforce Noob";
   @api handleClickValueChange(){
        this.itemName="SALESFORCE LWC DEMO"
   }
}