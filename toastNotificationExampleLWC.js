import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ToastNotificationExampleLWC extends LightningElement {

    showErrorToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Error',
            message: 'Some unexpected error',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showSuccessToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Operation is sucessful',
            variant : 'Success',
            mode : 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showWarningToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Warning',
            message: 'Operation is Warned.!',
            variant : 'Warning',
            mode : 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showInfoToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Operation Information',
            variant : 'Info',
            mode : 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}