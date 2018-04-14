import { Directive, ElementRef, Renderer, Renderer2, Input, OnInit, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements  OnInit {

  // @Input()
  // private highlight:string;  /* name is same */

  @Input("highlight")
  private colorName:string;

  @Input()
  private size:string; 
  
  constructor(private el:ElementRef, private renderer:Renderer2) {
  

   }
   
   ngOnInit():void{
     //console.log(this.el.nativeElement);
    // console.log(this.el.nativeElement); 
    // this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor",this.highlight);
    // this.renderer.setElementStyle(this.el.nativeElement,"fontSize","26px");
    console.log(this.size);
  
   } 
   /*
   ngOnChanges():void{
    console.log(this.el.nativeElement); 
    this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor",this.highlight);
    this.renderer.setElementStyle(this.el.nativeElement,"fontSize","26px");
   }
   */

   @HostListener("mouseover")
   applyStyle(){
    this.renderer.setStyle(this.el.nativeElement,"backgroundColor",this.colorName);
    this.renderer.setStyle(this.el.nativeElement,"fontSize",this.size);
   }

   @HostListener("mouseout")
   removeStyle(){
    this.renderer.removeStyle(this.el.nativeElement,"backgroundColor");
    this.renderer.removeStyle(this.el.nativeElement,"fontSize");
   }

}
