trigger Deparment on Deparment__c (After insert,after update) {
    for(Deparment__c d:trigger.new){
        if(d.country__c=='IND'){
             Employee__c emp = new Employee__c();{
             emp.OwnerId=d.id;
             emp.name='Mr. '+d.name;
             emp.Phone_No__c='+91';
            
        }
        }
    }
}