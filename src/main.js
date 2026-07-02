const translations = {"HOME": "INICIO", "STRAW CHARMS": "CHARMS PARA POPOTES", "NECKLACES": "COLLARES", "VALUES": "VALORES", "COLLECTORS": "COLECCIÓN", "CONTACT": "CONTACTO", "🇺🇸 ENGLISH": "🇪🇸 ESPAÑOL", "SHOP 🛍️": "COMPRAR 🛍️", "Collect values. Share kindness.": "Colecciona valores. Comparte bondad.", "Small charms,": "Charms pequeños,", "big": "grandes", "values.": "valores.", "Colorful collectible charms that inspire kindness, courage, friendship and confidence. Perfect for straws, necklaces and everyday adventures.": "Charms coleccionables coloridos que inspiran bondad, valentía, amistad y confianza. Perfectos para popotes, collares y aventuras de todos los días.", "EXPLORE CHARMS": "EXPLORAR CHARMS", "SEE COLLECTION": "VER COLECCIÓN", "ADORABLE DESIGNS": "DISEÑOS ADORABLES", "SAFE & HIGH QUALITY": "SEGUROS Y DE CALIDAD", "POSITIVE VALUES": "VALORES POSITIVOS", "Collect": "Colecciónalos", "them all! 💗": "todos 💗", "Made for everyday adventures": "Hechos para aventuras diarias", "Add fun and meaning to every day with playful charms that kids can collect, trade and wear.": "Agrega diversión y significado a cada día con charms que los niños pueden coleccionar, intercambiar y usar.", "Turn every sip into a colorful experience": "Convierte cada sorbo en una experiencia colorida", "Clip-on style collectible characters made to personalize straws, cups and daily routines.": "Personajes coleccionables diseñados para personalizar popotes, vasos y rutinas diarias.", "Carry your values close to your heart": "Lleva tus valores cerca del corazón", "Wear your favorite Guardian and show the value that represents your story.": "Usa tu Guardian favorito y muestra el valor que representa tu historia.", "12 virtues to inspire every day": "12 virtudes para inspirar cada día", "Each Guardian represents a value that helps kids grow with confidence, kindness and purpose.": "Cada Guardian representa un valor que ayuda a los niños a crecer con confianza, bondad y propósito.", "Courage": "Valentía", "Kindness": "Bondad", "Honesty": "Honestidad", "Resilience": "Resiliencia", "Safety": "Seguridad", "Friendship": "Amistad", "Calm": "Calma", "Hope": "Esperanza", "Creativity": "Creatividad", "Confidence": "Confianza", "Patience": "Paciencia", "Respect": "Respeto", "I face challenges with bravery.": "Enfrento los retos con valentía.", "I am kind and caring to others.": "Soy amable y cuido a los demás.", "I tell the truth and act with integrity.": "Digo la verdad y actúo con integridad.", "I keep going even when it’s hard.": "Sigo adelante aunque sea difícil.", "I make smart choices to stay safe.": "Tomo buenas decisiones para estar seguro.", "I value my friends and treat them well.": "Valoro a mis amigos y los trato bien.", "I stay calm and handle my emotions.": "Me mantengo en calma y manejo mis emociones.", "I believe in better days ahead.": "Creo en mejores días por venir.", "I imagine, create and think in new ways.": "Imagino, creo y pienso de nuevas maneras.", "I believe in myself and my abilities.": "Creo en mí y en mis habilidades.", "I wait, I try and don’t give up easily.": "Espero, intento y no me rindo fácilmente.", "I treat others and my world with respect.": "Trato a los demás y a mi mundo con respeto.", "Collectors World": "Mundo de Coleccionistas", "A colorful universe of Guardians, values and stories kids can collect one charm at a time.": "Un universo colorido de Guardianes, valores e historias que los niños pueden coleccionar charm por charm.", "120 Guardians to discover": "120 Guardianes por descubrir", "GuardiansMate is built around 12 Power Values. Each value can grow into a family of unique charms, special poses and collectible editions.": "GuardiansMate está construido alrededor de 12 Power Values. Cada valor puede crecer en una familia de charms únicos, poses especiales y ediciones coleccionables.", "JOIN THE ADVENTURE": "ÚNETE A LA AVENTURA", "POWER VALUES": "POWER VALUES", "CHARMS EACH": "CHARMS CADA UNO", "GUARDIANS": "GUARDIANES", "🚀 Launching soon — early access opens first": "🚀 Próximamente — el acceso temprano abre primero", "Unlock the": "Desbloquea el", "Guardian": "universo", "universe.": "Guardian.", "Be first to collect new drops, limited Guardian releases, launch rewards and special surprises made for the first members of the adventure.": "Sé el primero en coleccionar nuevos lanzamientos, Guardianes limitados, recompensas de lanzamiento y sorpresas especiales para los primeros miembros de la aventura.", "Early rewards": "Recompensas", "First drops": "Primeros drops", "VIP updates": "Actualizaciones VIP", "Enter your email": "Escribe tu email", "GET EARLY ACCESS": "ACCESO TEMPRANO", "Quick Links": "Enlaces", "Customer Care": "Ayuda", "Follow Us": "Síguenos", "Shipping & Returns": "Envíos y devoluciones", "Safety & Quality": "Seguridad y calidad"};
let isSpanish = false;
function translateTextNode(node, toSpanish) {
  const original = node.__originalText || node.nodeValue;
  node.__originalText = original;
  const trimmed = original.trim();
  if (!trimmed) return;
  if (toSpanish && translations[trimmed]) {
    node.nodeValue = original.replace(trimmed, translations[trimmed]);
  } else {
    node.nodeValue = original;
  }
}
function translatePage() {
  isSpanish = !isSpanish;
  document.querySelectorAll('body *').forEach(el => {
    if (el.children.length === 0) {
      el.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) translateTextNode(n, isSpanish);
      });
    } else {
      el.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) translateTextNode(n, isSpanish);
      });
    }
  });
  document.querySelectorAll('input[placeholder]').forEach(input => {
    input.placeholder = isSpanish ? 'Escribe tu email' : 'Enter your email';
  });
  const lang = document.querySelector('.lang');
  if (lang) lang.textContent = isSpanish ? '🇺🇸 ENGLISH' : '🇪🇸 ESPAÑOL';
  document.documentElement.lang = isSpanish ? 'es' : 'en';
}
document.querySelector('.lang')?.addEventListener('click', translatePage);



document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mx', e.clientX + 'px');
  document.documentElement.style.setProperty('--my', e.clientY + 'px');
});



const cursorStar = document.querySelector('.cursor-star');
document.addEventListener('mousemove', (e) => {
  if(cursorStar){
    cursorStar.style.left = e.clientX + 'px';
    cursorStar.style.top = e.clientY + 'px';
  }
  const heroProduct = document.querySelector('.hero-product');
  const logo = document.querySelector('.logo');
  const x = (e.clientX / window.innerWidth - .5);
  const y = (e.clientY / window.innerHeight - .5);
  if(heroProduct){
    heroProduct.style.transform = `translate(${x*18}px, ${y*18}px) rotate(${x*2}deg)`;
  }
  if(logo){
    logo.style.transform = `translate(${x*-8}px, ${y*-8}px) rotate(${x*3}deg)`;
  }
});
document.addEventListener('click', (e) => {
  const pieces = ['✦','★','✧','💜','✨'];
  for(let i=0;i<10;i++){
    const b = document.createElement('span');
    b.className='click-burst';
    b.textContent = pieces[Math.floor(Math.random()*pieces.length)];
    b.style.left = e.clientX + 'px';
    b.style.top = e.clientY + 'px';
    b.style.setProperty('--bx', (Math.random()*160-80)+'px');
    b.style.setProperty('--by', (Math.random()*160-80)+'px');
    document.body.appendChild(b);
    setTimeout(()=>b.remove(), 900);
  }
});
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.value-card').forEach(card=>{
  card.addEventListener('mouseenter', ()=> card.classList.add('active'));
  card.addEventListener('mouseleave', ()=> card.classList.remove('active'));
});