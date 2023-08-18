const createOptionListAlphabet = length => {
   const alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
   ];
   const createIndex = index => {
      const base = 26;
      let list = [];
      const remain = index % base;
      const int = parseInt(index / base);
      if (index >= base) {
         const newList = createIndex(int - 1);
         list = [...newList, remain];
      } else {
         list = [remain];
      }
      return list;
   };
   const options = [...Array(length)].map((_, index) => {
      const option = createIndex(index)
         .map(item => alphabet[item])
         .join('');
      return option;
   });
   return options;
};
// const options = createOptionListAlphabet(26 * 26);
// console.log(options);
export default createOptionListAlphabet;
