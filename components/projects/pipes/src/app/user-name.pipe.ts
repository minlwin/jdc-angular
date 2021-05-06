import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'userName'
})
export class UserNamePipe implements PipeTransform {

    transform(value: any, withRole: boolean = false) {

        if (withRole) {
            return `${value?.name}, ${value?.role}`
        }
        return value?.name || ''
    }

}