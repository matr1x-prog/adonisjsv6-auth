import { GUARD_KNOWN_EVENTS } from '../../src/symbols.js';
import { AuthClientResponse, GuardContract } from '../../src/types.js';
/**
 * @note
 * Should not be exported to the outside world
 */
export type FakeUser = {
    id: number;
};
/**
 * Fake guard is an implementation of the auth guard contract
 * that uses in-memory values used for testing the auth
 * layer.
 *
 * @note
 * Should not be exported to the outside world
 */
export declare class FakeGuard implements GuardContract<FakeUser> {
    isAuthenticated: boolean;
    authenticationAttempted: boolean;
    driverName: string;
    user?: FakeUser;
    [GUARD_KNOWN_EVENTS]: undefined;
    getUserOrFail(): FakeUser;
    authenticate(): Promise<FakeUser>;
    check(): Promise<boolean>;
    authenticateAsClient(_user: FakeUser, _abilities?: string[], _expiresIn?: string | number): Promise<AuthClientResponse>;
}
