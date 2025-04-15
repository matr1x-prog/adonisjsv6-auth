import { FakeGuard } from '../../../factories/auth/main.js';
/**
 * Guard to use for testing
 */
export type Guards = {
    web: () => FakeGuard;
};
/**
 * Inferrring types for the authenticators, since
 * the japa plugins relies on the singleton
 * service
 */
declare module '@adonisjs/auth/types' {
    interface Authenticators extends Guards {
    }
}
