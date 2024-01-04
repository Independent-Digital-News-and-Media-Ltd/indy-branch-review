import { ID_ANALYTICS_DATA } from '@app/constants/ids';

export default () => {
  const digitalDataStr = document.getElementById(ID_ANALYTICS_DATA).textContent;

  return JSON.parse(digitalDataStr);
};
