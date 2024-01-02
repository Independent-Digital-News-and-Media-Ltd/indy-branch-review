import { ArchipelagoProvider } from '@app/context/ArchipelagoProvider';

import * as hydratableComponents from '@app/component/hydratableComponents.js';

import hydrateComponentList from './hydrate/hydrateComponentList';
import initPageStateUpdateHandlers from './modules/page-state-update-handlers';

initPageStateUpdateHandlers();

hydrateComponentList(hydratableComponents, ArchipelagoProvider);
