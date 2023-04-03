trigger accountRatingUpdate on Account (before insert) {
    for(account acc:trigger.new){
        if(acc.Industry !='NULL' && acc.Industry=='Media'){
            acc.Rating='Hot';
        }    
        else if(acc.Industry !='NULL' && acc.Industry=='Banking'){
            acc.Rating='Warm';
        }
    }
}