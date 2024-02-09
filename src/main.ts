document.addEventListener('DOMContentLoaded', () => {
   const btnHamburger = document.querySelector('.navbar__btn-mobile');
   const btnCross = document.querySelector('.btn-cross');
   const modalMenu: HTMLElement | null = document.querySelector('.modal-menu');
   const details: NodeListOf<HTMLElement> = document.querySelectorAll('.menu details');
   const detailsNavbar: NodeListOf<HTMLElement> = document.querySelectorAll('.navbar__menu details');

   btnHamburger?.addEventListener('click', () => {
      if (!modalMenu) return;

      modalMenu.style.transform = 'translateX(0%)';
   });

   btnCross?.addEventListener('click', () => {
      if (!modalMenu) return;

      modalMenu.style.transform = 'translateX(100%)';

      details.forEach((element) => {
         element.toggleAttribute('open', false);
      });
   });

   document.addEventListener('click', (event: MouseEvent) => {
      for (let element of detailsNavbar) {
         if (event.target === element || element.contains(event.target as Node)) continue;
         else element.toggleAttribute('open', false);
      }
   });
});
