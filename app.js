var canvas = document.getElementById('viewport'),
context = canvas.getContext('2d')

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'https://mpng.subpng.com/20180214/deq/kisspng-basketball-court-basketball-court-5a84cbe8cdbf14.4906092115186523928427.jpg';
  context.drawImage(base_image, 100, 100);
}