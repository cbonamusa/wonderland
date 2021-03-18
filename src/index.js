import "./main.scss";

/* Functions */
let getElemId = (element) => document.getElementById(element);
let getElQS = (element) => document.querySelectorAll(element);
let getElName = (element) => document.getElementsByName(element);


let evListener = (target, event, func) =>  target.addEventListener(event, func); 
let displayNone = (target) => () => target.style.display = 'none';
let displayBlock = (target) => () => target.style.display = 'block';


/* ---- CLICK THE CHESS AND REVEAL THE WORD ---- */
let chess = getElQS(".chess-table td");
chess.forEach(td => evListener(td, 'click', displayNone(td)));



/* ---- DRINK ME SECTION - CHANGE CONTENT BOTTLE COLOR AND DISPLAY ---- */
let bottle = getElemId("clickToChangeColor");
let liquid = getElemId("liquidBottleColor");
let buttonBottleDrink = getElemId("drinkIt");
let buttonBottleFill = getElemId("fillIt");

let myColors = ["#FFBABA","#EFFFBA", "#C0BAFF","#fff","#BAE4FF","#D0BAFF","#f3f0f1","#262626"];
let indexSvg = 0;

let changeColor;
evListener(bottle, "click", changeColor = () => {
    liquid.style.fill = myColors[indexSvg];
    indexSvg++
    if (indexSvg >= myColors.length) { indexSvg = 0 }
});
let emptyBottle;
evListener(buttonBottleDrink, 'click', displayNone(liquid) );
evListener(buttonBottleFill, 'click', displayBlock(liquid) );



/*------------------------- SCROLL EFFECT  ------------------------ */
let hourHang = getElemId("hours");
let minuteHang = getElemId("minutes");
let chesireCat = getElemId("chesire");

evListener(window, 'scroll', function() {
  var scroll = window.scrollY;
  
  // Clock hangs - Time section
  hourHang.style.transformOrigin = '50% 93.376%';
  minuteHang.style.transformOrigin = '50% 90.46%';
  hourHang.style.transform = 'rotate(+' + scroll / 90 + 'rad)'
  minuteHang.style.transform = 'translate(-7px, 70px) rotate(+' + scroll / 400 + 'rad)';

  // Chesire cat - Mad section
  if (scroll >= chesireCat.offsetHeight + 4001 ) { chesireCat.classList.add("active") }
  else { chesireCat.classList.remove("active") }  
});



/* ------------------------- SUBMIT TEA TIME -------------------------- */
evListener(getElemId('formBtn'), 'click', function() {
  let showData = getElemId('teaReservation');
  let yourName = getElemId('name').value;
  let date = getElemId('date').value;
  let type = getElemId('teaType'); 
  let selectedType = type.options[type.selectedIndex].text;

  if (yourName && date && type.value ) {
    showData.innerHTML =  
    `<div class="completed">
      <h4>Your reservation:</h4>
      <p>Dear <strong> ${yourName} </strong>,</p>
      <p>We'll be glad to meet you on <strong> ${date}</strong></p>
      <p>You will have your selected choice of tea <strong>${selectedType}</strong> and some pastry with it.</p>
    </div>`
  } else {
    showData.innerHTML =  
    `<div class="uncompleted">
      <h4>Your reservation:</h4>
      <p>Please, <strong>complete the form</strong> to proceed with your reservation</p>
    </div>`
  }
});
