import { Component, ViewChild } from '@angular/core';
import { ModalDialogComponent } from './app-commons/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  @ViewChild(ModalDialogComponent)
  dialog?: ModalDialogComponent

  badGuys = ['Min Lwin', 'Others']
  courses = ['Java Basic', 'Spring', 'Angular', 'Flutter', 'One Stop Java']

  list: any[] = []

  targetIndex: number = - 1

  model: any

  constructor() {
    this.model = this.getNewObject()
  }

  save() {
    if (this.targetIndex >= 0) {
      this.list[this.targetIndex] = this.model
    } else {
      this.list.push(this.model)
    }
    this.dialog?.close()
  }

  addNew() {
    this.targetIndex = -1
    this.model = this.getNewObject()
    this.dialog?.open()
  }

  edit(data: any, index: number) {
    const str = JSON.stringify(data)
    this.model = JSON.parse(str)
    this.targetIndex = index
    this.dialog?.open()
  }

  close() {
    this.dialog?.close()
  }

  private getNewObject() {
    return {
      name: '',
      course: '',
      contact: {
        phone: '',
        email: ''
      }
    }
  }
}
