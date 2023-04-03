@isTest
/*public class testClassForTrigger {
    @isTest public static void prefixonAccNameTest(){
        	account acc = new account();
        acc.name='pratik';
        acc.Rating='Hot';
      Test.startTest();
         insert acc;
        
     /* account acc1 = new account();
        acc1.name='pratik';
        acc1.Rating='Cold';
          insert acc1;
   
         account acc2 = new account();
        acc2.name='pratik';
        acc2.Rating='Warm';
         insert acc2;
        Test.stopTest();*/
  
public class testClassForTrigger {
  @isTest public static void prefixonAccNameTest(){
       account acc1 = new account();
        acc1.name='pratik';
        acc1.Rating='Hot';
      test.startTest();
        insert acc1;
        account a=[Select Name from account where id=:acc1.id];
        system.assertEquals('Mr. pratik', a.Name);
        
        account acc2 = new account();
        acc2.name='pratik';
        acc2.Rating='Cold';
        insert acc2;
           test.stopTest();
        account ac=[Select Name from account where id=:acc2.id];
        system.assertEquals('Dr. pratik', ac.Name);

      account acc3 = new account();
        acc3.name='pratik';
        acc3.Rating='Warm';
        insert acc3;
     
        account acc=[Select Name from account where id=:acc3.id];
        system.assertEquals('Er. pratik', acc.Name);

  }
}