const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => nav?.classList.toggle('open'));

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    e.preventDefault();
    document.body.classList.add('is-transitioning');
    setTimeout(() => {
      window.location.href = href;
    }, 420);
  });
});

const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  let idx = 0;

  const show = (next) => {
    slides[idx].classList.remove('active');
    idx = (next + slides.length) % slides.length;
    slides[idx].classList.add('active');
  };

  document.querySelector('[data-next]')?.addEventListener('click', () => show(idx + 1));
  document.querySelector('[data-prev]')?.addEventListener('click', () => show(idx - 1));
  setInterval(() => show(idx + 1), 5000);
}

const calc = document.querySelector('#finance-calc');
calc?.addEventListener('submit', (e) => {
  e.preventDefault();
  const price = Number(document.querySelector('#price')?.value || 0);
  const down = Number(document.querySelector('#down')?.value || 0);
  const apr = Number(document.querySelector('#apr')?.value || 0) / 100 / 12;
  const term = Number(document.querySelector('#term')?.value || 1);
  const principal = Math.max(price - down, 0);
  const monthly = apr === 0
    ? principal / term
    : (principal * apr) / (1 - Math.pow(1 + apr, -term));

  const output = document.querySelector('#payment-result');
  if (output) {
    output.textContent = `Estimated payment: $${monthly.toFixed(2)} / month`;
  }
});

const bidForm = document.querySelector('#bid-form');
const bidStatus = document.querySelector('#bid-status');
const liveBids = document.querySelector('#live-bids');

bidForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const vehicle = document.querySelector('#bid-vehicle')?.value;
  const type = document.querySelector('#bid-type')?.value;
  const amount = Number(document.querySelector('#bid-amount')?.value || 0);

  if (!vehicle || amount <= 0) return;

  if (bidStatus) {
    bidStatus.textContent = `${type} submitted for ${vehicle} at $${amount.toLocaleString()}. A broker will confirm shortly.`;
  }

  if (liveBids) {
    const lot = vehicle.split(' - ')[0];
    const firstItem = liveBids.querySelector('li');
    firstItem?.remove();
    const item = document.createElement('li');
    item.innerHTML = `<strong>${lot}:</strong> $${amount.toLocaleString()}`;
    liveBids.prepend(item);
  }

  bidForm.reset();
});

const bidTicks = [
  ['Lot 392', 38950],
  ['Lot 418', 40500],
  ['Lot 432', 34025]
];

setInterval(() => {
  if (!liveBids) return;
  const randomLot = bidTicks[Math.floor(Math.random() * bidTicks.length)];
  const increment = Math.floor(Math.random() * 10 + 1) * 25;
  randomLot[1] += increment;

  const items = Array.from(liveBids.querySelectorAll('li'));
  const match = items.find((item) => item.textContent?.includes(randomLot[0]));
  if (match) {
    match.innerHTML = `<strong>${randomLot[0]}:</strong> $${randomLot[1].toLocaleString()}`;
  }
}, 6500);
