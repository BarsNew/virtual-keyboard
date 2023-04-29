
const vKeyboard = document.createElement('article');

vKeyboard.classList.add('vkeyboard');

document.body.append(vKeyboard);

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

  const backquote = createKey('backquote', '`','~','`','~','ё','Ё','Ё','ё');
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

  const tab = createKey('Tab');
  const keyQ = createKey('KeyQ', 'q','Q','Q','q','й','Й','Й','й');
  const keyW = createKey('KeyW', 'w','W','W','w','ц','Ц','Ц','ц');
  const keyE = createKey('KeyE', 'e','E','E','e','у','У','У','у');
  const keyR = createKey('keyR', 'r','R','R','r','к','К','К','к');
  const keyT = createKey('keyT', 't','T','T','t','е','Е','Е','е');
  const keyY = createKey('keyY', 'y','Y','Y','y','н','Н','Н','н');
  const keyU = createKey('keyU', 'u','U','U','u','г','Г','Г','г');
  const keyI = createKey('keyI', 'i','I','I','i','ш','Ш','Ш','ш');
  const keyO = createKey('keyO', 'o','O','O','o','щ','Щ','Щ','щ');
  const keyP = createKey('keyP', 'p','P','P','p','з','З','З','з');
  const bracketLeft = createKey('BracketLeft', '[','{','[','{','х','Х','Х','х');
  const bracketRight = createKey('BracketRight', ']','}',']','}','ъ','Ъ','Ъ','ъ');
  const backslash = createKey('Backslash', '\\','|','\\','|','\\','/','\\','/');
  const del = createKey('Del');

  vkeyboardRow2.append(tab, keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP, bracketLeft, bracketRight, backslash, del);

  const vkeyboardRow3 = document.createElement('div');
  vkeyboardRow3.classList.add('vkeyboard__row')

  //const  key= createKey('', '','','','','','','','');
  
  const vkeyboardRow4 = document.createElement('div');
  vkeyboardRow4.classList.add('vkeyboard__row')

  //const  key= createKey('', '','','','','','','','');
    
  const vkeyboardRow5 = document.createElement('div');
  vkeyboardRow5.classList.add('vkeyboard__row')

  //const  key= createKey('', '','','','','','','','');
  









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