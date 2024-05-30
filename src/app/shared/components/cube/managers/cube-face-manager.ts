import { Observable, ReplaySubject } from "rxjs";

export class CubeFaceManager {
    private readonly rotateFront: ReplaySubject<void> = new ReplaySubject<void>();
    private readonly rotateBack: ReplaySubject<void> = new ReplaySubject<void>();
    private readonly rotateLeft: ReplaySubject<void> = new ReplaySubject<void>();
    private readonly rotateRight: ReplaySubject<void> = new ReplaySubject<void>();
    private readonly rotateTop: ReplaySubject<void> = new ReplaySubject<void>();
    private readonly rotateBottom: ReplaySubject<void> = new ReplaySubject<void>();

    rotateToFront(): void {
        this.rotateFront.next()
    }

    rotateToBack(): void {
        this.rotateBack.next();
    }

    rotateToLeft(): void {
        this.rotateLeft.next()
    }

    rotateToRight(): void {
        this.rotateRight.next()
    }

    rotateToTop(): void {
        this.rotateTop.next();
    }

    rotateToBottom(): void {
        this.rotateBottom.next();
    }

    onRotateFront(): Observable<void> {
        return this.rotateFront.asObservable();
    }

    onRotateBack(): Observable<void> {
        return this.rotateBack.asObservable();
    }

    onRotateLeft(): Observable<void> {
        return this.rotateLeft.asObservable();
    }

    onRotateRight(): Observable<void> {
        return this.rotateRight.asObservable();
    }

    onRotateTop(): Observable<void> {
        return this.rotateTop.asObservable();
    }

    onRotateBottom(): Observable<void> {
        return this.rotateBottom.asObservable();
    }
}