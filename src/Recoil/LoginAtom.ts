import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist({
    key: 'sessionStorage',
    storage: sessionStorage,
});

export const LoginState = atom<boolean>({
    key: 'LoginState',
    default: false,
    effects_UNSTABLE: [persistAtom],
});
