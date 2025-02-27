import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PersistanceService {
    public set(key: string, data: unknown): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Error setting to local storage', error);
        }
    }

    public get(key: string): unknown {
        try {
            const localStorageItem = localStorage.getItem(key);

            return localStorageItem ? JSON.parse(localStorageItem) : null;
        } catch (error) {
            console.error('Error getting from local storage', error);
            return null;
        }
    }
}
