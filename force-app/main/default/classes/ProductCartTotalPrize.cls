public with sharing class ProductCartTotalPrize {
    @Auraenabled(cacheable=true)
    public static list<FlipkartAccount__c> getCartProductTotalPrize(){
        return[SELECT Total_Cart_Prize__c  FROM  FlipkartAccount__c];
       }  
}