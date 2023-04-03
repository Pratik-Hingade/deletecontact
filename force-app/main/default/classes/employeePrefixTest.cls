@isTest
public class employeePrefixTest {
    @istest public static void testTrigger(){
        employee__c emp = new employee__c();
        emp.name='pratik';
        emp.Gender__c='Male';
        system.assertEquals('Mr.pratik', emp.name);
    }
}