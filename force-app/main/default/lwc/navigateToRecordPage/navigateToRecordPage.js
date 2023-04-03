import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    handleRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'a1n5i000000E1FQAA0',
                objectApiName:'Portfolio__c',
                actionName:'view'
            }
        })
    }
}