import { bootstrapApplication } from "@angular/platform-browser";
import { PlateauComponent } from "./app/components/plateau/plateau.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(PlateauComponent, {
  providers: [provideAnimationsAsync()]
})
  .catch((err) => console.error(err));
