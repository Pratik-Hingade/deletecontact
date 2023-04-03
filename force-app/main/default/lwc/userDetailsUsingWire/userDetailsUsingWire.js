import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import name from '@salesforce/schema/User.Name';
import Email from '@salesforce/schema/User.Email';
export default class UserDetailsUsingWire extends LightningElement {
    userId = Id;
    // 0055i000002LWAZAA4
    userDetail
    @wire(getRecord,{recordId:'$userId',fields:[name,Email]})
userDetailHandler({data,error}){
    if(data){
        this.userDetail = data.fields
        console.log(userDetail)
    }
    if(error){
        console.error(error)
    }
}
@wire(getRecord,{recordId:'$userId',fields:[name,Email]})
userDetailsProperty

}