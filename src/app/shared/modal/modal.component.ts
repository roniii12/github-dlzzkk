import { Component, OnInit } from "@angular/core";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
  animations: [
    trigger("showComponent", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate(150, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  constructor() {}
  isClosed = false;
  ngOnInit() {}
}
