import { api, LightningElement } from 'lwc';

export default class PtocChildComponent extends LightningElement {
    @api fname
    @api lname
    @api progress

}