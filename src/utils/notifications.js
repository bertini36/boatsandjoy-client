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
  showNotification('success', text, timeout);
}

export function showErrorNotification(text, timeout = TIMEOUT) {
  showNotification('error', text, timeout);
}

export function showWarningNotification(text, timeout = TIMEOUT) {
  showNotification('warning', text, timeout);
}

export function showInfoNotification(text, timeout = TIMEOUT) {
  showNotification('info', text, timeout);
}
