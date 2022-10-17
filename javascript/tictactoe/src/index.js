/*----- constants -----*/
/*----- app's state (variables) -----*/
let Board;

function init() {
    Board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    };
    //be sure to call the init function!
init();

function () {
    Board.forEach (function(mark, index)
    {
        console.log(mark, index)
    })
}
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/