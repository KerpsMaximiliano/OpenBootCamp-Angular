import { Pipe, PipeTransform } from '@angular/core';
import { IPlayer } from '../models/player.interface';

@Pipe({
    name: 'calculate',
})
export class CalculatePipe implements PipeTransform {
    transform(player: IPlayer, ...args: unknown[]): string {
        let pointsTotal: number = 0;
        player.points.forEach((points) => {
            pointsTotal += points;
        });
        return player.name + ': ' + pointsTotal;
    }
}
