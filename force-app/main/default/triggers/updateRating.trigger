trigger updateRating on Account (before insert) {
    for(account acc:trigger.new){
        If(acc.rating=='Hot'){
            (acc.type='Prospect');
        }
        If(acc.rating=='Cold'){
            (acc.type='Other');
        }
        
    }
}