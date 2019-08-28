import { Component, OnInit } from '@angular/core';
import { CustomNotification } from '../notify-easy-home/notification.model';

@Component({
    selector: 'app-add-reminder',
    templateUrl: './add-reminder.page.html',
    styleUrls: ['./add-reminder.page.scss']
})
export class AddReminderPage implements OnInit {
    DateInput: any;
    NameInput: any;
    NotesInput: any;

    private notification: CustomNotification;
    not: CustomNotification = {
        id: 1,
        date: this.DateInput,
        Name: this.NameInput,
        Notes: this.NotesInput
    };
    constructor() {}

    ngOnInit() {}
    SubmitInput() {
        console.log(this.NameInput);
        console.log(this.NotesInput);
        console.log(this.DateInput);

        console.log(this.not.Name);
    }
}
