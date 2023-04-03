import { LightningElement, track} from 'lwc';

export default class Practice extends LightningElement {

@track dynamicWelcome='Centelon';
    onChangeValue(event){
      this.dynamicWelcome=event.target.value;
}
}