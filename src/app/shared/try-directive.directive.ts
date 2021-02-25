import { Directive } from "@angular/core";

@Directive({
  selector: "[appTryDirective]",
  host: {
    "[style.background-color]": '"yellow"'
  }
})
export class TryDirectiveDirective {
  constructor() {}
}
