import { atom, selector } from "recoil";

const notiState = atom({
  key: "notiState",
  default: 0,
});

const notiSelector = selector({
  key: "notiSelector",
  get: ({ get }) => {
    const noti = get(notiState);
    return noti;
  },
});

export { notiState, notiSelector };
