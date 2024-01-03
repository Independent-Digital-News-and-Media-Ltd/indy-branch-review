import { loadJS } from './util';

export default async () => {
  await loadJS('//static.anonymised.io/light/loader.js', {
    id: 'idward-plugin-js',
    attributes: [
      ['idw_client_id', 'NDEx'],
      ['idw_hide_button', 'true'],
    ],
  });
};
