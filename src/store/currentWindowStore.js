import { createStore } from "@zaydek/retro/store";

export const windows = {
	LOADING: "loading",
	DESKTOP: "desktop",
};

export const currentWindow = createStore(windows.LOADING);

export const changeToDesktop = () => {
	currentWindow.set(windows.DESKTOP);
};

export const changeToLoading = () => {
	currentWindow.set(windows.LOADING);
};
