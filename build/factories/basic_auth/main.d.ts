import { PROVIDER_REAL_USER } from '../../src/symbols.js';
import { BasicAuthGuardUser, BasicAuthUserProviderContract } from '../../modules/basic_auth_guard/types.js';
/**
 * Representation of a fake user used to test
 * the basic auth guard.
 *
 * @note
 * Should not be exported to the outside world
 */
export type BasicAuthFakeUser = {
    id: number;
    email: string;
    password: string;
};
/**
 * Implementation of a user provider to be used by basic auth guard for
 * authentication. Used for testing.
 *
 * @note
 * Should not be exported to the outside world
 */
export declare class BasicAuthFakeUserProvider implements BasicAuthUserProviderContract<BasicAuthFakeUser> {
    [PROVIDER_REAL_USER]: BasicAuthFakeUser;
    /**
     * Creates the adapter user for the guard
     */
    createUserForGuard(user: BasicAuthFakeUser): Promise<{
        getId(): number;
        getOriginal(): BasicAuthFakeUser;
    }>;
    /**
     * Verifies user credentials
     */
    verifyCredentials(uid: string, password: string): Promise<BasicAuthGuardUser<BasicAuthFakeUser> | null>;
}
