import { LightningElement } from 'lwc';

export default class CreatePortfolio extends LightningElement {
    portfolioButton=true;
    portfolio=false;
    handleOnClick(){
this.portfolioButton=false;
this.portfolio=true;
    }
}