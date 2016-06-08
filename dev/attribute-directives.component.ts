import {Component} from '@angular/core';
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div [myHighlight]="'red'">Highlight Me</div>
        <br/>
        <div [myHighlight]="'blue'">Another Highlight?</div>
    `,
    directives: [HighlightDirective]
})

export class AttributeDirectivesComponent {

}