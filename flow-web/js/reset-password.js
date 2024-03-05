/* global JSGlobals */
import { hydrateRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { themes } from '@app/config/theme/Styles';

import { ID_RESET_PASSWORD_FORM_CONTAINER } from '@app/constants/ids';

import ResetPasswordForm from '@app/component/pages/ResetPassword/ResetPasswordForm';

const { domain, resetPasswordHydrateData } = JSGlobals;
const { loggedIn } = resetPasswordHydrateData;
const container = document.getElementById(ID_RESET_PASSWORD_FORM_CONTAINER);

hydrateRoot(
  container,
  <ThemeProvider theme={{ ...themes.default, domain }}>
    <ResetPasswordForm loggedIn={loggedIn} />
  </ThemeProvider>,
);
