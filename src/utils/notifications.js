import Noty from 'noty';

const TIMEOUT = 5000;

export function showNotification(type, text, timeout = TIMEOUT) {
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
}

export function showSuccessNotification(text, timeout = TIMEOUT) {
  this.showNotification('success', text, timeout);
}

export function showErrorNotification(text, timeout = TIMEOUT) {
  this.showNotification('error', text, timeout);
}

export function showWarningNotification(text, timeout = TIMEOUT) {
  this.showNotification('warning', text, timeout);
}

export function showInfoNotification(text, timeout = TIMEOUT) {
  this.showNotification('info', text, timeout);
}
