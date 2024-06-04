import WebApp from '@twa-dev/sdk';
import router from './router';
import { getCSSVar } from './utils';

export function hideBackButton() {
    WebApp.BackButton.hide();
}

export function hideMainButton() {
    WebApp.MainButton.hide();
}

export function showHistoryBackButton() {
    // TODO: add a boolean paramater 'confirm' to show native confirmation modal
    WebApp.BackButton.onClick(() => {
        router.push(-1);
    });
    WebApp.BackButton.show();
}

export function showMainButton(text, callback) {
    WebApp.MainButton.text = text;
    WebApp.MainButton.onClick(callback);
    WebApp.MainButton.show();
}

export function getCurrentTheme() {
    return WebApp.colorScheme;
}

export function setHeaderColor() {
    const color = getCSSVar('--tg-theme-secondary-bg-color')
    WebApp.setHeaderColor(color);
}

export function getUserId() {
    return WebApp.initDataUnsafe?.user?.id
}

export function setBgColor() {
    const color = getCSSVar('--tg-theme-secondary-bg-color')
    WebApp.setBackgroundColor(color)
}

export function getUserLanguage() {
    return WebApp.initDataUnsafe?.user?.language_code
}