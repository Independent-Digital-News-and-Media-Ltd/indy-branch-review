/**
You can get the bundle version by running pbjs in the console or by checking the flow-web package.json prebid dependency

Bidders don't always have the same name as their bid adapters by installing the Auto Import vscode extension you'll get auto-complete which should help you find the correct module.
@see {link} https://marketplace.visualstudio.com/items?itemName=steoates.autoimport

Alternatively here is the list of modules from the prebid.js github repo @see {link} https://github.com/prebid/Prebid.js/tree/master/modules
*/
import pbjs from 'prebid.js';
import 'prebid.js/modules/rtdModule';
import 'prebid.js/modules/adpod';
import 'prebid.js/modules/userId';
import 'prebid.js/modules/adyoulikeBidAdapter';
import 'prebid.js/modules/appnexusBidAdapter';
import 'prebid.js/modules/criteoBidAdapter';
import 'prebid.js/modules/gridBidAdapter';
import 'prebid.js/modules/ixBidAdapter';
import 'prebid.js/modules/kargoBidAdapter';
import 'prebid.js/modules/pubmaticBidAdapter';
import 'prebid.js/modules/rubiconBidAdapter';
import 'prebid.js/modules/minutemediaBidAdapter';
import 'prebid.js/modules/gumgumBidAdapter';
import 'prebid.js/modules/nextMillenniumBidAdapter';
import 'prebid.js/modules/riseBidAdapter';
import 'prebid.js/modules/ozoneBidAdapter';
import 'prebid.js/modules/vidazooBidAdapter';
import 'prebid.js/modules/consentManagement';
import 'prebid.js/modules/consentManagementGpp';
import 'prebid.js/modules/consentManagementUsp';
import 'prebid.js/modules/enrichmentFpdModule';
import 'prebid.js/modules/gdprEnforcement';
import 'prebid.js/modules/gptPreAuction';
import 'prebid.js/modules/sizeMappingV2';
import 'prebid.js/modules/dfpAdServerVideo';
import 'prebid.js/modules/jwplayerRtdProvider';
import 'prebid.js/modules/permutiveRtdProvider';
import 'prebid.js/modules/sharedIdSystem';
import 'prebid.js/modules/currency';

// we use PubX to guide us with floor pricing
import 'prebid.js/modules/pubxaiAnalyticsAdapter';
import 'prebid.js/modules/priceFloors';

window.pbjs = pbjs;

// required to process existing pbjs.queue blocks and setup any further pbjs.queue execution
pbjs.processQueue();
