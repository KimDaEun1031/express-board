const textarea = document.querySelector('textarea');
const autoResize = () => {

  textarea.style.height = '500px';
  let height = textarea.scrollHeight;
  textarea.style.height = `${height}px`
};

autoResize();

textarea.addEventListener('input', autoResize);
