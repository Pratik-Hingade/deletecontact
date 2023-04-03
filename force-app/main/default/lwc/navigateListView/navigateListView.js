import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateListView extends NavigationMixin(LightningElement) {
    handleListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Portfolio__c',
                actionName:'list'
            },
            state:{
                filterName:'All'
            }
        })
    }
    handleNavigateFile(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}