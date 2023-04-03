import { LightningElement,api } from 'lwc';
import  { ShowToastEvent } from 'lightning/platformShowToastEvent';
import userLogo from '@salesforce/resourceUrl/userLogo'
import linkedinLogo from '@salesforce/resourceUrl/Linkedin'
import trailhead from '@salesforce/resourceUrl/trailhead'

export default class PortfolioBanner extends LightningElement {
    userLogourl=userLogo
    linkedinLogourl=linkedinLogo
    trailheadLogourl=trailhead
    @api recordId1='a1n5i000000E1FQAA0'
    @api objectApiName='Portfolio__c'

    @api admin1
    @api devlopment1
    showForm=true;
    showPortfolio=false;
    showPortfolio1=false;
    showPortfolioDemo=false;
    showbutton=false;
    hideSubmit=true;
    
    

    adminRating(event){
     this.admin1=event.target.value;
     console.log('this is admin rating:- '+this.admin1);
    }
    devlopmentRating(event){
        this.devlopment1=event.target.value;
        console.log('this is devlopment rating:- '+this.devlopment1);
       }

    handleSave(event){
        this.recordId1= event.detail.id;
        const msg = new ShowToastEvent({ title:'Information Collected Succesfull',
         message:'Click genarate button to build your Portfolio', 
         variant:'Success', });
         this.dispatchEvent(msg)
         this.showbutton=true;
         this.hideSubmit=false;
    }
    handlePortfolio(){
        this.showForm=false;
        this.showPortfolio=true;
        this.showPortfolio1=false;
        this.showPortfolioDemo=false;
        this.showbutton=false;
        this.hideSubmit=false;
    }
    handlePortfolio1(){
        this.showForm=false;
        this.showPortfolio=false;
        this.showPortfolio1=true;
        this.showPortfolioDemo=false;
        this.showbutton=false;
        this.hideSubmit=false;
    }
    handlePortfolioDemo(){
        this.showForm=false;
        this.showPortfolio=false;
        this.showPortfolio1=false;
        this.showPortfolioDemo=true;
        this.showbutton=false;
        this.hideSubmit=false;
    }
    handleBack(){
       this.showForm=true;
       this.showPortfolio=false;
       this.showPortfolio1=false;
       this.showPortfolioDemo=false; 
       this.showbutton=false;
       this.hideSubmit=false;
    }
    
}