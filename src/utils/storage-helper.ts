export const getLocalStorageValue = (key: string) => localStorage.getItem(key);
export const setLocalStorageValue = (key: string, value: any) => localStorage.setItem(key, value);

export const getSessionStorageValue = (key: string) => sessionStorage.getItem(key);
export const setSessionStorageValue = (key: string, value: any) =>
  sessionStorage.setItem(key, value);
