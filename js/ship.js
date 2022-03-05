class Ship {
  constructor(ctx, canvasSize, posX, posY, width, height) {
    //Constants
    this.ctx = ctx;
    this.canvasSize = canvasSize;

    //Size
    this.shipSize = { w: width, h: height };

    //Position
    this.shipPos = { x: posX, y: posY };

    //Velocity & acceleration
    this.speed = 5;

    //Loading image
    this.imageName = "ship.png";
    this.shipInstance = new Image();
    this.shipInstance.src = `images/${this.imageName}`;
  }

  draw() {
    this.ctx.drawImage(
      this.shipInstance,
      this.shipPos.x,
      this.shipPos.y,
      this.shipSize.w,
      this.shipSize.h
    );
  }
  moveShip() {
    this.shipPos.x -= this.speed;
  }
  stop() {
    if (this.shipPos.x <= this.canvasSize.w - 320) {
      this.speed = 0;
    }
  }
}
