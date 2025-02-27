import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { BackendErrorsInterface } from '../../backend-errors.interface';

@Component({
    selector: 'qz-backend-error-messages',
    templateUrl: './backend-error-messages.component.html',
    styleUrls: ['./backend-error-messages.component.scss'],
    standalone: true,
    imports: [NgFor],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendErrorMessagesComponent implements OnInit {
    @Input() public backendErrors: BackendErrorsInterface = {};

    public errorMessages: string[] = [];

    public ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors).map((name) => {
            const messages = this.backendErrors[name].join(' ');

            return `${name} ${messages}`;
        });
    }
}
