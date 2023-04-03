import { LightningElement ,api} from 'lwc';
import userLogo from '@salesforce/resourceUrl/userLogo'
import linkedinLogo from '@salesforce/resourceUrl/Linkedin'
import trailhead from '@salesforce/resourceUrl/trailhead'

export default class PortfolioBlue extends LightningElement {
    userLogourl=userLogo
    linkedinLogourl=linkedinLogo
    trailheadLogourl=trailhead
    @api recordId1='a1n5i000000E1FQAA0'
    @api objectApiName='Portfolio__c'

}