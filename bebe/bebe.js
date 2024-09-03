// Mostrar y ocultar elementos
document.querySelector('.no').addEventListener('click', function() {
  document.getElementById('f1').style.display = 'none';
  document.getElementById('f2').style.display = 'block';
});

document.querySelector('.weno').addEventListener('click', function() {
  document.getElementById('f2').style.display = 'none';
  document.getElementById('f4').style.display = 'block';
});

document.querySelector('.si').addEventListener('click', function() {
  document.getElementById('f1').style.display = 'none';
  document.getElementById('f3').style.display = 'block';
});

document.querySelector('.dale').addEventListener('click', function() {
  document.getElementById('f3').style.display = 'none';
  document.getElementById('f4').style.display = 'block';
});

document.querySelector('.rega').addEventListener('click', function() {
  document.getElementById('f4').style.display = 'none';
  document.getElementById('f5').style.display = 'block';
});

document.querySelector('.ojo').addEventListener('click', function() {
  document.getElementById('f5').style.display = 'none';
  document.getElementById('f6').style.display = 'block';
  document.querySelector('.img1').style.display = 'block';

});

document.querySelector('.afi').addEventListener('click', function() {
  document.querySelector('.img1').style.display = 'none';
  document.getElementById('f6').style.display = 'none';
  document.getElementById('f8').style.display = 'block';
  document.getElementById('f7').style.display = 'block';
  document.getElementById('.ico').style.display = 'block';
});

document.querySelector('.salu').addEventListener('click', function() {
  document.getElementById('f9').style.display = 'block';
  document.getElementById('f8').style.display = 'none';
});

document.querySelector('.copy').addEventListener('click', function() {
  document.getElementById('f9').style.display = 'none';
  document.getElementById('f10').style.display = 'block';
  document.getElementById('f11').style.display = 'block';
});

document.querySelector('span.go').addEventListener('click', function() {
  document.getElementById('f14').style.display = 'block';
  document.getElementById('f13').style.display = 'none';
});

document.querySelector('.ca1').addEventListener('click', function() {
  document.getElementById('f13').style.display = 'block';
  document.getElementById('f12').style.display = 'block';
});

document.querySelector('.ca3').addEventListener('click', function() {
  document.getElementById('f15').style.display = 'block';
  document.getElementById('f16').style.display = 'block';
});

document.querySelector('.ca2').addEventListener('click', function() {
  document.getElementById('f18').style.display = 'block';
  document.getElementById('f19').style.display = 'block';
});

document.querySelector('.carta').addEventListener('click', function() {
  document.getElementById('f12').style.display = 'none';
});

document.querySelector('.anillo').addEventListener('click', function() {
  document.getElementById('f16').style.display = 'none';
  document.getElementById('f17').style.display = 'block';
});

document.querySelector('.marry').addEventListener('click', function() {
  document.getElementById('f15').style.display = 'none';
  document.getElementById('f17').style.display = 'none';
});

document.querySelector('.meme').addEventListener('click', function() {
  document.getElementById('f19').style.display = 'none';
  document.getElementById('f20').style.display = 'block';
});

document.querySelector('.meme2').addEventListener('click', function() {
  document.getElementById('f20').style.display = 'none';
  document.getElementById('f21').style.display = 'block';
});

document.querySelector('.yes').addEventListener('click', function() {
  document.getElementById('f21').style.display = 'none';
  document.getElementById('f22').style.display = 'block';
});