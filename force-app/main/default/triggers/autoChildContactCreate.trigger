trigger autoChildContactCreate on Account (After insert,After update) {
 for(account a:trigger.new){
    for(Integer i=0 ; i<3 ; i++){
    contact con= new contact();
       /* con.accountId=a.id;*/
        con.lastName=a.name  + i;
        con.phone=a.phone  +i;
     insert con; 
   }
  }
 }