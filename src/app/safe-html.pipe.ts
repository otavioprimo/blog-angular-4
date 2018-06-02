import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(html: string): SafeHtml {
    // let free = html.replace(/</g, '&lt;');
    // free = free.replace(/>/g, '&gt;');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
