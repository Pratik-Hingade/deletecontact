import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObjecctPageWithDefaultValue extends NavigationMixin(LightningElement) {
    handleOnClick(){
        const defaultValue = encodeDefaultFieldValues({
            Name:'Pratik Hingade',
            Email__c:'pratikhingade62@gmail.com',
            Phone__c:'7057012176'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Portfolio__c',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValue
            }
        })
    }
}