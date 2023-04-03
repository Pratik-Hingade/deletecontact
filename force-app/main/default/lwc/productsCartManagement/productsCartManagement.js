import {LightningElement, wire } from 'lwc';
import getCartProduct from '@salesforce/apex/ProductCartManagerClass.getCartProduct'
import CART_OBJECT from '@salesforce/schema/Cart__c';
import PRODUCT_FIELD from '@salesforce/schema/Cart__c.Name';

export default class ProductsCartManagement extends LightningElement {
    
    showcart=false;
    @wire (getCartProduct)cartProduct;
    cartObject = CART_OBJECT;
    cartFields = [PRODUCT_FIELD];
    property=false; 

    handleCart(){
        this.showcart=true;
    }
    handleHideCart(){
        this.showcart=false;
    }
}


