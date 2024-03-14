/* globals ga */

export const onTemplateShow = (template) => {
  if (template.templateId === 'OTN6797XUKB0') {
    ga && ga('send', 'event', 'adBlocker', location.pathname);
  }
};
