import { LightningElement, track, api } from 'lwc';

export default class HelloWorld extends LightningElement { 
    @api displayMessageApi= 'Hello Api Decorator';
    @track displayMessageTrack= 'Hello track Decorator';
    displayMessage = 'helloworld';
    @track objtest = {firstName:'VenkataRao',lastName:"Javvaji"}  ;    
}