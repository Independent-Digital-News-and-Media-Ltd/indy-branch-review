/* navigator.platform is kind of deprecated but not really:
 * https://github.com/mdn/content/issues/14429#issuecomment-1082572735
 */
export const isIphone = () =>
  /iPhone/.test(navigator?.userAgentData?.platform || navigator?.platform);
// It was originally checking for ipods so keeping it around
export const isIpod = () =>
  /iPod/.test(navigator?.userAgentData?.platform || navigator?.platform);
export const isIpad = () =>
  /iPad/.test(navigator?.userAgentData?.platform || navigator?.platform)
    ? true
    : navigator.platform === 'MacIntel' &&
      navigator.maxTouchPoints > 1 &&
      !window.MSStream;
export const isIosDevice = () => isIphone() || isIpad() || isIpod();
