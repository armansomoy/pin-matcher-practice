 function getPin() {
     const pin = Math.round(Math.random() * 10000);
     const pinSize = pin + '';
     if (pinSize.length == 4) {
         return pin;
         console.log(pin);
     } else {
         return getPin();
     }
 }

 function generatePin() {
     const pin = getPin();
     document.getElementById('display-pin').value = pin;
 }

 document.getElementById("key-pad").addEventListener('click', function () {
     const pressResult = event.target.innerText;
     const inputFiled = document.getElementById('typed-numbers')
     if (isNaN(pressResult)) {
         if (pressResult == 'C') {
             inputFiled.value = '';
         }
     } else {
         const previousResult = inputFiled.value;
         const newResult = previousResult + pressResult;
         inputFiled.value = newResult;
     }

 })

 function verifyPin() {
     console.log('clicked');
     const pin = document.getElementById('display-pin').value;
     const typedNumbers = document.getElementById('typed-numbers').value;
     const successMessage = document.getElementById('notify-success');
     const failError = document.getElementById('notify-fail');

     if (pin == typedNumbers) {
         successMessage.style.display = 'block';
         failError.style.display = 'none';
     } else {
         failError.style.display = 'block';
         successMessage.style.display = 'none';
     }
 }