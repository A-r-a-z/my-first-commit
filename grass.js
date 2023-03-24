class Grass {
    // this = {}
    constructor(x, y) { // 0, 1
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) { // 0

        var found = [];

        for (var i = 0; i < this.directions.length; i++) { // var i in this.directions
            var x = this.directions[i][0]; // x  = this.x - 1
            var y = this.directions[i][1]; // y = this.y - 1
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    // var matrix = [
                                            
    //     [1, 0, 1, 0, 0],
    //     [0, 0, 0, 1, 0],
    //     [0, 1, 0, 0, 0],
    //     [0, 0, 1, 0, 0],
    // 
    // ]
     
    mull() {
        this.multiply++; // 1
        var newCell = random(this.chooseCell(0));

        if (this.multiply >= 4 && newCell) {

            var newGrass = new Grass(newCell[0], newCell[1]);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;

        }
    }

    // return this
}