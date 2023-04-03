import { api, LightningElement } from 'lwc';
import rangerRankLogo from '@salesforce/resourceUrl/doubleStarRangerRank'


export default class PortfolioUserStats extends LightningElement {
    @api recordId
    @api objectApiName

    trailheadRankImg=rangerRankLogo
    badges='234+'
    points='100,499+'
    trails='25+'
}