import { loadJS } from './util';

// this vendor ID is copied from source point
const SP_VENDOR_ID = '654a71546725a6047bda1db7';

export default async () => {
  if (window.__tcfapi) {
    window.__tcfapi('getCustomVendorConsents', 2, (data) => {
      if (data.grants?.[SP_VENDOR_ID]?.vendorGrant) {
        loadJS('https://cdn.pbxai.com/b5a8c20e-7642-44b9-82a5-8c896cbfc109.js');
      }
    });
  }
};
