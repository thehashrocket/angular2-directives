import { Directive, ElementRef, OnInit, Renderer} from '@angular/core';
@Directive({
    selector: '[myHighlight]',
    inputs: ['highlightColor:myHighlight'],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    private _defaultColor = 'green';
    highlightColor: string;
    private el:HTMLElement;

    constructor( el: ElementRef, private _renderer: Renderer) {
        this.el = el.nativeElement; '' +
        console.log('ElementRef ', ElementRef);
    }

    onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }

    onMouseLeave() { this.highlight(null); }

    private highlight(color:string) {

        this.el.style.backgroundColor = color;
    }
}
