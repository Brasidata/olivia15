const pixKey = document.querySelector('#chave-pix');
const pixStatus = document.querySelector('.status-pix');

document.querySelector('.copiar-pix').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pixKey.value.trim());
    pixStatus.textContent = 'Chave Pix copiada!';
  } catch {
    pixKey.focus();
    pixKey.select();
    pixKey.setSelectionRange(0, pixKey.value.length);
    pixStatus.textContent = 'Chave selecionada. Toque e segure para copiar ou use Ctrl+C / ⌘C.';
  }
});
