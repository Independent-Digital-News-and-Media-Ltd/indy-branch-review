/* globals JSGlobals */
import { getPianoGlobal } from './shared';

export const onTemplateShow = (template) => {
  // close any modals if we are running the mock environment
  // so they don't interfere with our automated tests
  if (JSGlobals.MOCK_ENV && template.displayMode === 'modal') {
    getPianoGlobal().template.close();
  }
};
