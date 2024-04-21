import { Component, Input } from "@angular/core";

@Component({
  selector: 'oie-step',
  standalone: true,
  imports: [],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {

  @Input() value= '';
  @Input() type = StepType.BUBBLE;

}


export enum StepType {
  STAR = "star",
  BUBBLE = "bubble",
  START_END = "start_end"
}
