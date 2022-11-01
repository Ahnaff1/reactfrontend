const DB = {
  storeData: (key, value) => {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
    return true;
  },
  retrieveData: (key) => {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.log("json parse", error);
      return false;
    }
  },
  removeData: (key) => {
    localStorage.removeItem(key);
    return true;
  },
};

export default DB;
