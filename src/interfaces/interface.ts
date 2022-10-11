/**
 * API response from server: {status: string, message: string, result: any}
 *
 * @export
 * @interface APIResponse
 */
 export interface APIResponse {
    /**
     * status
     * @type {string}
     * @memberof APIResponse
     */
    status: string;
    /**
     * message
     * @type {string}
     * @memberof APIResponse
     */
    message: string;
    /**
     * code
     *
     * @type {string}
     * @memberof APIResponse
     */
    code: string;
    /**
     * result
     * @type {any}
     * @memberof APIResponse
     */
    result: any;
  }