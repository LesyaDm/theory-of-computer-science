'use struct';

let res = '';
let percent = new Array();
let shen = 0;
let hartly = 0;


function getRes(){
  let text = document.forms[0].elements[0].value;
  hartly = text.length * Math.log2(36);
  res = "Ответ: " + hartly;
  document.getElementById("result1").innerHTML = res;
}


function getTable(){
  let text = document.forms[0].elements[0].value.toLowerCase();
  let alph_ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ,.'; 

  for (let i = 0; i < alph_ru.length; i++){
    percent.push(0);

    for (let j = 0; j < text.length; j++){
      if (alph_ru[i] == text[j]){
        percent[i]++;
      }
    }

    percent[i] /= text.length;
    percent[i] = Math.floor(percent[i] * 1000) / 1000;
  }

  res = "<table border> <tr><td>Пробел: " + percent[33] + " </td><td>А: " + percent[0] + "</td><td>Б: " + percent[1] + "</td><td>В: " + percent[2] + "</td></tr><tr><td>Г: " + percent[3] + " </td><td>Д: " + percent[4] + "</td><td>Е: " + percent[5] + "</td><td>Ё: " + percent[6] + "</td></tr><tr><td>Ж: " + percent[7] + " </td><td>З: " + percent[8] + "</td><td>И: " + percent[9] + "</td><td>Й: " + percent[10] + "</td></tr><tr><td>К: " + percent[11] + " </td><td>Л: " + percent[12] + "</td><td>М: " + percent[13] + "</td><td>Н: " + percent[14] + "</td></tr><tr><td>О: " + percent[15] + " </td><td>П: " + percent[16] + "</td><td>Р: " + percent[17] + "</td><td>С: " + percent[18] + "</td></tr><tr><td>Т: " + percent[19] + " </td><td>У: " + percent[20] + "</td><td>Ф: " + percent[21] + "</td><td>Х: " + percent[22] + "</td></tr><tr><td>Ц: " + percent[23] + " </td><td>Ч: " + percent[24] + "</td><td>Ш: " + percent[25] + "</td><td>Щ: " + percent[26] + "</td></tr><tr><td>Ъ: " + percent[27] + " </td><td>Ы: " + percent[28] + "</td><td>Ь: " + percent[29] + "</td><td>Э: " + percent[30] + "</td></tr><tr><td>Ю: " + percent[31] + " </td><td>Я: " + percent[32] + " </td><td>Запятая: " + percent[34] + " </td><td>Точка: " + percent[35] + "</td></tr>" + "</table>";


  document.getElementById("result2").innerHTML = res;
}



function getCalc(){
  for (let i = 0; i < percent.length; i++){
    shen += (percent[i] != 0) ? percent[i] * Math.log2(percent[i]) : 0;
  }
  shen *= -1;
  let full = shen * 36; 
  res = "Ответ: <br>Среднее кол-во информации: " + shen + "<br>Полное кол-во информации: " + full;
  document.getElementById("result3").innerHTML = res;
}


function getDop(){
  let redundancy = 0;
  redundancy = 1 - shen / hartly;
  res = "Ответ: " + redundancy;
  document.getElementById("result4").innerHTML = res;
}