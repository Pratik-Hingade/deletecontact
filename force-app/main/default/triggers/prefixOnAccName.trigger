trigger prefixOnAccName on Account (before insert) {
    for(Account a:trigger.new){
        if(a.Rating=='Hot'){
            a.Name='Mr. '+a.Name;
        }
         Else if(a.Rating=='Cold'){
             a.Name='Dr. '+ a.Name;
         }
        Else if(a.Rating=='Warm'){  
             a.Name='Er. '+ a.Name;
        
    }
}
}