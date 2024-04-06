import { Component, Input } from "@angular/core";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { NgIf, NgTemplateOutlet } from "@angular/common";
import { MatCheckbox } from "@angular/material/checkbox";
import { StepComponent } from "../step/step.component";

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
    StepComponent
  ],
  templateUrl: "./plateau.component.html",
  styleUrl: "./plateau.component.scss"
})
export class PlateauComponent {
  showFiller = false;

  @Input() withSteps = false;

  protected readonly PlateauType = PlateauType;
}

export enum PlateauType {
  WITH = "with",
  WITHOUT = "without"
}
