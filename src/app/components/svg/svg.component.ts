import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
  selector: "oie-svg",
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: "./svg.component.html",
  styleUrl: "./svg.component.scss"
})
export class SvgComponent {
  /**
   * Enable Steps onto the Board.
   */
  @Input() withSteps = true;
}
