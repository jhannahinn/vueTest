import anime from 'animejs';

export function openLabel(element) {
  anime({
    targets: element,
    width: '100px', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
  });
}

export function closeLabel(element) {
  anime({
    targets: element,
    width: '48px', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
  });
}