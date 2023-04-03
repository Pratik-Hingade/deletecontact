public class getPortfilioRecord {
    @AuraEnabled(cacheable=true)
    Public static List<Portfolio__c> returndata(){
        List<Portfolio__c> lstPortfilo = [SELECT Id, Name, Salesforce_Admin__c, Salesforce_Devlopment__c, VisualForce__c, Lightning_Aura_Component__c, Lightning_Web_Component__c FROM Portfolio__c where id = 'a1n5i000000E70GAAS' ];
        return lstPortfilo;
        
    }

}