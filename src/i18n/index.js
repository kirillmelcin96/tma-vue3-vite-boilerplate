import { createI18n } from 'vue-i18n';
import ru from './ru.js';
import en from './en.js';
import { getUserLanguage } from '../webapp.js';

function getLanguage() {
	const lang = getUserLanguage()
	return lang === 'ru' ? 'ru' : 'en'
}

export const i18n = createI18n({
	allowComposition: true,
	locale: getLanguage(),
	messages: { en, ru },
});