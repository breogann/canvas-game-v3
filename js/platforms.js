class Platforms {
  constructor(ctx, canvasSize, posX, posY, width, height) {
    //Constants
    this.ctx = ctx;
    this.canvasSize = canvasSize;

    //Size
    this.platformSize = {
      w: width,
      h: height,
    };
    //Position
    this.platformPos = {
      x: posX,
      y: posY,
    };
    this.platformFloor = this.posY;

    //Loading image
    this.imageName = "platform.png";
    this.platformInstance = new Image();
    this.platformInstance.src = `images/${this.imageName}`;
  }

  draw() {
    this.ctx.drawImage(
      this.platformInstance,
      this.platformPos.x,
      this.platformPos.y,
      this.platformSize.w,
      this.platformSize.h
    );
  }
  move() {
    this.platformPos.x -= 5;
  }
}
