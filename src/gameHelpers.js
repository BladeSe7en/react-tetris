export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // 1: check that were on an actual tetro cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // 2: check that our move is inside the game area's height (y)
                    // we shouldnt go through the bottom of the play area
                    !stage[y + player.pos.y + moveY] ||
                    // 3: check that our move is inside the game area width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4: check that the cell that were moving to is not set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
}
