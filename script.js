const vKeyboard = document.createElement('article');

vKeyboard.classList.add('vkeyboard');

document.body.append(vKeyboard);

// Функции создания
const createKey = function (name, sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8) {
  
  if (arguments.length != 9) {
      [sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8] = [name, name, name, name, name, name, name, name];
  }
  
  const block = document.createElement('p');

  block.classList.add('vkeyboard__key', name);

  const spanEng = document.createElement('span');

  spanEng.classList.add('eng');

  const caseDownEng = document.createElement('span');

  caseDownEng.classList.add('caseDown');
  caseDownEng.innerText = sign1;

  const caseUpEng = document.createElement('span');

  caseUpEng.classList.add('caseUp', 'hidden');
  caseUpEng.innerText = sign2;

  const capsEng = document.createElement('span');

  capsEng.classList.add('caps', 'hidden');
  capsEng.innerText = sign3;

  const shiftCapsEng = document.createElement('span');

  shiftCapsEng.classList.add('shiftCaps', 'hidden');
  shiftCapsEng.innerText = sign4;

  spanEng.append(caseDownEng, caseUpEng, capsEng, shiftCapsEng);

  const spanRus = document.createElement('span');

  spanRus.classList.add('rus', 'hidden');

  const caseDownRus = document.createElement('span');

  caseDownRus.classList.add('caseDown', 'hidden');
  caseDownRus.innerText = sign5;

  const caseUpRus = document.createElement('span');

  caseUpRus.classList.add('caseUp', 'hidden');
  caseUpRus.innerText = sign6;

  const capsRus = document.createElement('span');

  capsRus.classList.add('caps', 'hidden');
  capsRus.innerText = sign7;
  
  const shiftCapsRus = document.createElement('span');

  shiftCapsRus.classList.add('shiftCaps', 'hidden');
  shiftCapsRus.innerText = sign8;

  spanRus.append(caseDownRus, caseUpRus, capsRus, shiftCapsRus);

  block.append(spanEng, spanRus);

  return block;
}

const createElement = () => {

  const title = document.createElement('p');

  title.innerText = 'RSS Виртуальная клавиатура';
  title.classList.add('vkeyboard__title');

  const textarea = document.createElement('textarea');

  textarea.classList.add('vkeyboard__textarea');

  const vkeyboardBody = document.createElement('div');

  vkeyboardBody.classList.add('vkeyboard__body');

  const vkeyboardRow1 = document.createElement('div');

  vkeyboardRow1.classList.add('vkeyboard__row');

  const backquote = createKey('Backquote', '`','~','`','~','ё','Ё','Ё','ё');
  const digit1 = createKey('Digit1', '1','!','1','!','1','!','1','!');
  const digit2 = createKey('Digit2', '2','"','2','"','2','@','2','@');
  const digit3 = createKey('Digit3', '3','№','3','№','3','#','3','#');
  const digit4 = createKey('Digit4', '4','$','4','$','4',';','4',';');
  const digit5 = createKey('Digit5', '5','%','5','%','5','%','5','%');
  const digit6 = createKey('Digit6', '6','^','6','^','6',':','6',':');
  const digit7 = createKey('Digit7', '7','&','7','&','7','?','7','?');
  const digit8 = createKey('Digit8', '8','*','8','*','8','*','8','*');
  const digit9 = createKey('Digit9', '9','(','9','(','9','(','9','(');
  const digit0 = createKey('Digit0', '0','(','0',')','0',')','0',')');
  const minus = createKey('Minus', '_','-','_','-','_','-','_','-');
  const equal = createKey('Equal', '=','+','=','+','=','+','=','+');
  const backspace = createKey('Backspace');
 
  vkeyboardRow1.append(backquote, digit1, digit2, digit3, digit4, digit5, digit6, digit7, digit8, digit9, digit0, minus, equal, backspace);
  
  const vkeyboardRow2 = document.createElement('div');

  vkeyboardRow2.classList.add('vkeyboard__row')

  const tab = createKey('Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab' );
  const keyQ = createKey('KeyQ', 'q','Q','Q','q','й','Й','Й','й');
  const keyW = createKey('KeyW', 'w','W','W','w','ц','Ц','Ц','ц');
  const keyE = createKey('KeyE', 'e','E','E','e','у','У','У','у');
  const keyR = createKey('KeyR', 'r','R','R','r','к','К','К','к');
  const keyT = createKey('KeyT', 't','T','T','t','е','Е','Е','е');
  const keyY = createKey('KeyY', 'y','Y','Y','y','н','Н','Н','н');
  const keyU = createKey('KeyU', 'u','U','U','u','г','Г','Г','г');
  const keyI = createKey('KeyI', 'i','I','I','i','ш','Ш','Ш','ш');
  const keyO = createKey('KeyO', 'o','O','O','o','щ','Щ','Щ','щ');
  const keyP = createKey('KeyP', 'p','P','P','p','з','З','З','з');
  const bracketLeft = createKey('BracketLeft', '[','{','[','{','х','Х','Х','х');
  const bracketRight = createKey('VracketRight', ']','}',']','}','ъ','Ъ','Ъ','ъ');
  const backslash = createKey('Vackslash', '\\','|','\\','|','\\','/','\\','/');
  const del = createKey('Delete');

  vkeyboardRow2.append(tab, keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP, bracketLeft, bracketRight, backslash, del);

  const vkeyboardRow3 = document.createElement('div');
  vkeyboardRow3.classList.add('vkeyboard__row')

  const capsLock = createKey('CapsLock');
  const keyA = createKey('KeyA', 'a','A','A','a','ф','Ф','Ф','ф');
  const keyS = createKey('KeyS', 's','S','S','s','ы','Ы','Ы','ы');
  const keyD = createKey('KeyD', 'd','D','D','d','в','В','В','в');
  const keyF = createKey('KeyF', 'f','F','F','f','а','А','А','а');
  const keyG = createKey('KeyG', 'g','G','G','g','п','П','П','п');
  const keyH = createKey('KeyH', 'h','H','H','h','р','Р','Р','р');
  const keyJ = createKey('KeyJ', 'j','J','J','j','о','О','О','о');
  const keyK = createKey('KeyK', 'k','K','K','k','л','Л','Л','л');
  const keyL = createKey('KeyL', 'l','L','L','l','д','Д','Д','д');
  const semicolon = createKey('Semicolon', ';',':',';',':','ж','Ж','Ж','ж');
  const quote = createKey('Quote', "'",'"',"'",'"','э','Э','Э','э');
  const enter = createKey('Enter');

  vkeyboardRow3.append(capsLock, keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, semicolon, quote, enter);
 
  const vkeyboardRow4 = document.createElement('div');
  vkeyboardRow4.classList.add('vkeyboard__row')

  const shiftLeft = createKey('shiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift');
  const keyZ = createKey('KeyZ', 'z','Z','Z','z','я','Я','Я','я');
  const keyX= createKey('KeyX', 'x','X','X','x','ч','Ч','Ч','ч');
  const keyC = createKey('KeyC', 'c','C','C','c','с','С','С','с');
  const keyV = createKey('KeyV', 'v','V','V','v','м','М','М','м');
  const keyB = createKey('KeyB', 'b','B','B','b','и','И','И','и');
  const keyN = createKey('KeyN', 'n','N','N','n','т','Т','Т','т');
  const keyM = createKey('KeyM', 'm','M','M','m','ь','Ь','Ь','ь');
  const comma = createKey('Comma', ',', '<', ',','<','б','Б','Б','б');
  const period = createKey('Period', '.','>','.','>','ю','Ю','Ю','ю');
  const slash = createKey('Slash', '/','?','/','?','.',',','.',',');
  const arrowUp = createKey('ArrowUp', '▲', '▲', '▲', '▲', '▲', '▲', '▲', '▲');
  const shiftRight = createKey('ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift');

  vkeyboardRow4.append(shiftLeft, keyZ, keyX, keyC, keyV, keyB, keyN, keyM, comma, period, slash, arrowUp, shiftRight);
  
  const vkeyboardRow5 = document.createElement('div');
  vkeyboardRow5.classList.add('vkeyboard__row')
  
  const controlLeft = createKey('ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl');
  const metaLeft = createKey('MetaLeft', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win');
  const altLeft = createKey('AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt');
  const space = createKey('Space', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const altRight = createKey('AltRight', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt' );
  const arrowLeft = createKey('ArrowLeft', '◄', '◄', '◄', '◄', '◄', '◄', '◄', '◄' );
  const arrowDown = createKey('ArrowDown', '▼', '▼', '▼', '▼', '▼', '▼', '▼', '▼');
  const arrowRight = createKey('ArrowRight', '►', '►', '►', '►', '►', '►', '►', '►');
  const controlRight = createKey('ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl');

  vkeyboardRow5.append(controlLeft, metaLeft, altLeft, space, altRight, arrowLeft, arrowDown, arrowRight, controlRight);

  vkeyboardBody.append(vkeyboardRow1);
  vkeyboardBody.append(vkeyboardRow2);
  vkeyboardBody.append(vkeyboardRow3);
  vkeyboardBody.append(vkeyboardRow4);
  vkeyboardBody.append(vkeyboardRow5);

  const description = document.createElement('p');
  description.innerText = 'Клавиатура создана в операционной системе Windows';
  description.classList.add('vkeyboard__description');

  const language = document.createElement('p');
  language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
  language.classList.add('vkeyboard__language');

  vKeyboard.append(title); 
  vKeyboard.append(textarea); 
  vKeyboard.append(vkeyboardBody);
  vKeyboard.append(description); 
  vKeyboard.append(language); 
}

createElement();


let lang = localStorage.getItem('language');
let activ = false;
let capsLockActive = false;
let shiftActive = false;

// Функции нажатий
const textarea = document.querySelector('.vkeyboard__textarea');
let text = '';

textarea.addEventListener('input', (event) => {
  text = event.target.value;
});

document.onkeypress = function (event) {
  event.preventDefault();
}

function delClassActiv(span) {
  span.classList.add('vkeyboard__key_activ');
  setTimeout(() => span.classList.remove('vkeyboard__key_activ'), 500); 
}

document.querySelector('.vkeyboard__body').onclick = function (event) {
  if (event.target.classList[0] === 'vkeyboard__key' || event.target.closest('.vkeyboard__key')) {

    let symv = '';

    if (event.target.classList[1]) {
      symv = event.target.classList[1];
    }

    if (event.target.closest('.vkeyboard__key')) {
      symv = event.target.closest('.vkeyboard__key').classList[1];
    }

    const ev = new KeyboardEvent('keydown', { code: symv });

    document.dispatchEvent(ev);
  }
}

document.onkeydown = function (event) {

  textarea.focus();

  let letter;

  letter = event.code;
  
  let span = document.querySelector(`.${letter}`);

  if (!span) {
    return false;
  } 

  if (letter !== 'CapsLock') delClassActiv(span);

  if (letter  === 'Backspace') { 
    event.preventDefault();

    let position = textarea.selectionStart; 
    const selectionStart =  textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;

    if (selectionStart === selectionEnd) {

      text = text.slice(0, selectionStart - 1) + text.slice(selectionStart);

      textarea.value = text;
      textarea.selectionStart = textarea.selectionEnd = position - 1;
    }
    
    return false;
  } 
  else if (letter  === 'Space') { 
    let position = textarea.selectionStart; 
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    
    if (selectionStart === selectionEnd) {

      text = text.slice(0, selectionStart) + ' ' + text.slice(selectionStart);

      textarea.value = text;
      textarea.selectionStart = textarea.selectionEnd = position + 1;
    }
    
    return false
  }
  else if (letter  === 'Tab') { 
    event.preventDefault();

    let position = textarea.selectionStart; 
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    
    if (selectionStart === selectionEnd) {

      text = text.slice(0, selectionStart) + '    ' + text.slice(selectionStart);

      textarea.value = text;
      textarea.selectionStart = textarea.selectionEnd = position + 4;
    }
    
    return false
  }
  else if (letter  === 'Enter') { 
    let position = textarea.selectionStart; 
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    
    if (selectionStart === selectionEnd) {

      text = text.slice(0, selectionStart) + '\n' + text.slice(selectionStart);

      textarea.value = text;
      textarea.selectionStart = textarea.selectionEnd = position + 1;
    }
    
    return false
  }
  else if (letter  === 'Delete') { 
    event.preventDefault();

    let position = textarea.selectionStart; 
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    
    if (selectionStart === selectionEnd) {

      text = text.slice(0, selectionStart) + text.slice(selectionStart + 1);

      textarea.value = text;
      textarea.selectionStart = textarea.selectionEnd = position;
    }
    
    return false
  }
  else if (letter  === 'ArrowLeft') {
    let position = textarea.selectionStart;
    textarea.selectionStart = textarea.selectionEnd = position - 1;
    
    return false;
  }
  else if (letter  === 'ArrowRight') {
    let position = textarea.selectionStart;
    textarea.selectionStart = textarea.selectionEnd = position + 1;
    
    return false;
  }
  else if (letter  === 'ArrowDown') {
    textarea.selectionStart = textarea.selectionEnd = text.length;  

    return false;
  }
  else if (letter  === 'ArrowUp') {
    textarea.selectionStart = textarea.selectionEnd = 0;   
    return false;
  }
  else if (letter  === 'MetaLeft' || letter  === 'ControlLeft' || letter  === 'AltLeft') {
    return false;
  }
  else if (letter  === 'CapsLock') {
    span.classList.toggle('vkeyboard__key_activ');

    return false;
  }
  else {
    let position = textarea.selectionStart; 
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;

    letter = span.querySelector('span:not(.hidden)');  
    text = text.slice(0, selectionStart) + letter.innerText + text.slice(selectionStart);
    textarea.value = text; 
    textarea.selectionStart = textarea.selectionEnd = position + 1;     
  }   
}


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey) {
    if (lang === 'rus') {
      vKeyboard.querySelectorAll('.rus').forEach(item => {
        item.classList.add('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.add('hidden');
      });
      vKeyboard.querySelectorAll('.eng').forEach(item => {
        item.classList.remove('hidden');
        if (activ === true) {
          item.querySelector('.caseDown').classList.add('hidden');
          item.querySelector('.caps').classList.remove('hidden');
        }
        else {
          item.querySelector('.caseDown').classList.remove('hidden');
          item.querySelector('.caps').classList.add('hidden');
        }
      });
      lang = 'eng';
      localStorage.setItem('language', 'eng');
      console.log(lang);
    }
    else if (lang === 'eng' || lang === null) {
      vKeyboard.querySelectorAll('.eng').forEach(item => {
        item.classList.add('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.add('hidden');
      });
      vKeyboard.querySelectorAll('.rus').forEach(item => {
        item.classList.remove('hidden');
        if (activ === true) {
          item.querySelector('.caseDown').classList.add('hidden');
          item.querySelector('.caps').classList.remove('hidden');
        }
        else {
          item.querySelector('.caseDown').classList.remove('hidden');
          item.querySelector('.caps').classList.add('hidden');
        }
      });
      lang = 'rus';
      localStorage.setItem('language', 'rus');
    } 
  }
});


document.addEventListener('keydown', function(event) {
  
  if  (event.code === 'CapsLock') {
    if (lang === 'eng' && activ === false || lang === null && activ === false) {
      vKeyboard.querySelectorAll('.eng').forEach(item => {
        item.classList.remove('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.remove('hidden');      
      });
      vKeyboard.querySelectorAll('.rus').forEach(item => {
        item.classList.add('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.add('hidden');
      });
      activ = true;
    }
    else if (lang === 'eng' && activ === true || lang === null && activ === true) {
      vKeyboard.querySelectorAll('.eng').forEach(item => {
        item.classList.remove('hidden');
        item.querySelector('.caseDown').classList.remove('hidden');
        item.querySelector('.caps').classList.add('hidden');      
      });
      vKeyboard.querySelectorAll('.rus').forEach(item => {
        item.classList.add('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.add('hidden');
      });
      activ = false;
    }
    else if (lang === 'rus' && activ === false) {
      vKeyboard.querySelectorAll('.rus').forEach(item => {
        item.classList.remove('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.remove('hidden');      
      });
      vKeyboard.querySelectorAll('.eng').forEach(item => {
        item.classList.add('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.add('hidden');
      });
      activ = true;
    }
    else if (lang === 'rus' && activ === true) {
      vKeyboard.querySelectorAll('.rus').forEach(item => {
        item.classList.remove('hidden');
        item.querySelector('.caseDown').classList.remove('hidden');
        item.querySelector('.caps').classList.add('hidden');      
      });
      vKeyboard.querySelectorAll('.eng').forEach(item => {
        item.classList.add('hidden');
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.add('hidden');
      });
      activ = false;
    }
  }
});


window.addEventListener('load', function() {
  let lang = localStorage.getItem('language');

  if (lang === 'rus') {
    vKeyboard.querySelectorAll('.eng').forEach(item => {
      item.classList.add('hidden');
      item.querySelector('.caseDown').classList.add('hidden');
      item.querySelector('.caps').classList.add('hidden');
    });
    vKeyboard.querySelectorAll('.rus').forEach(item => {
      item.classList.remove('hidden');
      if (activ === true) {
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.remove('hidden');
      }
      else {
        item.querySelector('.caseDown').classList.remove('hidden');
        item.querySelector('.caps').classList.add('hidden');
      }
    });
  } 
  else if (lang === null) lang === 'eng';
  else {
    vKeyboard.querySelectorAll('.rus').forEach(item => {
      item.classList.add('hidden');
      item.querySelector('.caseDown').classList.add('hidden');
      item.querySelector('.caps').classList.add('hidden');
    });
    vKeyboard.querySelectorAll('.eng').forEach(item => {
      item.classList.remove('hidden');
      if (activ === true) {
        item.querySelector('.caseDown').classList.add('hidden');
        item.querySelector('.caps').classList.remove('hidden');
      }
      else {
        item.querySelector('.caseDown').classList.remove('hidden');
        item.querySelector('.caps').classList.add('hidden');
      }
    });
  }
}); 


document.addEventListener('keydown', function(event) {
  if (event.getModifierState('Shift')) {
    vKeyboard.querySelector('.shiftLeft').classList.add('vkeyboard__key_activ');
    if (!shiftActive) {
      const ev = new KeyboardEvent('keydown', { code: 'CapsLock' });

      document.dispatchEvent(ev);
      shiftActive = true;
      vKeyboard.querySelector('.CapsLock').classList.toggle('vkeyboard__key_activ');
    }
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Shift') {
    vKeyboard.querySelector('.shiftLeft').classList.remove('vkeyboard__key_activ');
    if (shiftActive) {
      const ev = new KeyboardEvent('keydown', { code: 'CapsLock' });

      document.dispatchEvent(ev);
      shiftActive = false;
      vKeyboard.querySelector('.CapsLock').classList.toggle('vkeyboard__key_activ');
    }
  }
});