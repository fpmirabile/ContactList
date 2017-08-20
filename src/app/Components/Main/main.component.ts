import { Component, ViewEncapsulation } from '@angular/core';
import { IContact } from '../../Models';

@Component({
    selector: 'app',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.css' ],
    encapsulation: ViewEncapsulation.None
})

export class MainComponent {
    selectedContact: IContact;
    
      selectContact(contact: IContact) {
        this.selectedContact = contact;
      };
};