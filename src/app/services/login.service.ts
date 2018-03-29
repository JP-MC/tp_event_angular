import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService
{
    // Observable number sources
    private user_id:Subject<number> = new Subject<number>();

    sendUserId(id: number): void
    {
        this.user_id.next(id);
    }

    clearUserId(): void
    {
        this.user_id.next();
    }

    getUserId(): Observable<number>
    {
        return this.user_id.asObservable();
    }
}
