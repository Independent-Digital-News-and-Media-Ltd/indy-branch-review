/* global JSGlobals */

import { EVENT_REG_WALL_LOADED } from '@app/constants/customEvents';
import { ID_PIANO_REGISTER_WALL } from '@app/constants/ids';
import { CLASS_LIMITED_ACCESS_NON_PREMIUM } from '@app/constants/piano';

import initReact from '@app/public/js/utils/initReact';

import { loadJS } from '../util';

const { manifest } = JSGlobals;
const registerWallScript = manifest['register-wall.js'];

export default () => {
  window.regWall = {
    // check ./constants.js for keys
    async initRegWall(key) {
      document.body.dispatchEvent(new CustomEvent(EVENT_REG_WALL_LOADED));

      await initReact();
      await loadJS(registerWallScript);
      this.render(key); // render() method exposed inside register-wall.js
    },
    initPianoTemplateRegWall: (templateId) => {
      document.body.dispatchEvent(new CustomEvent(EVENT_REG_WALL_LOADED));

      document
        .getElementById('main')
        .classList.add(CLASS_LIMITED_ACCESS_NON_PREMIUM);

      window.tp.template.show({
        templateId,
        displayMode: 'inline',
        containerSelector: `#${ID_PIANO_REGISTER_WALL}`,
      });
    },
  };
};
