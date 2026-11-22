/**
 * API Configuration
 *
 * Provides a configurable base URL for API requests.
 * Uses REACT_APP_API_URL environment variable with a sensible default fallback.
 */

import { API_BASE_URL } from '../api/client';

const API_BASE_URL_LEGACY = API_BASE_URL;

/**
 * Get the full URL for an API endpoint.
 *
 * @param path - API path (e.g., '/api/parse')
 * @returns Full URL string
 */
export function apiUrl(path: string): string {
  // Ensure no double slashes when joining base and path
  const base = API_BASE_URL_LEGACY.replace(/\/+$/, '');
  const endpoint = path.startsWith('/') ? path : `/${path}`;
  return `${base}${endpoint}`;
}

export default API_BASE_URL;
