trigger countOfContact on Contact (After insert,After Update,After delete,After Undelete) {
   set<id> conids = new set<id>();
    if(trigger.isAfter){
        if(trigger.isInsert || trigger.isUpdate || trigger.isUndelete){
    for(contact con:trigger.new){
        conids.add(con.AccountID);
    }
        }
        if(trigger.isDelete || trigger.isUpdate){
    for(contact con:trigger.old){
        conids.add(con.AccountID);
    }
        }
    }
   list<account> acc=[select id,name,Count_Of_Contact__c,(select id,name from contacts) from account where id IN : conids];
    
    for(account ac:acc){
        ac.Count_Of_Contact__c=ac.contacts.size();
        update ac;
    }
}