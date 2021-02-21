import Noty from 'noty';

const TIMEOUT = 5000;

export default {
  showNotification(type, text, timeout = TIMEOUT) {
    /**
     * @param {string}  type  Notification type [alert, success, warning, error, info]
     * @param {string}  text  Notification text
     */
    new Noty({
      theme: 'nest',
      layout: 'topRight',
      type: type,
      text: text,
      progressBar: true,
      timeout: timeout,
    }).show();
  },

  showSuccessNotification(text, timeout = TIMEOUT) {
    this.showNotification('success', text, timeout);
  },

  showErrorNotification(text, timeout = TIMEOUT) {
    this.showNotification('error', text, timeout);
  },

  showWarningNotification(text, timeout = TIMEOUT) {
    this.showNotification('warning', text, timeout);
  },

  showInfoNotification(text, timeout = TIMEOUT) {
    this.showNotification('info', text, timeout);
  },
};
