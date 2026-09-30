// Shared quiz widget. Usage: <div class="quiz" data-answer="b"> with buttons data-opt="a|b|c".
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.quiz button');
  if (!btn) return;
  const box = btn.closest('.quiz');
  const right = box.dataset.answer;
  const fb = box.querySelector('.fb');
  if (btn.dataset.opt === right) {
    fb.textContent = 'Correct — ' + (box.dataset.why || 'that is the strategic move.');
    fb.style.color = 'green';
  } else {
    fb.textContent = 'Not quite — recall from memory, then try again.';
    fb.style.color = '#a00';
  }
});
