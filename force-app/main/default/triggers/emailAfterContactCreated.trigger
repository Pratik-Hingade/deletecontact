trigger emailAfterContactCreated on Contact (After insert) {
    List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
    for(Contact c : Trigger.new) {
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setToAddresses(new List<String>{c.Email});
        email.setSubject('Welcome to Salesforce Ecosystem');
        email.setPlainTextBody('Dear ' + c.FirstName + ',\n\nWelcome to Salesforce Database!\nThanks for Creating contact\nSincerely,\nPratik Hingade');
        emails.add(email);
    }
    Messaging.sendEmail(emails);
}