import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent {

  showModal = false

  @Input()
  title = "Modal Dialog"

  open() {
    this.showModal = true
  }

  close() {
    this.showModal = false
  }

}
