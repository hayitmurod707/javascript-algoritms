export default html => {
   const div = document.createElement('div');
   div.innerHTML = html;
   const text = div.textContent || div.innerText || '';
   return text;
};
