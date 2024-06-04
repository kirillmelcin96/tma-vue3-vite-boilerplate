<template>
    <div class="content">
        <RouterView />
    </div>
</template>

<script>
import { getCurrentTheme, setHeaderColor, setBgColor } from './webapp.js';
import WebApp from '@twa-dev/sdk';

export default {
    mounted() {
        this.setupColors();
        WebApp.onEvent('themeChanged', () => {
            this.setupColors()
        });
    },

    methods: {
        setupColors() {
            const current_theme = getCurrentTheme();
            document.documentElement.dataset.theme = current_theme || 'dark';
            setHeaderColor();
            setBgColor();
        },
    },
}
</script>

<style></style>
