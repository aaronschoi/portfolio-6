import { createStore } from "@zaydek/retro/store";

const initialWindowStates = {
	linkedin: {
		minimized: false,
		open: false
	},
	github: {
		minimized: false,
		open: false
	},
	gitcrash: {
		minimized: false,
		open: false
	}
};

export const windowStates = createStore(initialWindowStates);

export const minimize = (winStr) => {
	windowStates.set(state => ({
		...state,
		[winStr] : {
			...state[winStr],
			minimized: true
		}
	}))
}

export const unminimize = (winStr) => {
	windowStates.set(state => ({
		...state,
		[winStr] : {
			...state[winStr],
			minimized: false
		}
	}))
}

export const open = (winStr) => {
	windowStates.set(state => ({
		...state,
		[winStr] : {
			...state[winStr],
			open: true
		}
	}))
}

export const close = (winStr) => {
	windowStates.set(state => ({
		...state,
		[winStr] : {
			...state[winStr],
			open: false
		}
	}))
}

export const reset = () => {
	windowStates.set(state => ({
		...state,
		linkedin: {
			minimized: false,
			open: false
		},
		github: {
			minimized: false,
			open: false
		},
		gitcrash: {
			minimized: false,
			open: false
		}
	}))
}