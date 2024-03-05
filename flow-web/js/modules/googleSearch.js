/* globals google*/
import { loadJS } from '@app/public/js/modules/util';

const initGoogleSearch = (cx, searchInstance) =>
  new Promise((resolve) => {
    if (!cx) {
      resolve();
      return;
    }

    if (
      document.querySelectorAll(`#searchBox${searchInstance} #___gcse_0`)
        .length === 0
    ) {
      loadJS(`https://cse.google.com/cse.js?cx=${cx}`, {
        async: true,
      });

      const renderSearchElement = function () {
        google.search.cse.element.render(
          {
            div: `searchBox${searchInstance}`,
            tag: 'searchbox',
            gname: `searchbox-only${searchInstance}`,
          },
          {
            div: `quickSearchresults${searchInstance}`,
            tag: 'searchresults-only',
            gname: `searchbox-only${searchInstance}`,
          },
        );

        resolve();
      };

      const callback = function () {
        google.setOnLoadCallback(renderSearchElement, true);
      };

      window.__gcse = Object.assign(window.__gcse, {
        parsetags: 'explicit',
        callback,
      });
    }
  });

export default initGoogleSearch;
