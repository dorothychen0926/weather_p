// today
Today = new Date();
yy = Today.getFullYear();
mm = Today.getMonth()+1;
dd = Today.getDate();

document.getElementById('today').innerHTML = yy+"年"+mm+"月"+dd+"日";
