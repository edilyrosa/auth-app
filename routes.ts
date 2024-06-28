/**
 * An array of routes that are accessibles to the public
 * these routes dont requiere authentication
 * @type {string[]}
 */

export const publicRoutes = [
    '/'
]

/**
 * An array of routes that are used for authentication
 * these routes will redirect logged in the users to /settings
 * @type {string[]}
 */

export const authRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/error'
]

/**
 * The prefixfor API authentication routes
 * Routes that start with this prefix are used for API
 * authentication propurses (could never be protected)
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";