({

    doInit : function(component, event, helper) {

        //step 1

        var action = component.get('c.getTrainings');

        console.log('**action'+action);

        //step 2 pass parameter if need

        // have to pass accountid parameter with recird id value

        var type = component.get('v.trainingType');

        console.log('***type'+type);

       

        action.setParams({

            "trainingType": type

        });

        //step 4 - callback action

        action.setCallback(this,function(response){

            var responsevalues = response.getReturnValue();

            console.log('responsevalues'+responsevalues);

            component.set('v.trainingList',responsevalues);

        });

        //step 3 invoke action- enqueue action

        $A.enqueueAction(action,false);

    },

    doRedirect:function(component, event, helper) {

        console.log('doRedirect invoked');

        var eventSource = event.getSource();

        console.log('eventSource'+eventSource);

        var cid = eventSource.get("v.name");

        console.log('cid'+cid);

        var ctitle = eventSource.get("v.title");

        console.log('ctitle'+ctitle);

        var urlEvent = $A.get("e.force:navigateToURL");

        urlEvent.setParams({

            "url": cid

        });

        urlEvent.fire();

    }

})