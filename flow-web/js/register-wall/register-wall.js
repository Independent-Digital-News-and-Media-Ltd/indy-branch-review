import { createRoot } from 'react-dom/client';

import { ID_PIANO_REGISTER_WALL } from '@app/constants/ids';
import * as registerWallVariants from '@app/constants/registerWallVariants';

import RegisterWallRenderer from '@app/component/library/Article/RegisterWall/RegisterWallRenderer';

import { log } from '../modules/log';

window.regWall.render = (key) => {
  const domContainer = document.getElementById(ID_PIANO_REGISTER_WALL);
  const root = createRoot(domContainer);
  const regSourceSection = domContainer.dataset.regSourceSection;
  const isValidRegWallKey = Object.values(registerWallVariants).includes(key);

  if (isValidRegWallKey) {
    root.render(
      <RegisterWallRenderer
        registerWallKey={key}
        regSourceSection={regSourceSection}
      />,
    );
  } else {
    log('Warning: Invalid register wall key.');
  }
};
