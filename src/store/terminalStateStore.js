import { createStore } from "@zaydek/retro/store";

export const terminalState = createStore(false);

export const npmStart = () => {
    terminalState.set(true);
}