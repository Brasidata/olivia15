// Add future required resources here. Paths are relative to index.html.
const requiredAssets = {
  images: [],
  files: [],
};

const pageLoaded = new Promise((resolve) => {
  if (document.readyState === 'complete') resolve();
  else window.addEventListener('load', resolve, { once: true });
});

async function preloadImage(src) {
  const image = new Image();
  image.src = src;
  await image.decode();
  return image;
}

async function preloadFile(src) {
  const response = await fetch(src);
  if (!response.ok) throw new Error(`Failed to load ${src}: ${response.status}`);
  await response.arrayBuffer();
}

const backgroundDelayMs = 3000;

window.addEventListener('invitation:ready', () => {
  if (document.body.dataset.intro === 'skip') return;
  setTimeout(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('pronto');
      document.body.setAttribute('aria-busy', 'false');
      // Let the scene fade in, then stop at the next complete turn (the 15 face).
      setTimeout(() => {
        const rotation = document.querySelector('.rotacao');
        rotation.addEventListener('animationiteration', () => {
          // Keep the same animation and faces; pause exactly at the front-facing
          // boundary instead of removing the animation and rebuilding its layers.
          const spin = rotation.getAnimations().find((animation) => animation.animationName === 'girar');
          if (spin) {
            const duration = spin.effect.getTiming().duration;
            const iteration = Math.round(spin.currentTime / duration);
            for (const animation of rotation.getAnimations({ subtree: true })) {
              animation.pause();
              animation.currentTime = iteration * duration;
            }
          }
          document.body.classList.add('decorado');
          rotation.setAttribute('aria-label', 'Número 15 em prata e azul');
          window.dispatchEvent(new CustomEvent('invitation:presented'));
        }, { once: true });
      }, 1800);
    });
  }, backgroundDelayMs);
}, { once: true });

async function prepareInvitation() {
  await Promise.all([
    pageLoaded,
    document.fonts.ready,
    ...Array.from(document.images, (image) => image.decode()),
    ...requiredAssets.images.map(preloadImage),
    ...requiredAssets.files.map(preloadFile),
  ]);
  window.dispatchEvent(new CustomEvent('invitation:ready'));
}

prepareInvitation().catch((error) => {
  console.error('Invitation resources could not be loaded.', error);
  window.dispatchEvent(new CustomEvent('invitation:error', { detail: error }));
});

// Reveal controls once the curtain entrance has finished.
window.addEventListener('invitation:presented', () => {
  setTimeout(() => {
    document.body.classList.add('interativo');
    document.querySelector('.conteudo').inert = false;
  }, 2000);
}, { once: true });

const infoDialog = document.querySelector('dialog');
for (const button of document.querySelectorAll('[data-info]')) {
  button.setAttribute('aria-label', button.dataset.info);
  button.addEventListener('click', () => {
    document.querySelector('#info-titulo').textContent = button.dataset.info;
    infoDialog.showModal();
  });
}
