public with sharing class ProductManagerClass {
    @Auraenabled(cacheable=true)
    public static list<Product__c> getProduct(){
     return[SELECT Name,Prize__c,Image__c,Description__c  FROM  Product__c ORDER BY NAME asc ];
    }
}