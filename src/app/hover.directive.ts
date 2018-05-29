import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appHover]',
    host: {
        '(mouseenter)': 'onmouseenter()',
        '(mouseleave)': 'onmouseleave()'
    }
})
export class HoverDirective {
    @HostBinding('class.hovered') isHovered = false;
    onmouseenter() {
        this.isHovered = true;
    }
    onmouseleave() {
        this.isHovered = false;
    }
}