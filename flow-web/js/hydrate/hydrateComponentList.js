import { hydrateComponentList } from '@indy/archipelago/bootstrap';

import Wrapper from '@app/component/library/Hydration/IndyClientIslandWrapper';

/**
 * We don't want page specific instances of React components to be included in the
 * hydratableComponents bundle.
 *
 * Therefore we can now call below function with whatever list we want elsewhere,
 * keeping react-bootstrap.js purely focused on islands.
 *
 * Eg:
 * import { ProfileContent } from '@app/component/library/StaticPage/Profile/ProfileContent';
 * hydrateComponentList({ ProfileContent });
 */
export default (hydratableComponents, StateProvider) => {
  hydrateComponentList(hydratableComponents, { StateProvider, Wrapper });
};
