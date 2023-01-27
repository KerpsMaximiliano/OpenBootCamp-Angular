import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'multiply',
})
export class MultiplyPipe implements PipeTransform {
    transform(value: number, ...args: any): number {
        let x: number = parseFloat(args);
        return value * x;
    }
}
