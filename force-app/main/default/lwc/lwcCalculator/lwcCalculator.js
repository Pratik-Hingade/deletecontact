import { LightningElement } from 'lwc';

export default class LwcCalculator extends LightningElement {
    Total
    

    handleOnChange1(event){ 
       this.fNo=parseInt(event.target.value)
    }
    handleOnChange2(event){
        this.sNo=parseInt(event.target.value)
    }


    handleOnAdd(event){
      this.Total=this.fNo+this.sNo;
    }
    handleOnSub(event){
     this.Total=this.fNo-this.sNo;
    }
    handleOnDiv(event){
      this.Total=this.fNo/this.sNo;
    }
    handleOnMulti(event){
      this.Total=this.fNo*this.sNo;
    }
    
}