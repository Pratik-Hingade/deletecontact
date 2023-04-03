@isTest
public class testCreateChildContact {
@isTest
    public static void testTrigger(){
         account acc=new account ();
         acc.name='pratik';
        acc.phone='7057012176';
        insert acc;
        account accContact=[select id,name,(select id,name from contacts ) from account where id =:acc.id ];
        system.assertEquals('pratikChild Contact', acc.name+'Child Contact');
    }
}