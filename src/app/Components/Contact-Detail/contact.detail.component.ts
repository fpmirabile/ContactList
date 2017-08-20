import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../Models';

@Component({
    selector: 'contact-detail',
    templateUrl: './contact.detail.component.html'
})

export class ContactDetailComponent {
    constructor() {

    };

    @Input() contact : IContact;
    @Output() event = new EventEmitter<IContact>();

    quit() : void {
        this.event.emit(null);
    };

    formatAddress() : string {
        if (this.contact) {
            return this.contact.address.city + ", " + this.contact.address.state + " " 
                + this.contact.address.zipCode + ", " + this.contact.address.country;
        }

        return "";
    };
};