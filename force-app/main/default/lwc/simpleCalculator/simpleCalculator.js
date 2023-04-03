import { LightningElement} from 'lwc';
export default class SimpleCalculator extends LightningElement {
// @track firstNo;
// @track secondNo;
results;
numberChangeHandler1(event){
    this.firstNo=parseInt(event.target.value);
}
numberChangeHandler2(event){
    this.secondNo=parseInt(event.target.value);
}

addHandler(){
    this.results='Addition = ' +(this.firstNo + this.secondNo);
}
subHandler(){
    this.results='Substraction = ' +(this.firstNo - this.secondNo);
}
multiHandler(){
    this.results='Multiplication = ' +(this.firstNo * this.secondNo);
}
divHandler(){
    this.results='Division = ' +(this.firstNo / this.secondNo);
}
}