function getRandValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      log: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: 0 };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: 0 };
      }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpAttackOrHeal() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
  },
  methods: {
    restastGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.log = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMsg('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMsg('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.addLogMsg('player', 'special attack', attackValue);
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandValue(20, 35);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMsg('player', 'heal', healValue);
      this.attackPlayer();
    },
    flee() {
      this.winner = 'monster';
    },
    addLogMsg(who, what, value) {
      this.log.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount('#game');
