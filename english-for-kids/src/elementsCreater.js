import cards from './cards';
import NavigationPanel from './navigationPanel';

const CLASS_NAME = {
  RotateFront: 'rotate-front',
  RotateBack: 'rotate-back',
};

class ElementsCreater {
  constructor(gameMode) {
    const [categoryNames, ...categories] = cards;
    this.data = {
      cards,
      categoryNames,
      categories,
    };

    this.navigationPanel = new NavigationPanel();
    this.gameMode = gameMode;
    this.isAppModeTrain = true;
  }

  createMainPage() {
    document.querySelector('[data-insert-cards]').innerHTML = '';
    this._createMainLinkInNavigationPanel('Main Page');
    this.data.categoryNames.forEach((el, i) => {
      this._createCardForMainCategory(el, this.data.categories[i][0].image, i);
    });
    this.gameMode.setCurrentCategoryIndex(null);
    this._hideOrShowWordAndBtnRotate();
    if (!this.isAppModeTrain) {
      this.gameMode.startPlayMode();
      this._clearAllPlayEffects();
    }
  }

  _createSubPage(currentCategoryIndex) {
    document.querySelector('[data-insert-cards]').innerHTML = '';
    this.data.categories[currentCategoryIndex].forEach((el) => {
      this._createCardForSubCategory(el);
    });
    this.gameMode.setCurrentCategoryIndex(currentCategoryIndex);
    this._hideOrShowWordAndBtnRotate();
    if (!this.isAppModeTrain) {
      this.gameMode.startPlayMode();
      this._clearAllPlayEffects();
    }
  }

  _createListenerForCategory(card, indexInArray) {
    card.addEventListener('click', () => {
      this._createSubPage(indexInArray);
      this.navigationPanel.selectItemAndClose(indexInArray + 1);
    });
  }

  _createListenersForCard(cardFront, cardBack, btnRotateCard, currentCard) {
    cardFront.addEventListener('click', () => {
      if (this.isAppModeTrain) {
        this._playAudio(currentCard.audioSrc);
      }
      if (this.gameMode.getIsPlayStarted()) {
        this.gameMode.setClickedCard(currentCard);
        this.gameMode.onCardClicked();
        if (this.gameMode.isCorrectClicked()) {
          this._makeCardDisable(cardFront);
          this._addPointToPage();
        } else {
          this._addMissToPage();
        }
      }
    });
    btnRotateCard.addEventListener('click', (event) => {
      event.stopPropagation();
      cardFront.classList.add(CLASS_NAME.RotateFront);
      cardBack.classList.add(CLASS_NAME.RotateBack);
    });
    cardBack.parentElement.addEventListener('mouseleave', () => {
      cardFront.classList.remove(CLASS_NAME.RotateFront);
      cardBack.classList.remove(CLASS_NAME.RotateBack);
    });
  }

  _addPointToPage() {
    const newPoint = this._getNewElement('div', ['score-field__point']);
    document.getElementById('score-field').append(newPoint);
  }

  _addMissToPage() {
    const newMiss = this._getNewElement('div', ['score-field__miss']);
    document.getElementById('score-field').append(newMiss);
  }

  _makeCardDisable(card) {
    card.classList.add('card_disable');
  }

  _getCardFront(title, imageForCard) {
    const cardFront = this._getNewElement('div', ['card__front']);
    const cardImageWrapper = this._getNewElement('div', ['card__image']);
    const cardImage = document.createElement('img');
    const cardWord = this._getNewElement('h3', ['card__word'], title);
    cardImage.src = `./assets/${imageForCard}`;
    cardImage.alt = `img-${title}`;
    cardImageWrapper.append(cardImage);
    cardFront.append(cardImageWrapper, cardWord);

    return cardFront;
  }

  _playAudio(audioSrc) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = `./assets/${audioSrc}`;
    audio.play();
  }

  _createMainLinkInNavigationPanel(title) {
    const navPanel = this.navigationPanel.getNavPanelForCreateNavigationLinks();
    navPanel.innerHTML = '';
    const link = this._getNewElement('h3', ['navigation-panel__item', 'navigation-panel__item-main'], title);
    link.addEventListener('click', () => {
      this.createMainPage();
      this.navigationPanel.selectItemAndClose(0);
    });
    navPanel.append(link);
    this.navigationPanel.selectItemAndClose(0);
  }

  _createLinksInNavigationPanel(title, indexInArray) {
    const navPanel = this.navigationPanel.getNavPanelForCreateNavigationLinks();
    const link = this._getNewElement('h3', ['navigation-panel__item'], title);
    this._createListenerForCategory(link, indexInArray);
    navPanel.append(link);
  }

  _createCardForMainCategory(title, imageForCard, indexInArray) {
    this._createLinksInNavigationPanel(title, indexInArray);

    const card = this._getNewElement('div', ['card']);
    const cardFront = this._getCardFront(title, imageForCard);
    card.append(cardFront);
    this._createListenerForCategory(card, indexInArray);
    document.querySelector('[data-insert-cards]').append(card);
  }

  _createCardForSubCategory(currentCard) {
    const card = this._getNewElement('div', ['card']);

    const btnRotateCard = this._getNewElement('button', ['card__btn-rotate']);
    const imgForBtnRotate = document.createElement('img');
    imgForBtnRotate.src = './assets/img/rotate.svg';
    btnRotateCard.append(imgForBtnRotate);

    const cardBack = this._getNewElement('div', ['card__back']);
    const cardTranslate = this._getNewElement('h3', ['card__word'], currentCard.translation);

    const cardFront = this._getCardFront(currentCard.word, currentCard.image);
    cardFront.append(btnRotateCard);

    cardBack.append(cardTranslate);
    card.append(cardFront, cardBack);
    this._createListenersForCard(cardFront, cardBack, btnRotateCard, currentCard);
    document.querySelector('[data-insert-cards]').append(card);
  }

  _getNewElement(typeElement, classNamesArray, title = '') {
    const element = document.createElement(typeElement);
    element.classList.add(...classNamesArray);
    element.innerHTML = title;
    return element;
  }

  toggleGameMode() {
    this.isAppModeTrain = !this.isAppModeTrain;
    this._hideOrShowWordAndBtnRotate();
    if (this.isAppModeTrain) this._clearAllPlayEffects();
  }

  _hideOrShowWordAndBtnRotate() {
    const btnRotateOnCurrentCards = document.querySelectorAll('.card__btn-rotate');
    const wordOnCurrentCards = document.querySelectorAll('.card__word');
    if (!btnRotateOnCurrentCards.length) {
      this._selectAndDeselectWord(wordOnCurrentCards);
      return;
    }
    this._hideOrShowElements(wordOnCurrentCards, btnRotateOnCurrentCards);
  }

  _hideOrShowElements(...elementList) {
    elementList.forEach((elements) => {
      elements.forEach((element) => {
        const currentElement = element;
        currentElement.style.display = this.isAppModeTrain ? 'block' : 'none';
      });
    });
  }

  _clearAllPlayEffects() {
    document.getElementById('score-field').innerHTML = '';
    document.querySelectorAll('.card__front').forEach((el) => {
      el.classList.remove('card_disable');
    });
  }

  _selectAndDeselectWord(words) {
    words.forEach((el) => {
      const currentWord = el;
      if (this.isAppModeTrain) {
        currentWord.classList.remove('card__word_active');
      } else {
        currentWord.classList.add('card__word_active');
      }
    });
  }
}

export default ElementsCreater;
