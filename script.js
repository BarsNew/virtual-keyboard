const vKeyboard = document.createElement('article');

vKeyboard.classList.add('vkeyboard');

document.body.append(vKeyboard);

const createKey = function (name, sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8) {
  
  if (arguments.length != 9) {
    if (name === 'space') {
      [sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8] = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    }
    else {
      [sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8] = [name, name, name, name, name, name, name, name];
    }
  }
  
  const block = document.createElement('p');

  //console.log(name);
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
  const digit1 = createKey('digit1', '1','!','1','!','1','!','1','!');
  const digit2 = createKey('digit2', '2','"','2','"','2','@','2','@');
  const digit3 = createKey('digit3', '3','№','3','№','3','#','3','#');
  const digit4 = createKey('digit4', '4','$','4','$','4',';','4',';');
  const digit5 = createKey('digit5', '5','%','5','%','5','%','5','%');
  const digit6 = createKey('digit6', '6','^','6','^','6',':','6',':');
  const digit7 = createKey('digit7', '7','&','7','&','7','?','7','?');
  const digit8 = createKey('digit8', '8','*','8','*','8','*','8','*');
  const digit9 = createKey('digit9', '9','(','9','(','9','(','9','(');
  const digit0 = createKey('digit0', '0','(','0',')','0',')','0',')');
  const minus = createKey('minus', '_','-','_','-','_','-','_','-');
  const equal = createKey('equal', '=','+','=','+','=','+','=','+');
  const backspace = createKey('backspace');
 
  vkeyboardRow1.append(backquote, digit1, digit2, digit3, digit4, digit5, digit6, digit7, digit8, digit9, digit0, minus, equal, backspace);
  
  const vkeyboardRow2 = document.createElement('div');

  vkeyboardRow2.classList.add('vkeyboard__row')

  const tab = createKey('tab');
  const keyQ = createKey('keyQ', 'q','Q','Q','q','й','Й','Й','й');
  const keyW = createKey('keyW', 'w','W','W','w','ц','Ц','Ц','ц');
  const keyE = createKey('keyE', 'e','E','E','e','у','У','У','у');
  const keyR = createKey('keyR', 'r','R','R','r','к','К','К','к');
  const keyT = createKey('keyT', 't','T','T','t','е','Е','Е','е');
  const keyY = createKey('keyY', 'y','Y','Y','y','н','Н','Н','н');
  const keyU = createKey('keyU', 'u','U','U','u','г','Г','Г','г');
  const keyI = createKey('keyI', 'i','I','I','i','ш','Ш','Ш','ш');
  const keyO = createKey('keyO', 'o','O','O','o','щ','Щ','Щ','щ');
  const keyP = createKey('keyP', 'p','P','P','p','з','З','З','з');
  const bracketLeft = createKey('bracketLeft', '[','{','[','{','х','Х','Х','х');
  const bracketRight = createKey('bracketRight', ']','}',']','}','ъ','Ъ','Ъ','ъ');
  const backslash = createKey('backslash', '\\','|','\\','|','\\','/','\\','/');
  const del = createKey('del');

  vkeyboardRow2.append(tab, keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP, bracketLeft, bracketRight, backslash, del);

  const vkeyboardRow3 = document.createElement('div');
  vkeyboardRow3.classList.add('vkeyboard__row')

  const capsLock = createKey('capsLock');
  const keyA = createKey('keyA', 'a','A','A','a','ф','Ф','Ф','ф');
  const keyS = createKey('keyS"', 's','S','S','s','ы','Ы','Ы','ы');
  const keyD = createKey('keyD', 'd','D','D','d','в','В','В','в');
  const keyF = createKey('keyF', 'f','F','F','f','а','А','А','а');
  const keyG = createKey('keyG', 'g','G','G','g','п','П','П','п');
  const keyH = createKey('keyH', 'h','H','H','h','р','Р','Р','р');
  const keyJ = createKey('keyJ', 'j','J','J','j','о','О','О','о');
  const keyK = createKey('keyK', 'k','K','K','k','л','Л','Л','л');
  const keyL = createKey('keyL', 'l','L','L','l','д','Д','Д','д');
  const semicolon = createKey('semicolon', ';',':',';',':','ж','Ж','Ж','ж');
  const quote = createKey('quote', "'",'"',"'",'"','э','Э','Э','э');
  const enter = createKey('enter');

  vkeyboardRow3.append(capsLock, keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, semicolon, quote, enter);
 
  const vkeyboardRow4 = document.createElement('div');
  vkeyboardRow4.classList.add('vkeyboard__row')

  const shift = createKey('shift');
  const keyZ = createKey('keyZ', 'z','Z','Z','z','я','Я','Я','я');
  const keyX= createKey('keyX', 'x','X','X','x','ч','Ч','Ч','ч');
  const keyC = createKey('keyC', 'c','C','C','c','с','С','С','с');
  const keyV = createKey('keyV', 'v','V','V','v','м','М','М','м');
  const keyB = createKey('keyB', 'b','B','B','b','и','И','И','и');
  const keyN = createKey('keyN', 'n','N','N','n','т','Т','Т','т');
  const keyM = createKey('keyM', 'm','M','M','m','ь','Ь','Ь','ь');
  const comma = createKey('сomma', ',','<',',','<','б','Б','Б','б');
  const period = createKey('period', '.','>','.','>','ю','Ю','Ю','ю');
  const slash = createKey('slash', '/','?','/','?','.',',','.',',');
  const arrowUp = createKey('▲');
  //shift = createKey('shift');

  vkeyboardRow4.append(shift, keyZ, keyX, keyC, keyV, keyB, keyN, keyM, comma, period, slash, arrowUp, shift);
  
  const vkeyboardRow5 = document.createElement('div');
  vkeyboardRow5.classList.add('vkeyboard__row')
  
  const ctrl = createKey('ctrl');
  const win = createKey('win');
  const alt = createKey('alt');
  const space = createKey('space');
  //alt = createKey('alt');
  const arrowLeft = createKey('◄');
  const arrowDown = createKey('▼');
  const arrowRight = createKey('►');
  //const ctrl = createKey('ctrl');

  vkeyboardRow5.append(ctrl, win, alt, space, alt, arrowLeft, arrowDown, arrowRight, ctrl);

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