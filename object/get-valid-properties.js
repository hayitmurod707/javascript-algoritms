export default object => {
   const keys = Object.keys(object);
   const properties = (Array.isArray(keys) ? keys : []).reduce((total, key) => {
      const value = object[key];
      if (value) {
         total[key] = value;
      }
      return total;
   }, {});
   return properties;
};
