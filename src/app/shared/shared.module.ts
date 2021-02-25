import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { SideBarCardComponent } from "./side-bar-card/side-bar-card.component";
import { ContainerComponent } from "./container/container.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { AddIconComponent } from "./add-icon/add-icon.component";
import { ModalComponent } from "./modal/modal.component";
import { TryDirectiveDirective } from './try-directive.directive';

@NgModule({
  declarations: [
    SideBarComponent,
    SideBarCardComponent,
    ContainerComponent,
    ConfirmComponent,
    AddIconComponent,
    ModalComponent,
    TryDirectiveDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SideBarComponent,
    SideBarCardComponent,
    ContainerComponent,
    ConfirmComponent,
    AddIconComponent,
    ModalComponent,
    TryDirectiveDirective
  ],
  providers: [DatePipe]
})
export class SharedModule {}
