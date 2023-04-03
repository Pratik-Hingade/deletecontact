public class accountRatingUpdateHandler {
    public static void UpdateRating(List<Account>accList){
        for(account acc:accList){
            if(acc.industry!='NULL' && acc.industry=='Media'){
                acc.Rating='Hot';
            }
        }
    }
}