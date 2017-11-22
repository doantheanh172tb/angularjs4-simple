import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'roundNum'
})

export class RoundPipe implements PipeTransform {
    transform(inputNum: number, isUpper: boolean, upTo: number): number {
        if (isUpper) {
            return Math.ceil(inputNum) + upTo;
        }
        return Math.floor(inputNum) + upTo;
    }
}