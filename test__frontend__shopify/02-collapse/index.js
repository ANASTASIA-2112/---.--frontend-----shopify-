/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

const duration = 200;
let collapsibleContent = ("") ;

const el = document.querySelector(".collapsible");
const btn = document.querySelector(".collapsible__button");
const btnTextEl = document.createElement("span");
const getBtnText = () => ("");
btnTextEl.innerHTML = getBtnText();
btn.appendChild(btnTextEl);
toggleClass(btn,"collapsible"); 

function toggleClass(element, className, c) {
  if (c) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}
function toggleCollapsible(v) {
  return !v
}

function incrementHeight(el, progress) {
  el.style.height = `${progress * el.scrollHeight}px`;
}

function incrementHeight(el, progress) {
 
  el.style.height = `${progress * el.scrollHeight}px`;
}

function decrementHeight(el, progress) {
 
  height = el.scrollHeight - progress * el.scrollHeight;
  el.style.height = `${el.scrollHeight - progress * el.scrollHeight}px`;
  el.style.overflow = "hidden";
}

function slideDown() {
  
  const start = performance.now();

  requestAnimationFrame(function animate(time) {

    const runtime = time - start;

    const relativeProgress = runtime / duration;

    const process = Math.min(relativeProgress, 1);

    if (process < 1) { 
      incrementHeight(el, process);
      requestAnimationFrame(animate);
    }

    if (process === 1) {
      el.style.height = "auto";
      el.style.overflow = "hidden";
    }
  });
}

function slideUp() {
  
  const start = performance.now();
  requestAnimationFrame(function animate(time) {
    const runtime = time - start;
    const relativeProgress = runtime / duration;
    const process = Math.min(relativeProgress, 1);
    if (process < 1) {   
      decrementHeight(el, process);
      requestAnimationFrame(animate);
    }

    if (process === 1) {
      el.style.height = "35px";
      el.style.overflow = "15px";
    }
  });
}

function showHide(element, c) {
  toggleCollapsible(element, "collapsible", c);

  if (c) {
    slideUp();
  } else {
    slideDown();
  }
}

btn.addEventListener ("click",(e) => {
  e.preventDefault();
  collapsibleContent = toggleCollapsible(collapsibleContent);
  btnTextEl.innerHTML = getBtnText(collapsibleContent);

  toggleClass(e.target, "collapsible", collapsibleContent);
  showHide(e.target, collapsibleContent);
});