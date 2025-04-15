import { Secret } from '@adonisjs/core/helpers';
import { PROVIDER_REAL_USER } from '../../src/symbols.js';
import { RememberMeTokenDbColumns, SessionUserProviderContract, SessionWithTokensUserProviderContract } from '../../modules/session_guard/types.js';
import { RememberMeToken } from '../../modules/session_guard/remember_me_token.js';
/**
 * Representation of a fake user used to test
 * the session guard.
 *
 * @note
 * Should not be exported to the outside world
 */
export type SessionFakeUser = {
    id: number;
    email: string;
    password: string;
};
/**
 * Implementation of a user provider to be used by session guard for
 * authentication. Used for testing.
 *
 * @note
 * Should not be exported to the outside world
 */
export declare class SessionFakeUserProvider implements SessionUserProviderContract<SessionFakeUser> {
    [PROVIDER_REAL_USER]: SessionFakeUser;
    /**
     * Creates the adapter user for the guard
     */
    createUserForGuard(user: SessionFakeUser): Promise<{
        getId(): number;
        getOriginal(): SessionFakeUser;
    }>;
    /**
     * Finds a user id
     */
    findById(id: number): Promise<{
        getId(): number;
        getOriginal(): SessionFakeUser;
    } | null>;
}
/**
 * Implementation with tokens methods as well
 *
 * @note
 * Should not be exported to the outside world
 */
export declare class SessionFakeUserWithTokensProvider extends SessionFakeUserProvider implements SessionWithTokensUserProviderContract<SessionFakeUser> {
    tokens: RememberMeTokenDbColumns[];
    /**
     * Creates a remember me token for a given user
     */
    createRememberToken(user: SessionFakeUser, expiresIn: string | number): Promise<RememberMeToken>;
    /**
     * Deletes token by the token id
     */
    deleteRemeberToken(_: SessionFakeUser, tokenIdentifier: string | number | BigInt): Promise<number>;
    /**
     * Verifies a given token
     */
    verifyRememberToken(tokenValue: Secret<string>): Promise<RememberMeToken | null>;
    /**
     * Recycles token by deleting the old one and creating a new one
     */
    recycleRememberToken(user: SessionFakeUser, tokenIdentifier: string | number | BigInt, expiresIn: string | number): Promise<RememberMeToken>;
}
