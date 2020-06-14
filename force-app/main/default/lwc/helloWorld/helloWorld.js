import { LightningElement, track, api } from 'lwc';

export default class HelloWorld extends LightningElement { 
    @api displayMessageApi= 'Hello Api Decorator';
    @track displayMessageTrack= 'Hello track Decorator';
    displayMessage = 'world';
    @track objtest = {firstName:'Venkat',lastName:"Javvaji"}  ;    
}