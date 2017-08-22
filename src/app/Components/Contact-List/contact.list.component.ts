import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { IContact } from '../../Models';
import { ContactService } from '../../Services';

@Component({
    selector: 'contact-list',
    templateUrl: './contact.list.component.html',
    providers: [ ContactService ],
    animations: [
        trigger('slideInOut', [
          state('in', style({
            transform: 'translate3d(0, 0, 0)'
          })),
          state('out', style({
            transform: 'translate3d(100%, 0, 0)'
          })),
          transition('in => out', animate('400ms ease-in-out')),
          transition('out => in', animate('400ms ease-in-out'))
        ]),
      ]
})

export class ContactListComponent implements OnInit {
    constructor(private _contactService : ContactService) {

    };

    isContactsLoading: boolean = false;
    contacts: IContact[];
    errorMessage: string = "";
    selectedContact: IContact;
    menuState: string = 'out';

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
        this.menuState = this.menuState == "out" ? "in" : "out";
        this.selectedContact = contact;
    };
};