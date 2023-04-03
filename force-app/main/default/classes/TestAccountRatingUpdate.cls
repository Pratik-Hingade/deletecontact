@isTest
public class TestAccountRatingUpdate {
@isTest
   static void testThisMethod(){
       account ac =new account();
       ac.name='pratik';
       ac.Industry='Media';
           insert ac;
    account acList=[select id,name,rating from account where id =:ac.id];
       system.assertEquals('Hot', acList.Rating);
   
       account acc =new account();
       acc.name='pratik';
       acc.Industry='Banking';
           insert acc;  
    account accList=[select id,name,rating from account where id =:acc.id];
       system.assertEquals('Warm', accList.Rating);
}      
}