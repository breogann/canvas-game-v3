class Obstacles {
  constructor(ctx, canvasSize, posX, posY, width, height, speed) {
    //Constants
    this.ctx = ctx;
    this.canvasSize = canvasSize;

    //Position
    this.obstaclePos = { x: posX, y: posY };
    this.obstacleSize = { w: width, h: height };

    //Velocity & acceleration
    this.speed = 5;

    //Loading image
    this.imageName = "obstacle.png";
    this.obstacleInstance = new Image();
    this.obstacleInstance.src = `images/${this.imageName}`;
  }
  draw() {
    this.ctx.drawImage(
      this.obstacleInstance,
      this.obstaclePos.x,
      this.obstaclePos.y,
      this.obstacleSize.w,
      this.obstacleSize.h
    );
  }
  move() {
    this.obstaclePos.x -= this.speed;
  }
}
