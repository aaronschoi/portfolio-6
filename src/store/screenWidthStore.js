import { createStore } from "@zaydek/retro/store";

export const screenWidth = createStore(window.innerWidth);

export const setScreenWidth = () => {
    screenWidth.set(window.innerWidth)
}