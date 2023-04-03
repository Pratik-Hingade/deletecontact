@isTest
public class Test_Example_Test_2 {

  testmethod  static void testMe(){
    
    Example_Test_2 et=new Example_Test_2();
    et.setData();
        system.assertEquals('banking', et.Industry);
        
    }
}