import { LightningElement ,api,wire,track} from 'lwc';
import returndata from '@salesforce/apex/getPortfilioRecord.returndata';

export default class PortfolioUserDetailsViewForm extends LightningElement {
    @api recordId
    @api objectApiName
    @api admin
    @api devlopment
    // handleDownload(){
    //     window.open("https://github.com/Pratik-Hingade/PratikResume/raw/main/Pratik%20SF%20Resume%20.pdf","_blank")
    // }
//     admin;
// @track listofdata = [];
//    @wire(returndata)
//     wiredContacts({ error, data }) {
//         if (data) {
//             this.contacts = data;
//             console.log(JSON.stringify(data));
//             this.error = undefined;
//             data.forEach(acc =>{
//                 this.listofdata.push({
//                     admin : acc.Salesforce_Admin__c,
//                     developement : acc.Salesforce_Devlopment__c

//                 });

//             });

//            this.admin = this.listofdata[0].admin;
//            this.developement = this.listofdata[0].developement;
//            console.log(this.admins);

//             console.log('data:',JSON.stringify(this.listofdata));
//         } else if (error) {
//             this.error = error;
//             this.contacts = undefined;
//         }
//     }
}