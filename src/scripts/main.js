document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      hidden();
      aba.classList.add("meet__list--is--active");
      removeActive();
      botao.target.classList.add("meet__menu__list__item--active");
    });
  }
});

// Seção de meet, programação das abas

function removeActive() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("meet__menu__list__item--active");
  }
}

function hidden() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");
  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("meet__list--is--active");
  }
}
