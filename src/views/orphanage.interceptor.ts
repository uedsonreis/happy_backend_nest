import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Orphanage } from 'src/orphanage/orphanage.entity';

@Injectable()
export class OrphanagesViewInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(tap((orphanages: Orphanage[]) => orphanages.map(render)));
    }
}

@Injectable()
export class OrphanageViewInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(tap(render));
    }
}

function render(orphanage: Orphanage): void {
    orphanage.photos = (orphanage.photos)
        ? orphanage.photos.map(photo => ({
            ...photo,
            path: (photo.path.startsWith('http')) ? photo.path : `http://localhost:3000/uploads/${photo.path}`
        }))
        : undefined;
}