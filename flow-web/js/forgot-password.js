/* global JSGlobals */

import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { themes } from '@app/config/theme/Styles';

import { ID_FORGOTTEN_PASSWORD_CONTAINER } from '@app/constants/ids';

import ForgottenPasswordForm from '@app/component/pages/ForgottenPassword/ForgottenPasswordForm';

const { domain, forgottenPasswordHydrateData } = JSGlobals;
const { loggedIn } = forgottenPasswordHydrateData;
const container = document.getElementById(ID_FORGOTTEN_PASSWORD_CONTAINER);

hydrateRoot(
  container,
  <ThemeProvider theme={{ ...themes.default, domain }}>
    <ForgottenPasswordForm loggedIn={loggedIn} />
  </ThemeProvider>,
);
