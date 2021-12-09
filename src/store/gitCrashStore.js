import { createStore } from "@zaydek/retro/store";

const initialFileStates = {
	open: false,
	pcb: {
		1: {
			path: "c/",
			command: "cd extraPretentiousPortfolios/portfolio-6/frontend",
			branch: "",
		},
		2: {
			path: "c/extraPretentiousPortfolios/portfolio-6/frontend",
			command: "code .",
			branch: "(main)",
		},
	},
    letter: 0,
    currentLine: 0
};

export const gitCrashStore = createStore(initialFileStates);

export const incLetter = () => {
    gitCrashStore.set(state => ({
        ...state,
        letter: state.letter + 1
    }))
}

export const decLetter = () => {
    gitCrashStore.set(state => ({
        ...state,
        letter: state.letter - 1
    }))
}

export const resetLetter = () => {
    gitCrashStore.set(state => ({
        ...state,
        letter: 0
    }))
}

export const incCurrentLine = () => {
    gitCrashStore.set(state => ({
        ...state,
        currentLine: state.currentLine + 1
    }))
}

export const decCurrentLine = () => {
    gitCrashStore.set(state => ({
        ...state,
        currentLine: state.currentLine - 1
    }))
}

export const resetCurrentLine = () => {
    gitCrashStore.set(state => ({
        ...state,
        currentLine: 0
    }))
}