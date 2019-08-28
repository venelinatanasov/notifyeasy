import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-reminder',
    templateUrl: './add-reminder.page.html',
    styleUrls: ['./add-reminder.page.scss']
})
export class AddReminderPage implements OnInit {
    DateInput: any;
    NameInput: any;
    NotesInput: any;

    constructor() {}

    ngOnInit() {}
    SubmitInput() {

        console.log(this.NameInput);
        console.log(this.NotesInput);
        console.log(this.DateInput);
    }
}
