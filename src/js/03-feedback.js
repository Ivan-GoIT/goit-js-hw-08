import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const checkLocalstorage = key => {
  return !!localStorage.getItem(key);
};

const onClick = () => {
  console.log(Object.values(localStorage.getItem('feedback-form-state')));
};

const onKeyDown = evt => {
  const key = 'feedback-form-state';

  const objFromStorage = checkLocalstorage(key)
    ? { ...localStorage.getItem(key) }
    : {};

console.log({ ...objFromStorage, [`${evt.target.name}`]: evt.target.value });
    // localStorage.setItem(key, {...localStorage.getItem(key), [`${evt.target.name}`] : evt.target.value});
  // objFromStorage[evt.target.name] = evt.target.value;+
};

formEl.addEventListener('input', onKeyDown);
formEl.addEventListener('click', onClick);
