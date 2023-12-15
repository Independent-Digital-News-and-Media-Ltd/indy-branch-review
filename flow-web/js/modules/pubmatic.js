import { injectIframe, cookieSyncIframeAttributes } from './util';

export default () => {
  const src =
    'https://ads.pubmatic.com/AdServer/js/pwtSync/load-cookie.html?pubid=160793&profid=4771&bidders=appnexus,pubmatic,districtm,rubicon,ix';

  injectIframe({ ...cookieSyncIframeAttributes, src });
};
