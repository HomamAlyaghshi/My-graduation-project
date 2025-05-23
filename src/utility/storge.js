const defaultGetStorage = () => localStorage;

export const dataStorage = (key, getStorage = defaultGetStorage) => {
  const storage = getStorage();
  return {
    set: (data) => {
      return (
        typeof window !== "undefined" &&
        storage.setItem(key, JSON.stringify(data))
      );
    },
    get: () => {
      if (typeof window === "undefined") return undefined;
      const json = storage.getItem(key);

      if (!json) return undefined;

      try {
        return JSON.parse(json);
      } catch (error) {
        return json;
      }
    },
    remove: () => {
      return typeof window !== "undefined" && storage.removeItem(key);
    },
  };
};

export const dataSessionStorage = (key) =>
  dataStorage(key, () => sessionStorage);
