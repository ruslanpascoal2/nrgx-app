import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "username",
})
export class UsernamePipe implements PipeTransform {
  transform(value: string): string {
    const atIndex = value.indexOf("@");
    if (atIndex > -1) {
      return value.slice(0, atIndex);
    }
    return value;
  }
}
