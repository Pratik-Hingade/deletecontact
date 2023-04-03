trigger numberOfOpportunity on Opportunity (After insert,After update,After delete, After Undelete ) {
    List<id> ids=new List<id>();
    If(trigger.isAfter){
        if(trigger.isInsert || trigger.isUpdate || trigger.isUndelete){
            for(opportunity opp:trigger.new){
                ids.add(opp.AccountId);
            }        
        }
        if(trigger.isDelete || trigger.isUpdate){
            for(opportunity opp:trigger.old){
                ids.add(opp.AccountId);
            }
        }
    }
    List<Account> AccList=[select id,name,Count_of_Opportunity__c, (select id,name from Opportunities)from account where id IN:ids];
    for(account acc:AccList){                                                          
        acc.Count_of_Opportunity__c=acc.Opportunities.size();
        Upsert acc;
    }
}