import Fetcher from './Fetcher'
import axios from 'axios'
// import getPerf from '@schibstedspain/sui-perf'
// import measureAxios from '@schibstedspain/sui-perf/src/measure-axios'

/**
 * @implements Fetcher
 */
export default class AxiosFetcher extends Fetcher {
  /**
   * @param {Object} deps
   * @param {Config} deps.config
   */
  constructor ({config}) {
    super({config})

    this._config = config
    this._axios = axios

    // this._axios = axios.create()
    // const perf = getPerf(config.get('serverRequestId') || 'default')
    // measureAxios(perf)(this._axios)
  }

  /**
   * Get method
   * @param {String} url
   * @param {Object} options
   * @return {Object}
   */
  get (url, options) {
    return this._axios.get(url, options)
  }

  /**
   * Post method
   * @method post
   * @param {String} url
   * @param {String} body
   * @param {Object} options
   * @return {Object}
   */
  post (url, body, options) {
    return this._axios.post(url, body, options)
  }

  /**
   * Put method
   * @method put
   * @param {String} url
   * @param {String} body
   * @param {Object} options
   * @return {Object}
   */
  put (url, body, options) {
    return this._axios.put(url, body, options)
  }

  /**
   * Delete method
   * @method delete
   * @param {String} url
   * @return {Object}
   */
  delete (url) {
    return this._axios.delete(url)
  }
}