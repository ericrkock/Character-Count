// Characters count

// Run on initiation
   clearBoxes();
   screenRes();
// -----------------------

// Clear boxes on initiation and onClick
function clearBoxes() {
   document.getElementById("box1").value = "";
   document.getElementById("box2").value = "";
   document.getElementById("charNum1").innerHTML = "0 / 20";
   document.getElementById("charNum2").innerHTML = "0 / 20";
   document.getElementById("box3").value = "";
   document.getElementById("wordNum").innerHTML = "No words yet!";
}

// Count characters box 1
function countChars1(obj) {
   const maxLength1 = 20;
   const boxLength1 = obj.value.length;
   const charRemain1 = maxLength1 - boxLength1;
      if (boxLength1 < 21) {
         document.getElementById("charNum1").innerHTML = '<span style="color: var(--light);">' + boxLength1 + " / " + charRemain1 + " ... GOOD" + '</span>';
      } else {
         document.getElementById("charNum1").innerHTML = '<span style="color: var(--wrong);">' + -charRemain1 + " # TOO LONG" + '</span>';
      }
}

// Count characters box 2
function countChars2(obj) {
   const maxLength2 = 20;
   const boxLength2 = obj.value.length;
   const charRemain2 = maxLength2 - boxLength2;
      if (boxLength2 < 21) {
         document.getElementById("charNum2").innerHTML = '<span style="color: var(--light);">' + boxLength2 + " / " + charRemain2 + " ... GOOD" + '</span>';
      } else {
         document.getElementById("charNum2").innerHTML = '<span style="color: var(--wrong);">' + -charRemain2 + " # TOO LONG" + '</span>';
      }
}

// Count words
function countWords(obj) {
   var maximum = document.getElementById("max-words");
   var boxLength3 = obj.value;
   boxLength3 = boxLength3.replace(/(^\s*)|(\s*$)/gi,"");
   boxLength3 = boxLength3.replace(/[ ]{2,}/gi," ");
   boxLength3 = boxLength3.replace(/\n /, "\n");

   document.getElementById("wordNum").innerHTML = boxLength3.split(" ").length + " words";
   //if (maximum == 0) {
   //   document.getElementById("wordNum").innerHTML = boxLength3.split(" ").length + " words";
   //} else {
   //   document.getElementById("wordNum").innerHTML = maximum;
  // }
}

// Clear Word Box
function clearWordbox () {
   document.getElementById("box3").value = "";
   document.getElementById("wordNum").innerHTML = "No words yet!";
}

// Screen Width & Height
function screenRes() {
   var w = window.innerWidth
   || document.documentElement.clientWidth
   || document.body.clientWidth;

   var h = window.innerHeight
   || document.documentElement.clientHeight
   || document.body.clientHeight;

   var x = document.getElementById("screen-res");
   x.innerHTML = " width: " + w + ", height: " + h + ".";
}




function limitWords(textToLimit, wordLimit) {
   var finalText = "";
   var text2 = textToLimit.replace(/\s+/g, ' ');
   var text3 = text2.split(' ');
   var numberOfWords = text3.length;
   var i=0;

   if(numberOfWords > wordLimit) {
      for(i=0; i< wordLimit; i++)
         finalText = finalText+" "+ text3[i]+" ";
         return finalText+"…";
      }
   else return textToLimit;
}