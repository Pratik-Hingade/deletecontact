import { LightningElement ,track} from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track fullname ={firstName:"",lastName:""};

    handleChange(event){
    const field =event.target.name;
    window.alert(field)
    if(field ==='firstname'){
        this.fullname.firstName=event.target.value;
    }
    else if( field ==='lastname'){
        this.fullname.lastName=event.target.value;
    }
  }
}