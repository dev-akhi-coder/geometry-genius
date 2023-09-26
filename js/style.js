
// This function get the value of input field
function getInputFieldValueById (inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = inputField.value;
  inputField.value ="";
  return inputFieldValue;
 
}
// This function set the value of area in area calculation field
function setAreaInAreaField(areaId , areaValue){
  const areaElement = document.getElementById(areaId);
  return areaElement.innerText = areaValue;
}
// function for Triangle area calculation
document.getElementById('triangle-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('triangle-b');
    const getValueTwo = getInputFieldValueById('triangle-h');
    if(getValueOne < 0 || getValueTwo < 0 || getValueOne === '' || getValueTwo === '' || isNaN(getValueOne) || isNaN(getValueTwo)){
        alert("Please give me two positive number!!");
        return;
    }
    const areaOfTriangle = 0.5 * getValueOne * getValueTwo;
    const areaTriangle = areaOfTriangle.toFixed(2);
 const output =  setAreaInAreaField('areaId', areaTriangle);
 return output;
   
});

// Function for rectangle area calculation
document.getElementById('rectangle-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('rectangle-w');
    const getValueTwo = getInputFieldValueById('rectangle-l');
    if(getValueOne < 0 || getValueTwo < 0 || getValueOne === '' || getValueTwo === '' || isNaN(getValueOne) || isNaN(getValueTwo)){
        alert("Please give me two positive number!!");
        return;
    }
    const areaOfRectangle = getValueOne * getValueTwo;
    const areaRectangle = areaOfRectangle.toFixed(2);
  const output =  setAreaInAreaField('areaId', areaRectangle);
  return output;
});
// Function for parallelogram area calculation
document.getElementById('parallelogram-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('parallelogram-b');
    const getValueTwo = getInputFieldValueById('parallelogram-h');
    const areaOfParallelogram = getValueOne * getValueTwo;
    const areaParallelogram = areaOfParallelogram.toFixed(2);
    setAreaInAreaField('area-output1', areaParallelogram);
});
// Function for rhombus area calculation
document.getElementById('rhombus-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('rhombus-d1');
    const getValueTwo = getInputFieldValueById('rhombus-d2');
    const areaOfRhombus = 0.5 * getValueOne * getValueTwo;
    const areaRhombus = areaOfRhombus.toFixed(2);
    setAreaInAreaField('area-output4', areaRhombus);
});
// Function for pentagon area calculation
document.getElementById('pentagon-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('pentagon-p');
    const getValueTwo = getInputFieldValueById('pentagon-b');
    const areaOfPentagon = 0.5 * getValueOne * getValueTwo;
    const areaPentagon = areaOfPentagon.toFixed(2);
    setAreaInAreaField('area-output5', areaPentagon);
});
// Function for ellipse area calculation
document.getElementById('ellipse-calc').addEventListener('click', function () {
    const getValueOne = getInputFieldValueById('ellipse-b');
    const getValueTwo = getInputFieldValueById('ellipse-h');
    const areaOfEllipse = 3.1416 * getValueOne * getValueTwo;
    const areaEllipse = areaOfEllipse.toFixed(2);
    setAreaInAreaField('area-output6', areaEllipse);
});

const areaCalculate = [];

function addCard(cart){
  const geometryName = cart.parentNode.children[1].innerText;
  areaCalculate.push(geometryName);
  const triangleList = document.getElementById('geometry_list');
  const areaOutput = document.getElementById('area-output1').innerText;
  const li = document.createElement('li');
  li.innerHTML = `
  ${geometryName} ${areaOutput}
  `;
  triangleList.appendChild(li);
}


// This function is used for random color changed
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 
// Here are the DOM of Random color change mouseover!!!!
document.getElementById('card1').addEventListener("mouseover", function(){
    document.getElementById('card1').style.backgroundColor = randomColor();
  });
  document.getElementById('card1').addEventListener('mouseleave',function(){
    document.getElementById('card1').style.backgroundColor = "white";
  })
  document.getElementById('card2').addEventListener("mouseover", function(){
    document.getElementById('card2').style.backgroundColor = randomColor();
  });
  document.getElementById('card2').addEventListener('mouseleave',function(){
    document.getElementById('card2').style.backgroundColor = "white";
  })
  document.getElementById('card3').addEventListener("mouseover", function(){
    document.getElementById('card3').style.backgroundColor = randomColor();
  });
  document.getElementById('card3').addEventListener('mouseleave',function(){
    document.getElementById('card3').style.backgroundColor = "white";
  })
  document.getElementById('card4').addEventListener("mouseover", function(){
    document.getElementById('card4').style.backgroundColor = randomColor();
  });
  document.getElementById('card4').addEventListener('mouseleave',function(){
    document.getElementById('card4').style.backgroundColor = "white";
  })
  document.getElementById('card5').addEventListener("mouseover", function(){
    document.getElementById('card5').style.backgroundColor = randomColor();
  });
  document.getElementById('card5').addEventListener('mouseleave',function(){
    document.getElementById('card5').style.backgroundColor = "white";
  })
  document.getElementById('card6').addEventListener("mouseover", function(){
    document.getElementById('card6').style.backgroundColor = randomColor();
  });
  document.getElementById('card6').addEventListener('mouseleave',function(){
    document.getElementById('card6').style.backgroundColor = "white";
  })
  