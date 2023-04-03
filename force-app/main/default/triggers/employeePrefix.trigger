trigger employeePrefix on Employee__c (before insert,Before update) {
    for(Employee__c e:trigger.new){
        if(e.Gender__c=='Male'){
            e.Name='Mr.'+e.Name;
            }
        else if(e.Gender__c=='Female'){
            e.Name='Mrs. '+e.Name;
        }
    }
}