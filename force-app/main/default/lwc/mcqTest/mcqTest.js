import { LightningElement } from 'lwc';

export default class Quiz extends LightningElement {
    selectedAnswers={}//to store the answers
    correctAnswers=0 //to show the number of correct answers
    isSubmitted=false //to show the result
    //using an array of objects for questions
    myQuestions=[
        {
            id:"1",
            question:"How can you create Many to Many relationships in salesforce.com?",
            answers:{
                a:"Use a junction Object",
                b:"Use a piece of code to relate both objects",
                c:"Create a direct Many to Many relationships"
            },
            correctAnswer:"a"
        },
        {
            id:"2",
            question:"What will be the name of Custom Object in the Salesforce UI WSDL, if Custom Object is labeled like ‘common’ ?",
            answers:{
                a:"c_common",
                b:"Common__c",
                c:"common_C"
            },
            correctAnswer:"b"
        },
        {
            id:"3",
            question:"What is the annotation used to invoke an apex method imperatively from LWC?",
            answers:{
                a:"@future",
                b:"@isTest",
                c:"@AuraEnabled"
            },
            correctAnswer:"c"
        },
        {
            id:"4",
            question:"What are the maximum no of components that we can include in an LWC",
            answers:{
                a:"9",
                b:"25",
                c:"No Limit"
            },
            correctAnswer:"c"
        },
    ]
    // used for disabling submit button
    get allNotSelected()
    {
        return !(Object.keys(this.selectedAnswers).lenght===this.myQuestions.length)

    }
    //to apply dynamic styling to our result
    get isScoredFull()
    {
        //Using ternary operator to give different colors for success and error
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
        'slds-text-color_success':'slds-text-color_error'}`
    }
    //changeHandler gets called on every click of the options
    changeHandler(event)
    {
        const{name,value}=event.target
        this.selectedAnswers={...this.selectedAnswers,[name]:value}
    }
    submitHandler(event){
        //since submit button is inside the form , form always refreshes the page so to prevent 
        // that we are using preventdefault()
        event.preventDefault()
        //this.selected={"Question1":"a","Question2":"b"}
        //if the filter is true then it will return the item , filter always returns an array
        let correct=this.myQuestions.filter(item=>this.selectedAnswers[item.id]===item.correctAnswer)
        this.correctAnswers = correct.length
        console.log("this.correctAnswers",this.correctAnswers)
        this.isSubmitted=true
    }
    resetHandler()
    {
        //to reset the selected answers
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
    }
}