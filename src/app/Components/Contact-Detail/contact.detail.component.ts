import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../Models';

@Component({
    selector: 'contact-detail',
    templateUrl: './contact.detail.component.html',
    styleUrls: [ './contact.detail.component.css' ]
})

export class ContactDetailComponent {
    constructor() {

    };

    @Input() contact : IContact;
    @Output() event = new EventEmitter<string>();
    @Output() contactEdited = new EventEmitter<IContact>();

    quit() : void {
        this.event.emit("out");
    };

    formatAddress() : string {
        if (this.contact) {
            return this.contact.address.city + ", " + this.contact.address.state + " " 
                + this.contact.address.zipCode + ", " + this.contact.address.country;
        }

        return "";
    };

    editFavorite() : void {
        this.contact.isFavorite = !this.contact.isFavorite;
        this.contactEdited.emit(this.contact);
    };
};