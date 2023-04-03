trigger avoidAccDeletion on Account (before delete) {
   list<id> ids= new list<id>();
    for(account a:trigger.old){
   ids.add(a.id) ;   
      list <account> accList=[select id,name,(select id,name from opportunities) from account where id IN : ids];
        for(account ac:accList){
            if(ac.opportunities.size()>0){
                ac.name.addError('You can not delete this account because this account having opportunity');
            }	
        }
}
}