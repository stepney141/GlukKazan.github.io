Dagaz.View.SHIFT_X = -2;

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("abalone-extension", "true");
    design.checkVersion("abalone-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("sw");

    design.addPlayer("Black", [1, 0, 5, 4, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a9", [0, 1, 0, 10, 0, 9]);
    design.addPosition("b9", [-1, 1, 0, 10, 0, 9]);
    design.addPosition("c9", [-1, 1, 0, 10, 0, 9]);
    design.addPosition("d9", [-1, 1, 0, 10, 0, 9]);
    design.addPosition("e9", [-1, 0, 0, 10, 0, 9]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, -9, 10, 0, 9]);
    design.addPosition("b8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f8", [-1, 0, 0, 10, -10, 9]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, -9, 10, 0, 9]);
    design.addPosition("b7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g7", [-1, 0, 0, 10, -10, 9]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, -9, 10, 0, 9]);
    design.addPosition("b6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h6", [-1, 0, 0, 10, -10, 9]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, -9, 10, 0, 0]);
    design.addPosition("b5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i5", [-1, 0, 0, 0, -10, 9]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 1, -9, 10, -10, 0]);
    design.addPosition("c4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i4", [-1, 0, -9, 0, -10, 9]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 1, -9, 10, -10, 0]);
    design.addPosition("d3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i3", [-1, 0, -9, 0, -10, 9]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 1, -9, 10, -10, 0]);
    design.addPosition("e2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i2", [-1, 0, -9, 0, -10, 9]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 1, -9, 0, -10, 0]);
    design.addPosition("f1", [-1, 1, -9, 0, -10, 0]);
    design.addPosition("g1", [-1, 1, -9, 0, -10, 0]);
    design.addPosition("h1", [-1, 1, -9, 0, -10, 0]);
    design.addPosition("i1", [-1, 0, -9, 0, -10, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-14);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-14);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-14);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-14);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-14);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.LITERAL,	1);	// true
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.LITERAL,	0);	// false
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-14);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 2, [0, 0], 0);
    design.addMove(0, 3, [2, 2], 0);
    design.addMove(0, 4, [5, 5], 0);
    design.addMove(0, 5, [4, 4], 0);
    design.addMove(0, 6, [3, 3], 0);
    design.addMove(0, 7, [4, 0, 4], 0);
    design.addMove(0, 7, [2, 0, 2], 0);
    design.addMove(0, 7, [5, 0, 5], 0);
    design.addMove(0, 7, [3, 0, 3], 0);
    design.addMove(0, 8, [4, 0, 4, 0, 4], 0);
    design.addMove(0, 8, [2, 0, 2, 0, 2], 0);
    design.addMove(0, 8, [5, 0, 5, 0, 5], 0);
    design.addMove(0, 8, [3, 0, 3, 0, 3], 0);
    design.addMove(0, 7, [2, 4, 2], 0);
    design.addMove(0, 7, [1, 4, 1], 0);
    design.addMove(0, 7, [5, 4, 5], 0);
    design.addMove(0, 7, [0, 4, 0], 0);
    design.addMove(0, 8, [2, 4, 2, 4, 2], 0);
    design.addMove(0, 8, [1, 4, 1, 4, 1], 0);
    design.addMove(0, 8, [5, 4, 5, 4, 5], 0);
    design.addMove(0, 8, [0, 4, 0, 4, 0], 0);
    design.addMove(0, 7, [4, 2, 4], 0);
    design.addMove(0, 7, [0, 2, 0], 0);
    design.addMove(0, 7, [3, 2, 3], 0);
    design.addMove(0, 7, [1, 2, 1], 0);
    design.addMove(0, 8, [4, 2, 4, 2, 4], 0);
    design.addMove(0, 8, [0, 2, 0, 2, 0], 0);
    design.addMove(0, 8, [3, 2, 3, 2, 3], 0);
    design.addMove(0, 8, [1, 2, 1, 2, 1], 0);

    design.setup("Black", "Stone", 11);
    design.setup("Black", "Stone", 12);
    design.setup("Black", "Stone", 20);
    design.setup("Black", "Stone", 22);
    design.setup("Black", "Stone", 49);
    design.setup("Black", "Stone", 50);
    design.setup("Black", "Stone", 57);
    design.setup("Black", "Stone", 59);
    design.setup("Black", "Stone", 61);
    design.setup("Black", "Stone", 67);
    design.setup("Black", "Stone", 70);
    design.setup("Black", "Stone", 76);
    design.setup("Black", "Stone", 78);
    design.setup("Black", "Stone", 80);
    design.setup("White", "Stone", 68);
    design.setup("White", "Stone", 69);
    design.setup("White", "Stone", 58);
    design.setup("White", "Stone", 60);
    design.setup("White", "Stone", 0);
    design.setup("White", "Stone", 2);
    design.setup("White", "Stone", 4);
    design.setup("White", "Stone", 10);
    design.setup("White", "Stone", 13);
    design.setup("White", "Stone", 19);
    design.setup("White", "Stone", 21);
    design.setup("White", "Stone", 23);
    design.setup("White", "Stone", 30);
    design.setup("White", "Stone", 31);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("a9", 141, 75, 46, 40);
    view.defPosition("b9", 187, 75, 46, 40);
    view.defPosition("c9", 233, 75, 46, 40);
    view.defPosition("d9", 279, 75, 46, 40);
    view.defPosition("e9", 325, 75, 46, 40);
    view.defPosition("f9", 371, 75, 46, 40);
    view.defPosition("g9", 417, 75, 46, 40);
    view.defPosition("h9", 463, 75, 46, 40);
    view.defPosition("i9", 509, 75, 46, 40);
    view.defPosition("a8", 118, 115, 46, 40);
    view.defPosition("b8", 164, 115, 46, 40);
    view.defPosition("c8", 210, 115, 46, 40);
    view.defPosition("d8", 256, 115, 46, 40);
    view.defPosition("e8", 302, 115, 46, 40);
    view.defPosition("f8", 348, 115, 46, 40);
    view.defPosition("g8", 394, 115, 46, 40);
    view.defPosition("h8", 440, 115, 46, 40);
    view.defPosition("i8", 486, 115, 46, 40);
    view.defPosition("a7", 95, 155, 46, 40);
    view.defPosition("b7", 141, 155, 46, 40);
    view.defPosition("c7", 187, 155, 46, 40);
    view.defPosition("d7", 233, 155, 46, 40);
    view.defPosition("e7", 279, 155, 46, 40);
    view.defPosition("f7", 325, 155, 46, 40);
    view.defPosition("g7", 371, 155, 46, 40);
    view.defPosition("h7", 417, 155, 46, 40);
    view.defPosition("i7", 463, 155, 46, 40);
    view.defPosition("a6", 72, 195, 46, 40);
    view.defPosition("b6", 118, 195, 46, 40);
    view.defPosition("c6", 164, 195, 46, 40);
    view.defPosition("d6", 210, 195, 46, 40);
    view.defPosition("e6", 256, 195, 46, 40);
    view.defPosition("f6", 302, 195, 46, 40);
    view.defPosition("g6", 348, 195, 46, 40);
    view.defPosition("h6", 394, 195, 46, 40);
    view.defPosition("i6", 440, 195, 46, 40);
    view.defPosition("a5", 49, 235, 46, 40);
    view.defPosition("b5", 95, 235, 46, 40);
    view.defPosition("c5", 141, 235, 46, 40);
    view.defPosition("d5", 187, 235, 46, 40);
    view.defPosition("e5", 233, 235, 46, 40);
    view.defPosition("f5", 279, 235, 46, 40);
    view.defPosition("g5", 325, 235, 46, 40);
    view.defPosition("h5", 371, 235, 46, 40);
    view.defPosition("i5", 417, 235, 46, 40);
    view.defPosition("a4", 26, 275, 46, 40);
    view.defPosition("b4", 72, 275, 46, 40);
    view.defPosition("c4", 118, 275, 46, 40);
    view.defPosition("d4", 164, 275, 46, 40);
    view.defPosition("e4", 210, 275, 46, 40);
    view.defPosition("f4", 256, 275, 46, 40);
    view.defPosition("g4", 302, 275, 46, 40);
    view.defPosition("h4", 348, 275, 46, 40);
    view.defPosition("i4", 394, 275, 46, 40);
    view.defPosition("a3", 3, 315, 46, 40);
    view.defPosition("b3", 49, 315, 46, 40);
    view.defPosition("c3", 95, 315, 46, 40);
    view.defPosition("d3", 141, 315, 46, 40);
    view.defPosition("e3", 187, 315, 46, 40);
    view.defPosition("f3", 233, 315, 46, 40);
    view.defPosition("g3", 279, 315, 46, 40);
    view.defPosition("h3", 325, 315, 46, 40);
    view.defPosition("i3", 371, 315, 46, 40);
    view.defPosition("a2", -20, 355, 46, 40);
    view.defPosition("b2", 26, 355, 46, 40);
    view.defPosition("c2", 72, 355, 46, 40);
    view.defPosition("d2", 118, 355, 46, 40);
    view.defPosition("e2", 164, 355, 46, 40);
    view.defPosition("f2", 210, 355, 46, 40);
    view.defPosition("g2", 256, 355, 46, 40);
    view.defPosition("h2", 302, 355, 46, 40);
    view.defPosition("i2", 348, 355, 46, 40);
    view.defPosition("a1", -43, 395, 46, 40);
    view.defPosition("b1", 3, 395, 46, 40);
    view.defPosition("c1", 49, 395, 46, 40);
    view.defPosition("d1", 95, 395, 46, 40);
    view.defPosition("e1", 141, 395, 46, 40);
    view.defPosition("f1", 187, 395, 46, 40);
    view.defPosition("g1", 233, 395, 46, 40);
    view.defPosition("h1", 279, 395, 46, 40);
    view.defPosition("i1", 325, 395, 46, 40);
}