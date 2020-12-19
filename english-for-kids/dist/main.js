/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./style.scss");
/* harmony import */ var _elementsCreater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementsCreater */ "./elementsCreater.js");
/* harmony import */ var _gameMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameMode */ "./gameMode.js");



var app = {
  classes: {
    elementsCreater: null,
    gameMode: null
  },
  startListenChangeGameMode: function startListenChangeGameMode() {
    var _this = this;

    var btnToggleGameMode = this.classes.gameMode.getToggleButton();
    btnToggleGameMode.addEventListener('click', function () {
      if (btnToggleGameMode.checked) {
        _this.classes.elementsCreater.toggleGameMode();

        _this.classes.gameMode.startPlayMode();
      } else {
        _this.classes.elementsCreater.toggleGameMode();

        _this.classes.gameMode.finishPlayMode();
      }
    });
  },
  start: function start() {
    this.classes.gameMode = new _gameMode__WEBPACK_IMPORTED_MODULE_2__.default();
    this.classes.elementsCreater = new _elementsCreater__WEBPACK_IMPORTED_MODULE_1__.default(this.classes.gameMode);
    this.classes.elementsCreater.createMainPage();
    this.startListenChangeGameMode();
  }
};
app.start();

/***/ }),

/***/ "./cards.js":
/*!******************!*\
  !*** ./cards.js ***!
  \******************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Tableware', 'Transport'], [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}], [{
  word: 'spoon',
  translation: 'ложка',
  image: 'img/spoon.jpg',
  audioSrc: 'audio/spoon.mp3'
}, {
  word: 'knife',
  translation: 'нож',
  image: 'img/knife.jpg',
  audioSrc: 'audio/knife.mp3'
}, {
  word: 'fork',
  translation: 'вилка',
  image: 'img/fork.jpg',
  audioSrc: 'audio/fork.mp3'
}, {
  word: 'pot',
  translation: 'кастрюля',
  image: 'img/pot.jpg',
  audioSrc: 'audio/pot.mp3'
}, {
  word: 'pan',
  translation: 'сковорода',
  image: 'img/pan.jpg',
  audioSrc: 'audio/pan.mp3'
}, {
  word: 'plate',
  translation: 'тарелка',
  image: 'img/plate.jpg',
  audioSrc: 'audio/plate.mp3'
}, {
  word: 'cup',
  translation: 'чашка',
  image: 'img/cup.jpg',
  audioSrc: 'audio/cup.mp3'
}, {
  word: 'glass',
  translation: 'стакан',
  image: 'img/glass.jpg',
  audioSrc: 'audio/glass.mp3'
}], [{
  word: 'car',
  translation: 'машина',
  image: 'img/car.jpg',
  audioSrc: 'audio/car.mp3'
}, {
  word: 'truck',
  translation: 'грузовик',
  image: 'img/truck.jpg',
  audioSrc: 'audio/truck.mp3'
}, {
  word: 'plane',
  translation: 'самолёт',
  image: 'img/plane.jpg',
  audioSrc: 'audio/plane.mp3'
}, {
  word: 'tractor',
  translation: 'трактор',
  image: 'img/tractor.jpg',
  audioSrc: 'audio/tractor.mp3'
}, {
  word: 'train',
  translation: 'поезд',
  image: 'img/train.jpg',
  audioSrc: 'audio/train.mp3'
}, {
  word: 'bike',
  translation: 'велосипед',
  image: 'img/bike.jpg',
  audioSrc: 'audio/bike.mp3'
}, {
  word: 'ship',
  translation: 'корабль',
  image: 'img/ship.jpg',
  audioSrc: 'audio/ship.mp3'
}, {
  word: 'bus',
  translation: 'автобус',
  image: 'img/bus.jpg',
  audioSrc: 'audio/bus.mp3'
}]];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./elementsCreater.js":
/*!****************************!*\
  !*** ./elementsCreater.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./cards.js");
/* harmony import */ var _navigationPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigationPanel */ "./navigationPanel.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CLASS_NAME = {
  RotateFront: 'rotate-front',
  RotateBack: 'rotate-back'
};

var ElementsCreater = /*#__PURE__*/function () {
  function ElementsCreater(gameMode) {
    _classCallCheck(this, ElementsCreater);

    var _cards = _toArray(_cards__WEBPACK_IMPORTED_MODULE_0__.default),
        categoryNames = _cards[0],
        categories = _cards.slice(1);

    this.data = {
      cards: _cards__WEBPACK_IMPORTED_MODULE_0__.default,
      categoryNames: categoryNames,
      categories: categories
    };
    this.navigationPanel = new _navigationPanel__WEBPACK_IMPORTED_MODULE_1__.default();
    this.gameMode = gameMode;
    this.isAppModeTrain = true;
  }

  _createClass(ElementsCreater, [{
    key: "createMainPage",
    value: function createMainPage() {
      var _this = this;

      document.querySelector('[data-insert-cards]').innerHTML = '';

      this._createMainLinkInNavigationPanel('Main Page');

      this.data.categoryNames.forEach(function (el, i) {
        _this._createCardForMainCategory(el, _this.data.categories[i][0].image, i);
      });
      this.gameMode.setCurrentCategoryIndex(null);

      this._hideOrShowWordAndBtnRotate();

      if (!this.isAppModeTrain) {
        this.gameMode.startPlayMode();

        this._clearAllPlayEffects();
      }
    }
  }, {
    key: "_createSubPage",
    value: function _createSubPage(currentCategoryIndex) {
      var _this2 = this;

      document.querySelector('[data-insert-cards]').innerHTML = '';
      this.data.categories[currentCategoryIndex].forEach(function (el) {
        _this2._createCardForSubCategory(el);
      });
      this.gameMode.setCurrentCategoryIndex(currentCategoryIndex);

      this._hideOrShowWordAndBtnRotate();

      if (!this.isAppModeTrain) {
        this.gameMode.startPlayMode();

        this._clearAllPlayEffects();
      }
    }
  }, {
    key: "_createListenerForCategory",
    value: function _createListenerForCategory(card, indexInArray) {
      var _this3 = this;

      card.addEventListener('click', function () {
        _this3._createSubPage(indexInArray);

        _this3.navigationPanel.selectItemAndClose(indexInArray + 1);
      });
    }
  }, {
    key: "_createListenersForCard",
    value: function _createListenersForCard(cardFront, cardBack, btnRotateCard, currentCard) {
      var _this4 = this;

      cardFront.addEventListener('click', function () {
        if (_this4.isAppModeTrain) {
          _this4._playAudio(currentCard.audioSrc);
        }

        if (_this4.gameMode.getIsPlayStarted()) {
          _this4.gameMode.setClickedCard(currentCard);

          _this4.gameMode.onCardClicked();

          if (_this4.gameMode.isCorrectClicked()) {
            _this4._makeCardDisable(cardFront);

            _this4._addPointToPage();
          } else {
            _this4._addMissToPage();
          }
        }
      });
      btnRotateCard.addEventListener('click', function (event) {
        event.stopPropagation();
        cardFront.classList.add(CLASS_NAME.RotateFront);
        cardBack.classList.add(CLASS_NAME.RotateBack);
      });
      cardBack.parentElement.addEventListener('mouseleave', function () {
        cardFront.classList.remove(CLASS_NAME.RotateFront);
        cardBack.classList.remove(CLASS_NAME.RotateBack);
      });
    }
  }, {
    key: "_addPointToPage",
    value: function _addPointToPage() {
      var newPoint = this._getNewElement('div', ['score-field__point']);

      document.getElementById('score-field').append(newPoint);
    }
  }, {
    key: "_addMissToPage",
    value: function _addMissToPage() {
      var newMiss = this._getNewElement('div', ['score-field__miss']);

      document.getElementById('score-field').append(newMiss);
    }
  }, {
    key: "_makeCardDisable",
    value: function _makeCardDisable(card) {
      card.classList.add('card_disable');
    }
  }, {
    key: "_getCardFront",
    value: function _getCardFront(title, imageForCard) {
      var cardFront = this._getNewElement('div', ['card__front']);

      var cardImageWrapper = this._getNewElement('div', ['card__image']);

      var cardImage = document.createElement('img');

      var cardWord = this._getNewElement('h3', ['card__word'], title);

      cardImage.src = "./assets/".concat(imageForCard);
      cardImage.alt = "img-".concat(title);
      cardImageWrapper.append(cardImage);
      cardFront.append(cardImageWrapper, cardWord);
      return cardFront;
    }
  }, {
    key: "_playAudio",
    value: function _playAudio(audioSrc) {
      var audio = new Audio();
      audio.preload = 'auto';
      audio.src = "./assets/".concat(audioSrc);
      audio.play();
    }
  }, {
    key: "_createMainLinkInNavigationPanel",
    value: function _createMainLinkInNavigationPanel(title) {
      var _this5 = this;

      var navPanel = this.navigationPanel.getNavPanelForCreateNavigationLinks();
      navPanel.innerHTML = '';

      var link = this._getNewElement('h3', ['navigation-panel__item', 'navigation-panel__item-main'], title);

      link.addEventListener('click', function () {
        _this5.createMainPage();

        _this5.navigationPanel.selectItemAndClose(0);
      });
      navPanel.append(link);
      this.navigationPanel.selectItemAndClose(0);
    }
  }, {
    key: "_createLinksInNavigationPanel",
    value: function _createLinksInNavigationPanel(title, indexInArray) {
      var navPanel = this.navigationPanel.getNavPanelForCreateNavigationLinks();

      var link = this._getNewElement('h3', ['navigation-panel__item'], title);

      this._createListenerForCategory(link, indexInArray);

      navPanel.append(link);
    }
  }, {
    key: "_createCardForMainCategory",
    value: function _createCardForMainCategory(title, imageForCard, indexInArray) {
      this._createLinksInNavigationPanel(title, indexInArray);

      var card = this._getNewElement('div', ['card']);

      var cardFront = this._getCardFront(title, imageForCard);

      card.append(cardFront);

      this._createListenerForCategory(card, indexInArray);

      document.querySelector('[data-insert-cards]').append(card);
    }
  }, {
    key: "_createCardForSubCategory",
    value: function _createCardForSubCategory(currentCard) {
      var card = this._getNewElement('div', ['card']);

      var btnRotateCard = this._getNewElement('button', ['card__btn-rotate']);

      var imgForBtnRotate = document.createElement('img');
      imgForBtnRotate.src = './assets/img/rotate.svg';
      btnRotateCard.append(imgForBtnRotate);

      var cardBack = this._getNewElement('div', ['card__back']);

      var cardTranslate = this._getNewElement('h3', ['card__word'], currentCard.translation);

      var cardFront = this._getCardFront(currentCard.word, currentCard.image);

      cardFront.append(btnRotateCard);
      cardBack.append(cardTranslate);
      card.append(cardFront, cardBack);

      this._createListenersForCard(cardFront, cardBack, btnRotateCard, currentCard);

      document.querySelector('[data-insert-cards]').append(card);
    }
  }, {
    key: "_getNewElement",
    value: function _getNewElement(typeElement, classNamesArray) {
      var _element$classList;

      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var element = document.createElement(typeElement);

      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNamesArray));

      element.innerHTML = title;
      return element;
    }
  }, {
    key: "toggleGameMode",
    value: function toggleGameMode() {
      this.isAppModeTrain = !this.isAppModeTrain;

      this._hideOrShowWordAndBtnRotate();

      if (this.isAppModeTrain) this._clearAllPlayEffects();
    }
  }, {
    key: "_hideOrShowWordAndBtnRotate",
    value: function _hideOrShowWordAndBtnRotate() {
      var btnRotateOnCurrentCards = document.querySelectorAll('.card__btn-rotate');
      var wordOnCurrentCards = document.querySelectorAll('.card__word');

      if (!btnRotateOnCurrentCards.length) {
        this._selectAndDeselectWord(wordOnCurrentCards);

        return;
      }

      this._hideOrShowElements(wordOnCurrentCards, btnRotateOnCurrentCards);
    }
  }, {
    key: "_hideOrShowElements",
    value: function _hideOrShowElements() {
      var _this6 = this;

      for (var _len = arguments.length, elementList = new Array(_len), _key = 0; _key < _len; _key++) {
        elementList[_key] = arguments[_key];
      }

      elementList.forEach(function (elements) {
        elements.forEach(function (element) {
          var currentElement = element;
          currentElement.style.display = _this6.isAppModeTrain ? 'block' : 'none';
        });
      });
    }
  }, {
    key: "_clearAllPlayEffects",
    value: function _clearAllPlayEffects() {
      document.getElementById('score-field').innerHTML = '';
      document.querySelectorAll('.card__front').forEach(function (el) {
        el.classList.remove('card_disable');
      });
    }
  }, {
    key: "_selectAndDeselectWord",
    value: function _selectAndDeselectWord(words) {
      var _this7 = this;

      words.forEach(function (el) {
        var currentWord = el;

        if (_this7.isAppModeTrain) {
          currentWord.classList.remove('card__word_active');
        } else {
          currentWord.classList.add('card__word_active');
        }
      });
    }
  }]);

  return ElementsCreater;
}();

/* harmony default export */ __webpack_exports__["default"] = (ElementsCreater);

/***/ }),

/***/ "./gameMode.js":
/*!*********************!*\
  !*** ./gameMode.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./cards.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SOUND = {
  Correct: './audio/correct-answer.mp3',
  Wrong: './audio/wrong-answer.mp3',
  Win: './audio/win.mp3',
  Lose: './audio/lose.mp3'
};

var GameMode = /*#__PURE__*/function () {
  function GameMode() {
    _classCallCheck(this, GameMode);

    this._toggleGame = document.querySelector('#switcher');
    this.btnStartStopPlay = document.querySelector('#btn-start-game');
    this.categories = _cards__WEBPACK_IMPORTED_MODULE_0__.default.slice(1, _cards__WEBPACK_IMPORTED_MODULE_0__.default.length);
    this._isPlayStarted = false;
    this.currentCategoryIndex = null;
    this.clickedCard = null;
    this.currentVoicedCard = null;
    this.currentCategory = null;
    this.mistakes = null;

    this._startListenClickOnBtn();
  }

  _createClass(GameMode, [{
    key: "getToggleButton",
    value: function getToggleButton() {
      return this._toggleGame;
    }
  }, {
    key: "getIsPlayStarted",
    value: function getIsPlayStarted() {
      return this._isPlayStarted;
    }
  }, {
    key: "startPlayMode",
    value: function startPlayMode() {
      this.finishPlayMode();
      if (this.currentCategoryIndex === null) return;
      this.btnStartStopPlay.classList.add('btn-visible');
      this.btnStartStopPlay.innerHTML = 'start game';
      this.mistakes = 0;
    }
  }, {
    key: "finishPlayMode",
    value: function finishPlayMode() {
      this.btnStartStopPlay.classList.remove('btn-visible');
      this._isPlayStarted = false;
    }
  }, {
    key: "_startListenClickOnBtn",
    value: function _startListenClickOnBtn() {
      var _this = this;

      this.btnStartStopPlay.addEventListener('click', function () {
        if (_this._isPlayStarted) {
          _this._repeatWord();
        } else {
          _this._startPlay();
        }
      });
    }
  }, {
    key: "_startPlay",
    value: function _startPlay() {
      this._isPlayStarted = true;
      this.btnStartStopPlay.innerHTML = 'repeat';
      this.currentCategory = _toConsumableArray(this.categories[this.currentCategoryIndex]);
      this.currentCategory.sort(function () {
        return Math.random() - 0.5;
      });

      this._sayNextWord();
    }
  }, {
    key: "_repeatWord",
    value: function _repeatWord() {
      this._playAudio(this.currentVoicedCard.audioSrc);
    }
  }, {
    key: "_sayNextWord",
    value: function _sayNextWord() {
      var _this2 = this;

      var sayWord = function sayWord() {
        if (_this2.currentCategory.length) {
          _this2.currentVoicedCard = _this2.currentCategory.pop();

          _this2._playAudio(_this2.currentVoicedCard.audioSrc);
        } else {
          _this2._showResultsGame();
        }
      };

      setTimeout(sayWord, 1000);
    }
  }, {
    key: "_showResultsGame",
    value: function _showResultsGame() {
      var areaForInsert = document.querySelector('[data-insert-cards]');
      areaForInsert.innerHTML = '';
      var result = document.createElement('div');
      result.classList.add('result');
      var containerForImg = document.createElement('div');
      containerForImg.classList.add('result__img');
      var textResult = document.createElement('span');
      textResult.classList.add('result__text');
      var imgResult = document.createElement('img');
      containerForImg.append(imgResult);
      result.append(textResult, containerForImg);
      areaForInsert.append(result);
      this.btnStartStopPlay.classList.remove('btn-visible');

      if (this.mistakes === 0) {
        this._playAudio(SOUND.Win);

        textResult.innerHTML = 'Поздравляю! Отличная работа!';
        imgResult.src = './assets/img/success.png';
        imgResult.alt = "success";
      } else {
        this._playAudio(SOUND.Lose);

        textResult.innerHTML = "".concat(this.mistakes, " \u043E\u0448\u0438\u0431\u043E\u043A, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437!");
        imgResult.src = './assets/img/failure.png';
        imgResult.alt = "failure";
      }
    }
  }, {
    key: "_playAudio",
    value: function _playAudio(audioSrc) {
      var audio = new Audio();
      audio.preload = 'auto';
      audio.src = "./assets/".concat(audioSrc);
      audio.play();
    }
  }, {
    key: "setCurrentCategoryIndex",
    value: function setCurrentCategoryIndex(currentCategoryIndex) {
      this.currentCategoryIndex = currentCategoryIndex;
    }
  }, {
    key: "setClickedCard",
    value: function setClickedCard(clickedCard) {
      this.clickedCard = clickedCard;
    }
  }, {
    key: "onCardClicked",
    value: function onCardClicked() {
      if (this.isCorrectClicked()) {
        this._playAudio(SOUND.Correct);

        this._sayNextWord();
      } else {
        this.mistakes += 1;

        this._playAudio(SOUND.Wrong);
      }
    }
  }, {
    key: "isCorrectClicked",
    value: function isCorrectClicked() {
      return this.currentVoicedCard.word === this.clickedCard.word;
    }
  }]);

  return GameMode;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameMode);

/***/ }),

/***/ "./navigationPanel.js":
/*!****************************!*\
  !*** ./navigationPanel.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NAV = {
  Open: true,
  Close: false
};

var NavigationPanel = /*#__PURE__*/function () {
  function NavigationPanel() {
    _classCallCheck(this, NavigationPanel);

    this.btnBurger = document.getElementById('burger');
    this.navPanel = document.getElementById('navigation-panel');
    this.overlay = document.getElementById('overlay');
    this.isPanelOpen = false;

    this._listenerBurgerButton();

    this._listenerClickOverlay();
  }

  _createClass(NavigationPanel, [{
    key: "_listenerClickOverlay",
    value: function _listenerClickOverlay() {
      var _this = this;

      this.overlay.addEventListener('click', function () {
        _this.toggleNavigationPanel(NAV.Close);
      });
    }
  }, {
    key: "_listenerBurgerButton",
    value: function _listenerBurgerButton() {
      var _this2 = this;

      this.btnBurger.addEventListener('click', function () {
        if (_this2.btnBurger.classList.contains('burger-active')) {
          _this2.toggleNavigationPanel(NAV.Close);
        } else {
          _this2.toggleNavigationPanel(NAV.Open);
        }
      });
    }
  }, {
    key: "getNavPanelForCreateNavigationLinks",
    value: function getNavPanelForCreateNavigationLinks() {
      return this.navPanel;
    }
  }, {
    key: "unSelectAllItemsOfPanel",
    value: function unSelectAllItemsOfPanel() {
      var items = document.querySelectorAll('.navigation-panel__item');
      items.forEach(function (el) {
        el.classList.remove('navigation-panel__item_active');
      });
    }
  }, {
    key: "selectCurrentItem",
    value: function selectCurrentItem(index) {
      var items = document.querySelectorAll('.navigation-panel__item');
      items[index].classList.add('navigation-panel__item_active');
    }
  }, {
    key: "selectItemAndClose",
    value: function selectItemAndClose(index) {
      if (this.isPanelOpen) {
        this.toggleNavigationPanel(NAV.Close);
      }

      this.unSelectAllItemsOfPanel();
      this.selectCurrentItem(index);
    }
  }, {
    key: "toggleNavigationPanel",
    value: function toggleNavigationPanel(isOpened) {
      this.isPanelOpen = isOpened;

      this._animationBurger(this.isPanelOpen);

      this._animationPanelAndOverlay(this.isPanelOpen);
    }
  }, {
    key: "_animationPanelAndOverlay",
    value: function _animationPanelAndOverlay(isOpening) {
      var _this3 = this;

      this.navPanel.classList.add(isOpening ? 'show-navigation-panel' : 'hide-navigation-panel');
      this.overlay.classList.add(isOpening ? 'show-overlay' : 'hide-overlay');
      this.navPanel.addEventListener('animationend', function () {
        if (isOpening) {
          _this3.navPanel.classList.remove('show-navigation-panel');

          _this3.navPanel.classList.add('navigation-panel-active');

          _this3.overlay.classList.add('overlay-active');

          _this3.overlay.classList.remove('show-overlay');
        } else {
          _this3.overlay.classList.remove('hide-overlay');

          _this3.overlay.classList.remove('overlay-active');

          _this3.navPanel.classList.remove('hide-navigation-panel');

          _this3.navPanel.classList.remove('navigation-panel-active');
        }
      });
    }
  }, {
    key: "_animationBurger",
    value: function _animationBurger(isOpening) {
      var _this4 = this;

      this.btnBurger.classList.add(isOpening ? 'anim-burger' : 'anim-burger-reverse');
      this.btnBurger.addEventListener('animationend', function () {
        _this4.btnBurger.classList.remove(isOpening ? 'anim-burger' : 'anim-burger-reverse');

        if (isOpening) {
          _this4.btnBurger.classList.add('burger-active');
        } else {
          _this4.btnBurger.classList.remove('burger-active');
        }
      });
    }
  }]);

  return NavigationPanel;
}();

/* harmony default export */ __webpack_exports__["default"] = (NavigationPanel);

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map