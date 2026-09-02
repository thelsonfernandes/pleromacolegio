function toggleClassicalPrinciple(trigger) {
  const item = trigger.closest('.classical-principle');
  const panel = item && item.querySelector('.classical-principle-panel');
  if (!item || !panel) return;
  const willOpen = panel.hidden;
  document.querySelectorAll('.classical-principle').forEach(otherItem => {
    otherItem.classList.remove('is-open');
    otherItem.querySelector('.classical-principle-trigger').setAttribute('aria-expanded', 'false');
    otherItem.querySelector('.classical-principle-panel').hidden = true;
  });
  item.classList.toggle('is-open', willOpen);
  trigger.setAttribute('aria-expanded', String(willOpen));
  panel.hidden = !willOpen;
}

window.toggleClassicalPrinciple = toggleClassicalPrinciple;
