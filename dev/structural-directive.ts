import {Component} from '@angular/core';
import {UnlessDirective} from "./unless.directive";

@Component({
    selector: 'my-structural-directive',
    template: `
        <section class="directive">
            <h2>@ngIf</h2>
            <div>
                Enger a number higher than 10
                <br/>
                <input type="text" #number (keyup)="0">
            </div>
            <div *ngIf="number.value > 10">Number is greater than 10</div>
        </section>
        <br/>
        <section class="directive">
            <h2>*ngFor</h2>
            <div>
                <ul>
                    <li *ngFor="let item of list">{{item}}</li>
                </ul>
            </div>
        </section>
        <br/>
        <section class="directive">
            <h2>[ngSwitch</h2>
            <br/>
            <input type="text" #color (keyup)="0">
            <div [ngSwitch]="color.value">
                <template [ngSwitchWhen]="'red'">
                    <span style="color: red">Color is Red</span>
                </template>
                <template [ngSwitchWhen]="'green'">
                    <span style="color: green">Color is Green</span>
                </template>
                <template [ngSwitchWhen]="'blue'">
                    <span style="color: blue">Color is Blue</span>
                </template>
                <template ngSwitchDefault>
                    <span>Unknown Color</span>
                </template>
            </div>
        </section>
            
        <section class="directive">
            <h2>Custom Directive: *myUnless</h2>
            <div>
                <h2>Enter true or false</h2>
                <br/>
                <input type="text" #condition (keyup)="0">
            </div>
            <div *myUnless="condition.value != 'false'">
                Only shown if 'false' was entered.
            </div>
        </section>
    `,
    directives: [UnlessDirective]
})

export class StructuralDirective {
    list = ['apple', 'milk', 'bread']
}