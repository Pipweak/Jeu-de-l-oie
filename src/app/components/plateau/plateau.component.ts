import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { NgIf, NgTemplateOutlet } from "@angular/common";
import { MatCheckbox } from "@angular/material/checkbox";
import { StepComponent, StepType } from "../step/step.component";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { gsap } from 'gsap'
import { FormsModule } from "@angular/forms";

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
    FormsModule
  ],
  templateUrl: "./plateau.component.html",
  styleUrl: "./plateau.component.scss"
})
export class PlateauComponent implements AfterViewInit {
  showFiller = false;

  /**
   * Enable Steps onto the Board.
   */
  @Input() withSteps = true;
  @Input() editSteps = false;

  @ViewChild('step1') step1?: ElementRef
  @ViewChild('path') path?: ElementRef

  protected readonly PlateauType = PlateauType;
  protected readonly StepType = StepType;

  toggleMe(b: boolean) {
    b = !b;
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(MotionPathPlugin)

    if (this.step1 && this.path) {
     gsap.to(this.step1.nativeElement,
 {
         duration: 5,
         motionPath: {
          path : '#path',
          start: 0.25
        }
     })
    }
  }
}

export enum PlateauType {
  WITH = "with",
  WITHOUT = "without"
}
