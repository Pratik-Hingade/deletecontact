({
    handleClick : function(component, event, helper) {
    var sub1=parseInt(component.get("v.subject1"));
    var sub2=parseInt(component.get("v.subject2"));    
    var addition=(sub1+sub2);
    component.set("v.Result",Add);

    var multiplication=(sub1*sub2);
    component.set("v.Result",Multi);

    var substraction=(sub1-sub2);
    component.set("v.Result",Sub);

    var division=(sub1/sub2);
    component.set("v.Result",Div);


//     var result=((sub1+sub2)/200)*100;
//     component.set("v.Result",result);
// 
}
})