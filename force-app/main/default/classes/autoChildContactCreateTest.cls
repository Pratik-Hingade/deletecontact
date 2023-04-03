@isTest
public  class autoChildContactCreateTest {
   @istest public static void  testtrigger(){
      account acc = new account();
        acc.Name='pratik';
        acc.phone='0987654321';
       test.startTest();
     insert acc;
   test.stopTest(); 
   }
}