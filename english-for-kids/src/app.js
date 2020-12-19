import './style.scss';
import ElementsCreater from './elementsCreater';
import GameMode from './gameMode';

const app = {
  classes: {
    elementsCreater: null,
    gameMode: null,
  },

  startListenChangeGameMode() {
    const btnToggleGameMode = this.classes.gameMode.getToggleButton();
    btnToggleGameMode.addEventListener('click', () => {
      if (btnToggleGameMode.checked) {
        this.classes.elementsCreater.toggleGameMode();
        this.classes.gameMode.startPlayMode();
      } else {
        this.classes.elementsCreater.toggleGameMode();
        this.classes.gameMode.finishPlayMode();
      }
    });
  },

  start() {
    this.classes.gameMode = new GameMode();
    this.classes.elementsCreater = new ElementsCreater(this.classes.gameMode);

    this.classes.elementsCreater.createMainPage();
    this.startListenChangeGameMode();
  },
};

app.start();
