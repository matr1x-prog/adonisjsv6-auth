import { Secret } from '@adonisjs/core/helpers';
import { PROVIDER_REAL_USER } from '../../src/symbols.js';
import { AccessToken } from '../../modules/access_tokens_guard/access_token.js';
import { AccessTokensUserProviderContract } from '../../modules/access_tokens_guard/types.js';
/**
 * Representation of a fake user used to test
 * the access token guard.
 *
 * @note
 * Should not be exported to the outside world
 */
export type AccessTokensFakeUser = {
    id: number;
    email: string;
    password: string;
};
/**
 * Implementation of a user provider to be used by access tokens
 * guard for authentication. Used for testing.
 *
 * @note
 * Should not be exported to the outside world
 */
export declare class AccessTokensFakeUserProvider implements AccessTokensUserProviderContract<AccessTokensFakeUser> {
    #private;
    [PROVIDER_REAL_USER]: AccessTokensFakeUser;
    deleteToken(identifier: string | number | BigInt): void;
    createToken(user: AccessTokensFakeUser, abilities?: string[], options?: {
        name?: string;
        expiresIn?: string | number;
        ip: string;
        profileId: number;
    }): Promise<AccessToken>;
    createUserForGuard(user: AccessTokensFakeUser): Promise<{
        getId(): number;
        getOriginal(): AccessTokensFakeUser;
    }>;
    findById(id: number): Promise<{
        getId(): number;
        getOriginal(): AccessTokensFakeUser;
    } | null>;
    invalidateToken(tokenValue: Secret<string>): Promise<boolean>;
    verifyToken(tokenValue: Secret<string>): Promise<AccessToken | null>;
}
