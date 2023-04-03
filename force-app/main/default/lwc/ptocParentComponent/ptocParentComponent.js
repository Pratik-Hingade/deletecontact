import { LightningElement } from 'lwc';

export default class PtocParentComponent extends LightningElement {
   namef='Pratik';
   namel='Hingade';
   progressValue='0'
    handlefname(event){
    this.namef=event.target.value;
    }
    handlelname(event){
    this.namel=event.target.value;
    }
    progresshandler(event){
        this.progressValue=event.target.value;
    }
}