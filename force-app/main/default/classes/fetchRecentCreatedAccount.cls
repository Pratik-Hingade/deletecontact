public class fetchRecentCreatedAccount {

        public static List<Account>getAccount(){
            return[SELECT Id, Name,Website,Phone,CreatedDate FROM Account Order By CreatedDate desc Limit 1];
        }
    }