trigger oppAmount on Opportunity (before insert,before update) {
    for(opportunity opp:trigger.new){
        if(opp.Amount!=NULL && opp.Amount>10000){
        opp.description='This is Hot opportunity.(Amount is greater  than 10000)';
        }
    }
}