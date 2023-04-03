import { LightningElement } from 'lwc'; 	
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import Student_Object from '@salesforce/schema/Student__c'
import Student_Name from '@salesforce/schema/Student__c.Name';
import Student_Gender from '@salesforce/schema/Student__c.Gender__c';
import Student_Email from '@salesforce/schema/Student__c.Email_ID__c';
//import Student_Cource from '@salesforce/schema/Student__c.courses__c';
//import Student_Higest_Education from '@salesforce/schema/Student__c.Highest_Education__c';
import Student_Passing_year from '@salesforce/schema/Student__c.Highest_Education_Passing_Year__c';
import Student_Percentage from '@salesforce/schema/Student__c.Highest_Education_Percentage__c';
import Student_Phone from '@salesforce/schema/Student__c.Phone__c';
import Student_Reg_No from '@salesforce/schema/Student__c.Registration_No__c';
//import Student_Addmission from '@salesforce/schema/Student__c.Take_Ad__c';

 
export default class Studentprofile extends LightningElement {   
   
    ObjectName= Student_Object;
    NameField= Student_Name;
    GenderField=Student_Gender;
    EmailField=Student_Email;
   // CourceField=Student_Cource;
   // HightEduField=Student_Higest_Education;
    PassingyearField=Student_Passing_year;
    PercentageField=Student_Percentage;                                                     
    PhoneField=Student_Phone;
    RegNo_Field=Student_Reg_No;
   // AddmissionField=Student_Addmission;
 



 
    handleSave(event){
        const enents= new ShowToastEvent({
            title : "Succesfully",
            message:"Student Succesfully Onboard",
            variant:"success",
            
        });
        this.dispatchEvent(enents);
    }

    
   
}