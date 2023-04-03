trigger createAutoContact on Account (After insert) {
    list<contact> conids = new list<contact>();
    for(Account acc:trigger.new){
        contact con = new contact();
        con.accountid=acc.id;
        con.LastName=acc.name +'Child Contact';
        con.Email='pratikhingade62@gmail.com';
        conids.add(con);
    }
        insert conids;
}