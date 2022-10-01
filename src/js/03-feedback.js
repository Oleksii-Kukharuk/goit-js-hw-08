import throttle from 'lodash.throttle';
import { save } from "./storage";
import { load } from "./storage";
import { remove } from "./storage";

const inputRef = document.querySelector('.feedback-form');
const LOCAL_DATA_STORAGE = 'feedback-form-state';



initPage();

const onInputSave = event => {
  const { name, value } = event.target;

    let saveDate = load(LOCAL_DATA_STORAGE);
    saveDate = saveDate ? saveDate : {};
    saveDate[name] = value;

    save(LOCAL_DATA_STORAGE, saveDate);

};

const throttledOnInputSave = throttle(onInputSave, 1000);
inputRef.addEventListener('input', throttledOnInputSave);

function initPage() {
  const saveDate = load(LOCAL_DATA_STORAGE);
  if (!saveDate) {
    return;
  }
  Object.entries(saveDate).forEach(([name, value]) => {
    inputRef.elements[name].value = value;
  });


const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();

  remove(LOCAL_DATA_STORAGE);
};
inputRef.addEventListener('submit', handleSubmit);
