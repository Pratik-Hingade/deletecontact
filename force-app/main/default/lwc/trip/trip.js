import { LightningElement } from 'lwc';

export default class Trip extends LightningElement {
    showMumbaiPlace=false;
    showPunePlace=false;
    showMorePlace=false;
    showKochiPlace=false;

    handlerHide(event){
        this.showMumbaiPlace=false;
        this.showPunePlace=false;
        this.showMorePlace=false;
        this.showKochiPlace=false;
    }
    handlerPune(event){
        this.showMumbaiPlace=false;
        this.showPunePlace=true;
        this.showMorePlace=false;
        this.showKochiPlace=false;
    }
    handlerMumbai(event){
        this.showMumbaiPlace=true;
        this.showPunePlace=false;
        this.showMorePlace=false;
        this.showKochiPlace=false;
      }
      handlerOther(event){
        this.showMumbaiPlace=false;
        this.showPunePlace=false;
        this.showMorePlace=true;
        this.showKochiPlace=false;
      }
      handlerKochi(event){
        this.showMumbaiPlace=false;
        this.showPunePlace=false;
        this.showMorePlace=false;
        this.showKochiPlace=true;
      }
}