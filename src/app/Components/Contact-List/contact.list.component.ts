import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../Models';
import { ContactService } from '../../Services';

@Component({
    selector: 'contact-list',
    templateUrl: './contact.list.component.html',
    providers: [ ContactService ]
})

export class ContactListComponent implements OnInit {
    constructor(private _contactService : ContactService) {

    };

    isContactsLoading: boolean = false;
    contacts: IContact[];
    errorMessage: string = "";
    @Output() selectedContact = new EventEmitter<IContact>();

    ngOnInit(): void {
        this.loadContacts();
    };

    private loadContacts(): void {
        this.isContactsLoading = true;

        this._contactService.get()
            .subscribe(response => {
                this.contacts = response;
                this.isContactsLoading = false;
            }, error => {
                this.isContactsLoading = false;
                this.errorMessage = error;
            });
    };

    selectContact(contact : IContact) : void {
        this.selectedContact.emit(contact);
    };
};