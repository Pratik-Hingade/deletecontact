import {  LightningElement,api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    //='a1n5i000000E1FQAA0'
    @api objectApiName
    //='Portfolio__c'
    @api adminRating
    @api devlopmentRating
}