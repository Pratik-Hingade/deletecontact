@isTest
public class test_Example_test_1 {
    @isTest
    static void testme(){
        Example_test_1 et = new Example_test_1();
        et.invoke();
        system.assertEquals('Pratik',et.name);
        system.assertEquals('Pune',et.city);
        et.call();
        system.assertEquals('Pratik',et.name);
        system.assertEquals('Pune',et.city);
    }
}