import cards from './cards';

const SOUND = {
  Correct: './audio/correct-answer.mp3',
  Wrong: './audio/wrong-answer.mp3',
  Win: './audio/win.mp3',
  Lose: './audio/lose.mp3',
};
class GameMode {
  constructor() {
    this._toggleGame = document.querySelector('#switcher');
    this.btnStartStopPlay = document.querySelector('#btn-start-game');
    this.categories = cards.slice(1, cards.length);
    this._isPlayStarted = false;
    this.currentCategoryIndex = null;
    this.clickedCard = null;
    this.currentVoicedCard = null;
    this.currentCategory = null;
    this.mistakes = null;

    this._startListenClickOnBtn();
  }

  getToggleButton() {
    return this._toggleGame;
  }

  getIsPlayStarted() {
    return this._isPlayStarted;
  }

  startPlayMode() {
    this.finishPlayMode();
    if (this.currentCategoryIndex === null) return;

    this.btnStartStopPlay.classList.add('btn-visible');
    this.btnStartStopPlay.innerHTML = 'start game';
    this.mistakes = 0;
  }

  finishPlayMode() {
    this.btnStartStopPlay.classList.remove('btn-visible');
    this._isPlayStarted = false;
  }

  _startListenClickOnBtn() {
    this.btnStartStopPlay.addEventListener('click', () => {
      if (this._isPlayStarted) {
        this._repeatWord();
      } else {
        this._startPlay();
      }
    });
  }

  _startPlay() {
    this._isPlayStarted = true;
    this.btnStartStopPlay.innerHTML = 'repeat';
    this.currentCategory = [...this.categories[this.currentCategoryIndex]];
    this.currentCategory.sort(() => Math.random() - 0.5);
    this._sayNextWord();
  }

  _repeatWord() {
    this._playAudio(this.currentVoicedCard.audioSrc);
  }

  _sayNextWord() {
    const sayWord = () => {
      if (this.currentCategory.length) {
        this.currentVoicedCard = this.currentCategory.pop();
        this._playAudio(this.currentVoicedCard.audioSrc);
      } else {
        this._showResultsGame();
      }
    };
    setTimeout(sayWord, 1000);
  }

  _showResultsGame() {
    const areaForInsert = document.querySelector('[data-insert-cards]');
    areaForInsert.innerHTML = '';
    const result = document.createElement('div');
    result.classList.add('result');
    const containerForImg = document.createElement('div');
    containerForImg.classList.add('result__img');
    const textResult = document.createElement('span');
    textResult.classList.add('result__text');

    const imgResult = document.createElement('img');

    containerForImg.append(imgResult);
    result.append(textResult, containerForImg);
    areaForInsert.append(result);
    this.btnStartStopPlay.classList.remove('btn-visible');

    if (this.mistakes === 0) {
      this._playAudio(SOUND.Win);
      textResult.innerHTML = 'Поздравляю! Отличная работа!';
      imgResult.src = './assets/img/success.png';
      imgResult.alt = `success`;
    } else {
      this._playAudio(SOUND.Lose);
      textResult.innerHTML = `${this.mistakes} ошибок, попробуй ещё раз!`;
      imgResult.src = './assets/img/failure.png';
      imgResult.alt = `failure`;
    }
  }

  _playAudio(audioSrc) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = `./assets/${audioSrc}`;
    audio.play();
  }

  setCurrentCategoryIndex(currentCategoryIndex) {
    this.currentCategoryIndex = currentCategoryIndex;
  }

  setClickedCard(clickedCard) {
    this.clickedCard = clickedCard;
  }

  onCardClicked() {
    if (this.isCorrectClicked()) {
      this._playAudio(SOUND.Correct);
      this._sayNextWord();
    } else {
      this.mistakes += 1;
      this._playAudio(SOUND.Wrong);
    }
  }

  isCorrectClicked() {
    return this.currentVoicedCard.word === this.clickedCard.word;
  }
}

export default GameMode;
