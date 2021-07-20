 


// function Hero(image, top, below, left, right, size) {
//   this.image = image;
//   this.top = top;
//   this.left = left;
//   this.size = size;

//   this.getHeroElement = function () {
//       return '<img width="' + this.size + '"' +
//           ' height="' + this.size + '"' +
//           ' src="' + this.image + '"' +
//           ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
//   };
//   this.moveRight = function () {
//       this.left += 100;
//   };
//   this.moveBelow = function () {
//       this.top += 100;
//   };
//   this.moveLeft = function () {
//       this.left -= 100;
//   };
//   this.moveTop = function () {
//       this.top -= 100;
//   };
// };

// let hero = new Hero("down2.png", 20, 20, 20, 20, 200);

// function start() {
//   if (hero.left < window.innerWidth - hero.size && hero.top < 50) {
//       hero.moveRight();
//   } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - 200) {
//       hero.moveBelow();
//   } else if (hero.left > 100) {
//       hero.moveLeft();
//   } else {
//       hero.moveTop();
//   }

//   document.getElementById('game').innerHTML = hero.getHeroElement();
//   setTimeout(start, 50)
// }


// start();

class Hero {
    constructor(image, top, below, left, right, size, speed) {
        this.image = image;
        this.top = top;
        this.below = below;
        this.left = left;
        this.right = right;
        this.size = size;
        this.speed = speed;

    }
    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    }
    getMoveRight() {
        this.left += this.speed;
    }
    getMoveBelow() {
        this.top += this.speed;
    }
    getMoveLeft() {
        this.left -= this.speed;
    };
    getMoveTop() {
        this.top -= this.speed;
    }
}

var hero = new Hero("down2.png", 20, 20, 20, 20, 200,5);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top < 0) {
        hero.getMoveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - 200) {
        hero.getMoveBelow();
    } else if (hero.left > 0) {
        hero.getMoveLeft();
    } else {
        hero.getMoveTop();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
}


start();
