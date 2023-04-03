import { LightningElement } from 'lwc';
import userLogo from '@salesforce/resourceUrl/userLogo'
import linkedinLogo from '@salesforce/resourceUrl/Linkedin'
import trailhead from '@salesforce/resourceUrl/trailhead'

export default class PortfolioHomePage extends LightningElement {
     recordId1='a1n5i000000E1FQAA0'
     objectApiName='Portfolio__c' 

     userLogourl=userLogo
    linkedinLogourl=linkedinLogo
    trailheadLogourl=trailhead

    homePage=true;
    portfolio=false;
    showPortfolioDemo=false;
    handleOnClick(){
   this.homePage=false;
   this.portfolio=true;
   this.showPortfolioDemo=false;
    }
    handleDemo(){
        this.homePage=false;
        this.portfolio=false;
        this.showPortfolioDemo=true;
         }
         handleback(){
            this.homePage=true;
            this.portfolio=false;
            this.showPortfolioDemo=false;
         }
}