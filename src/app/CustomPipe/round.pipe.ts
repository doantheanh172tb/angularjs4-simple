import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'roundNum'
})

export class RoundPipe implements PipeTransform {
    transform(inputNum: number): number {
        return Math.round(inputNum);
    }
}