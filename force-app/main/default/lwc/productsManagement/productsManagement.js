import { api, LightningElement, wire } from 'lwc';
import getProduct from '@salesforce/apex/ProductManagerClass.getProduct'
import getCartProduct from '@salesforce/apex/ProductCartManagerClass.getCartProduct'
import getCartProductTotalPrize from '@salesforce/apex/ProductCartTotalPrize.getCartProductTotalPrize'

import CART_OBJECT from '@salesforce/schema/Cart__c';
import PRODUCT_FIELD from '@salesforce/schema/Cart__c.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class ProductsManagement extends LightningElement {
    Myproducts=true;
    showcart=false;
    showcartlogo=true;
    showhomelogo=false;
    @wire(getProduct)products;
    @wire (getCartProduct)cartProduct;
    @wire (getCartProductTotalPrize)getCartTotalPrize;

    @api recordId;
    cartObject = CART_OBJECT;
    cartFields = [PRODUCT_FIELD];
    
    handleCartCreated(event){
       
        // Run code when account is created.
       const toast = new ShowToastEvent({
         title:'Added',
          message:'Product Add To Cart', 
          variant:'success'});
          this.dispatchEvent(toast);
    }
    handleCart(){
        this.showcart=true;
        this.Myproducts=false;
        this.showcartlogo=false;
        this.showhomelogo=true;
      
    }
    handleHideCart(){
        this.showcart=false;
        this.Myproducts=true;
        this.showhomelogo=false;
        this.showcartlogo=true;
    
    }
   
    // handlesave1(event){
    //     this.contactId= event.detail.id;
    //    const events1 =new ShowToastEvent({
    //      title:"Successfully",
    //      message:"Contact Record Created",
    //      variant:"Success",
    //    });
    //    console.log('Contact detail : ',event.detail.id);
    //    this.dispatchEvent(events1);
    // }
   

}

