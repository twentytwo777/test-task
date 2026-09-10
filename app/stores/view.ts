export type ViewModes = 'row' | 'block';

export const useViewStore = defineStore('view', () => {
    const mode = ref<ViewModes>('row');
    const setMode = (newMode: ViewModes): void => {
        mode.value = newMode;
    };

    return { mode, setMode };
}, {
    persist: true
});