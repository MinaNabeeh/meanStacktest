
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
    MatToolbarModule,
} from '@angular/material/toolbar';

import {
    MatButtonModule,
} from '@angular/material/button';

import {
    MatInputModule,
} from '@angular/material/input';
import {
    MatIconModule,
} from '@angular/material/icon';
@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        FormsModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        FormsModule
    ]
})
export class MaterialModule { }
