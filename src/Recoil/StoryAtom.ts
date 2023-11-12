import { atom } from "recoil";

export const StoryAtom = atom<boolean>({
    key: 'StoryAtom',
    default: false,
})