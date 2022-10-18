import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const checkLocalstorage = key => {
  return !!localStorage.getItem(key);
};

const fillTheFieldsFromLocalStorage = (el, localStorageKey) => {
  if (!checkLocalstorage(localStorageKey)) return;

  const objFromStorage = JSON.parse(localStorage.getItem(localStorageKey));

  for (const key in objFromStorage) {
    if (Object.hasOwnProperty.call(objFromStorage, key)) {
      el.elements[key].value = objFromStorage[key];
    }
  }
};

const onInput = (evt, objFromStorage = {}) => {
  const key = 'feedback-form-state';

  if (checkLocalstorage(key))
    objFromStorage = JSON.parse(localStorage.getItem(key));

  objFromStorage[evt.target.name] = evt.target.value;
  localStorage.setItem(key, JSON.stringify(objFromStorage));
};

const onSubmit = evt => {
  const key = 'feedback-form-state';

  const resultToConsole = checkLocalstorage(key)
    ? JSON.parse(localStorage.getItem(key))
    : { email: '', message: '' }; //выводи объект с полями email, message и текущими их значениями в консоль.

  console.log(resultToConsole);

  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(key);
};

fillTheFieldsFromLocalStorage(formEl, 'feedback-form-state');
formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);
