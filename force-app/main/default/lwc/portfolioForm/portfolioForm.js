import { LightningElement } from 'lwc';
import  { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PortfolioForm extends LightningElement {
    showForm=true;
    showPortfolio=false;

    handleSave(event){
        const msg = new ShowToastEvent({ title:'Information Collected Succesfull',
         message:'Click genarate button to build your Portfolio', 
         variant:'Success', });
         this.dispatchEvent(msg)
        }
        handlePortfolio(){
      this.showPortfolio=true;
      this.showForm-false;
        }
    }