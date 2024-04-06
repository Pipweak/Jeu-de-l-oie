import { bootstrapApplication } from "@angular/platform-browser";
import { PlateauComponent } from "./app/components/plateau/plateau.component";

bootstrapApplication(PlateauComponent)
  .catch((err) => console.error(err));
