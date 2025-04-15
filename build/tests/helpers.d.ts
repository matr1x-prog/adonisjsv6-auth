import { Hash } from '@adonisjs/hash';
import { Emitter } from '@adonisjs/core/events';
import { Database } from '@adonisjs/lucid/database';
import { Encryption } from '@adonisjs/core/encryption';
import setCookieParser from 'set-cookie-parser';
export declare const encryption: Encryption;
/**
 * Creates a fresh instance of AdonisJS hash module
 * with scrypt driver
 */
export declare function getHasher(): Hash;
/**
 * Creates an instance of the database class for making queries
 */
export declare function createDatabase(): Promise<Database>;
/**
 * Creates needed database tables
 */
export declare function createTables(db: Database): Promise<void>;
/**
 * Creates an emitter instance for testing with typed
 * events
 */
export declare function createEmitter<Events extends Record<string, any>>(): Emitter<Events>;
/**
 * Promisify an event
 */
export declare function pEvent<T extends Record<string | symbol | number, any>, K extends keyof T>(emitter: Emitter<T>, event: K, timeout?: number): Promise<T[K] | null>;
/**
 * Parses set-cookie header
 */
export declare function parseCookies(setCookiesHeader: string | string[]): setCookieParser.CookieMap;
/**
 * Define cookies for the request cookie header
 */
export declare function defineCookies(cookies: {
    key: string;
    value: string;
    type: 'plain' | 'encrypted' | 'signed';
}[]): string;
/**
 * Travels time by seconds
 */
export declare function timeTravel(secondsToTravel: number): void;
/**
 * Freezes time in the moment
 */
export declare function freezeTime(): void;
