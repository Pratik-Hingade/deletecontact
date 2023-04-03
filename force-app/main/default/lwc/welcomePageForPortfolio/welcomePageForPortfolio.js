import { LightningElement } from 'lwc';

export default class WelcomePageForPortfolio extends LightningElement {
    portfolio=false;
    dialog=true;
    handleportfolio(){
this.portfolio=true;
this.dialog=false;
    }
}