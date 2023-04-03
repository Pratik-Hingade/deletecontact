@isTest
public class TestNumberOfOppInAccount {
@isTest
    public  static void testMe(){
       account acc= new account();
        acc.name='pratik';
        acc.Active__c='yes';
        insert acc;
        {
        contact con=new contact();
        con.LastName='Hingade';
        con.AccountId=acc.id;
        insert con;
        }
        account accList=[select id,name,Count_of_Opportunity__c,(select id,name from Opportunities) from account where id =:acc.Id];
        system.assertEquals(1, accList.Count_of_Opportunity__c);
    }
}