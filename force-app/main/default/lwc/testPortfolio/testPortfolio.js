import { LightningElement,api } from 'lwc';
    import  { ShowToastEvent } from 'lightning/platformShowToastEvent';
    import userLogo from '@salesforce/resourceUrl/userLogo'
    import linkedinLogo from '@salesforce/resourceUrl/Linkedin'
    import trailhead from '@salesforce/resourceUrl/trailhead'
    
    export default class TestPortfolio extends LightningElement {
        userLogourl=userLogo
        linkedinLogourl=linkedinLogo
        trailheadLogourl=trailhead
        @api recordId 
        @api objectApiName='Portfolio__c'
        handleSave(event){ 
            this.recordId= event.detail.id;
            const msg = new ShowToastEvent({ title:'Information Collected Succesfull',
             message:'Click genarate button to build your Portfolio', 
             variant:'Success', });
             this.dispatchEvent(msg)
            }
            showForm=true;
            showPortfolio=false;
        
          
            handlePortfolio(){
                this.showPortfolio=true;
                this.showForm=false;
                  } 
    }