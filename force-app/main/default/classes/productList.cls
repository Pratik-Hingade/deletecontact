public with sharing class productList {
  
    @AuraEnabled

 
    public static List<Product__c> getContactList() {

      
        return [
            SELECT id,Image__c
            FROM Product__c	ORDER BY Name  ASC
        ];
    }   
}