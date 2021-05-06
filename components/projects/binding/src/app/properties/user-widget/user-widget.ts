import { Component, Input } from "@angular/core";
import { User } from "../user";

@Component({
    selector: 'user-widget',
    templateUrl: 'user-widget.html'
})
export class UserWidget {

    @Input("data")
    user?: User

    @Input()
    title?: string
}