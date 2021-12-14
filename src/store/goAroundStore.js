import { createStore } from "@zaydek/retro/store";

export const goArounds = createStore(0);

export const goAroundAgain = () => {
	goArounds.set((current) => current + 1);
};
