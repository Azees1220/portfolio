// Lightweight interactive bits
document.addEventListener('DOMContentLoaded',function(){
  // Typing effect
  const words = ['UI animations.','modern interfaces.','accessible experiences.'];
  const el = document.getElementById('typed');
  let w = 0, i = 0, forward = true;
  function tick(){
    const word = words[w];
    if(forward){
      i++;
      el.textContent = word.slice(0,i);
      if(i===word.length){forward=false;setTimeout(tick,900);return}
    } else {
      i--;
      el.textContent = word.slice(0,i);
      if(i===0){forward=true;w=(w+1)%words.length}
    }
    setTimeout(tick,120 + Math.random()*60);
  }
  tick();

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll for nav
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'))
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    })
  })
});
