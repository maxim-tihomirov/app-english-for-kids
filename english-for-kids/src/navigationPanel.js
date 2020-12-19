const NAV = {
  Open: true,
  Close: false,
};
class NavigationPanel {
  constructor() {
    this.btnBurger = document.getElementById('burger');
    this.navPanel = document.getElementById('navigation-panel');
    this.overlay = document.getElementById('overlay');
    this.isPanelOpen = false;

    this._listenerBurgerButton();
    this._listenerClickOverlay();
  }

  _listenerClickOverlay() {
    this.overlay.addEventListener('click', () => {
      this.toggleNavigationPanel(NAV.Close);
    });
  }

  _listenerBurgerButton() {
    this.btnBurger.addEventListener('click', () => {
      if (this.btnBurger.classList.contains('burger-active')) {
        this.toggleNavigationPanel(NAV.Close);
      } else {
        this.toggleNavigationPanel(NAV.Open);
      }
    });
  }

  getNavPanelForCreateNavigationLinks() {
    return this.navPanel;
  }

  unSelectAllItemsOfPanel() {
    const items = document.querySelectorAll('.navigation-panel__item');

    items.forEach((el) => {
      el.classList.remove('navigation-panel__item_active');
    });
  }

  selectCurrentItem(index) {
    const items = document.querySelectorAll('.navigation-panel__item');
    items[index].classList.add('navigation-panel__item_active');
  }

  selectItemAndClose(index) {
    if (this.isPanelOpen) {
      this.toggleNavigationPanel(NAV.Close);
    }
    this.unSelectAllItemsOfPanel();
    this.selectCurrentItem(index);
  }

  toggleNavigationPanel(isOpened) {
    this.isPanelOpen = isOpened;
    this._animationBurger(this.isPanelOpen);
    this._animationPanelAndOverlay(this.isPanelOpen);
  }

  _animationPanelAndOverlay(isOpening) {
    this.navPanel.classList.add(isOpening ? 'show-navigation-panel' : 'hide-navigation-panel');
    this.overlay.classList.add(isOpening ? 'show-overlay' : 'hide-overlay');
    this.navPanel.addEventListener('animationend', () => {
      if (isOpening) {
        this.navPanel.classList.remove('show-navigation-panel');
        this.navPanel.classList.add('navigation-panel-active');
        this.overlay.classList.add('overlay-active');
        this.overlay.classList.remove('show-overlay');
      } else {
        this.overlay.classList.remove('hide-overlay');
        this.overlay.classList.remove('overlay-active');
        this.navPanel.classList.remove('hide-navigation-panel');
        this.navPanel.classList.remove('navigation-panel-active');
      }
    });
  }

  _animationBurger(isOpening) {
    this.btnBurger.classList.add(isOpening ? 'anim-burger' : 'anim-burger-reverse');
    this.btnBurger.addEventListener('animationend', () => {
      this.btnBurger.classList.remove(isOpening ? 'anim-burger' : 'anim-burger-reverse');
      if (isOpening) {
        this.btnBurger.classList.add('burger-active');
      } else {
        this.btnBurger.classList.remove('burger-active');
      }
    });
  }
}

export default NavigationPanel;
