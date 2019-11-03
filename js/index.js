$(".letters").hover(over, out);
function over(){
  TweenMax.to(this, 0.25, {scale: 1.3, ease: Back.easeOut.config( 1, 0.75)})
}
function out(){
  TweenMax.to(this, 1, {scale: 1, ease: Back.easeIn.config( 1, 0.75)})
}

TweenLite.render();