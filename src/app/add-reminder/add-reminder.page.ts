import { Component, OnInit } from '@angular/core';
import { CustomNotification } from '../notify-easy-home/notification.model';
import { Router } from '@angular/router';
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

    constructor(
        private router: Router
    ) {}

    ngOnInit() {}
    SubmitInput() {
        if (this.CheckInput()) {
            return;
        }
        const not: CustomNotification = {
            id: this.notarr.length + 1,
            date: this.DateInput,
            Name: this.NameInput,
            Notes: this.NotesInput
        };
        console.log(not);
        this.notarr.push(not);
        console.log(this.notarr);
        this.EmptyBoxes();
    }
    CheckInput() {
        if (this.DateInput === undefined ||
            this.DateInput === '' ||
            this.NameInput === undefined ||
            this.NameInput === '' ||
            this.NotesInput === undefined ||
             this.NotesInput === '') {
            return 1;
        }
        return 0;
    }
    EmptyBoxes() {
        this.NameInput = '';
        this.NotesInput = '';
        this.DateInput = '';
    }

    CancelInput() {
        this.EmptyBoxes();
        this.router.navigate(['/notify-easy-home']);
    }
}
