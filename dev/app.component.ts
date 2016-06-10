import {Component} from '@angular/core';
import {AttributeDirectivesComponent} from './attribute-directives.component'
import {StructuralDirective} from "./structural-directive";

@Component({
    selector: 'my-app',
    template: `
        <p>App Component</p>
        <my-attribute-directives></my-attribute-directives>
        <br/>
       <my-structural-directive></my-structural-directive>
    `,
    directives: [AttributeDirectivesComponent, StructuralDirective]
})
export class AppComponent {

}