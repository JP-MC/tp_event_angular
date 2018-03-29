import { Component, Input } from '@angular/core';
import { Aevent } from '../models/Aevent';

@Component({
    selector: 'app-aevent',
    templateUrl: './aevent.component.html',
    styleUrls: ['./aevent.component.css']
})
export class AeventComponent
{
    @Input() public user_id: number;
    @Input() public aevent: Aevent;

    public readableDateTime(date: Date): string
    {
        const date_options: Object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		const hours: string = date.getHours().toString();
		const minutes: string = this.formatTime(date.getMinutes());
        return date.toLocaleDateString('fr-FR',date_options) + ' à ' + hours + 'h' + minutes;
    }
    private formatTime(time: number): string
    {
        let time_str: string = time.toString();
        time_str = (time_str.length == 1) ? '0' + time_str : time_str;
        return time_str;
    }
}