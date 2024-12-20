import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { NgIf, NgTemplateOutlet } from "@angular/common";
import { MatCheckbox } from "@angular/material/checkbox";
import { StepComponent, StepType } from "../step/step.component";
import { FormsModule } from "@angular/forms";
import { SvgComponent } from "../svg/svg.component";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: "oie-plateau",
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatButton,
    MatIconButton,
    MatIcon,
    NgTemplateOutlet,
    MatCheckbox,
    NgIf,
    StepComponent,
    FormsModule,
    SvgComponent
  ],
  templateUrl: "./plateau.component.html",
  styleUrl: "./plateau.component.scss"
})
export class PlateauComponent implements AfterViewInit {
  /**
   * Enable Steps onto the Board.
   */
  @Input() withSteps = false;
  @Input() editSteps = false;

  @ViewChild("step1", { read: ElementRef }) step1!: ElementRef;
  @ViewChild("path") path?: ElementRef;

  protected readonly StepType = StepType;


  ngAfterViewInit(): void {
    const path = document.querySelector("#targetPath") as SVGPathElement;
    const fraction = 0.5; // Position at 50% of the path length
    const pathLength = path.getTotalLength();
    const point = path.getPointAtLength(pathLength * fraction);

    // Access the projected content (oie-step component)
    const element = this.step1.nativeElement as HTMLElement;

    gsap.set(element, {
      x: point.x,
      y: point.y,
      transformOrigin: "50% 50%"
    });
  }
}
