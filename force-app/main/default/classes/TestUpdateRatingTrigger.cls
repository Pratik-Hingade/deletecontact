//@isTest
public class TestUpdateRatingTrigger {
//@isTest
   public static void testTrigger(){
        account ac=new account();
        ac.Name='Pratik';
        ac.Rating='Hot';
        insert ac;
        account accList=[select id,type from account where id =:ac.id];
        system.assertEquals('Prospect', accList.type);
       
        account acc=new account();
        acc.Name='Pratik1';
        acc.Rating='Cold';
        insert acc;
        account accList1=[select id,type from account where id =:acc.id];
        system.assertEquals('Prospect', accList1.type);
       
    }
}