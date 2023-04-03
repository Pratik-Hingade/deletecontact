trigger emailAfterContactPortfolio on Portfolio__c (before insert, after insert,after update) {
List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
    for(Portfolio__c p : Trigger.new) {
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setToAddresses(new List<String>{p.Email__c});
        email.setSubject('Welcome to Portfolio');
        email.setPlainTextBody('Dear, ' + p.Name + ',\n\nWelcome to Genarateing Portfolio!\nThanks for visiting my site,\n Hope you like your portfolio,\nIf you have any suggestions for my site please reply here!!\nThanks!!,\nPratik Hingade');
        emails.add(email);
    }
    Messaging.sendEmail(emails);
}