public with sharing class ProductCartManagerClass {
    @Auraenabled(cacheable=true)
    public static list<Cart__c> getCartProduct(){
     return[SELECT id,name,My_Products__c,Prize__c,Prize1__c,Image__c  FROM  Cart__c order by My_Products__c asc ];
    }     
   
}