export const buildDeviceFrom = ({request = {}, window = {}}) => {
  return {
    // https://tc39.github.io/proposal-optional-chaining/
    userAgent:
      (request.headers && request.headers['user-agent']) ||
      (window.navigator && window.navigator.userAgent)
  }
}