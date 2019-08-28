import { Component, OnInit } from '@angular/core';
import { CustomNotification } from '../notify-easy-home/notification.model';

@Component({
    selector: 'app-add-reminder',
    templateUrl: './add-reminder.page.html',
    styleUrls: ['./add-reminder.page.scss']
})
export class AddReminderPage implements OnInit {
    DateInput: string;
    NameInput: string;
    NotesInput: string;

    private notification: CustomNotification;

    notarr: CustomNotification[] = [];


    constructor() {}

    ngOnInit() {}
    SubmitInput() {
        const not: CustomNotification = {
            id: this.notarr.length + 1,
            date: this.DateInput,
            Name: this.NameInput,
            Notes: this.NotesInput
        };
        console.log(not);
        this.notarr.push(not);
        console.log(this.notarr);
    }
}
