function toggleMenu(){
  const links=document.getElementById('links');
  if(links) links.classList.toggle('show');
}

document.querySelectorAll('.flip-card').forEach(card=>{
  card.addEventListener('click',()=>card.classList.toggle('flipped'));
  card.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});