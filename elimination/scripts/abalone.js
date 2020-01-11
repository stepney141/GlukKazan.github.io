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
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("abalone-extension", "true");
    design.checkVersion("abalone-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("sw");
    design.addDirection("bc");
    design.addDirection("wc");

    design.addPlayer("Black", [1, 0, 5, 4, 3, 2, 6, 7]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 7, 6]);

    design.addPosition("a9", [0, 1, 0, 10, 0, 9, 92, 81]);
    design.addPosition("b9", [-1, 1, 0, 10, 0, 9, 0, 0]);
    design.addPosition("c9", [-1, 1, 0, 10, 0, 9, 0, 0]);
    design.addPosition("d9", [-1, 1, 0, 10, 0, 9, 0, 0]);
    design.addPosition("e9", [-1, 0, 0, 10, 0, 9, 0, 0]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, -9, 10, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f8", [-1, 0, 0, 10, -10, 9, 0, 0]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, -9, 10, 0, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g7", [-1, 0, 0, 10, -10, 9, 0, 0]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, -9, 10, 0, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h6", [-1, 0, 0, 10, -10, 9, 0, 0]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, -9, 10, 0, 0, 0, 0]);
    design.addPosition("b5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i5", [-1, 0, 0, 0, -10, 9, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 1, -9, 10, -10, 0, 0, 0]);
    design.addPosition("c4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i4", [-1, 0, -9, 0, -10, 9, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 1, -9, 10, -10, 0, 0, 0]);
    design.addPosition("d3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i3", [-1, 0, -9, 0, -10, 9, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 1, -9, 10, -10, 0, 0, 0]);
    design.addPosition("e2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i2", [-1, 0, -9, 0, -10, 9, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("f1", [-1, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("g1", [-1, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("h1", [-1, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("i1", [-1, 0, -9, 0, -10, 0, 0, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("e10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("f10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a0", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("c0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("d0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("e0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("f0", [0, 0, 0, 0, 0, 0, -1, 0]);

    design.addZone("off-zone", 2, [87, 88, 89, 90, 91, 92, 81, 82, 83, 84, 85, 86]);
    design.addZone("off-zone", 1, [87, 88, 89, 90, 91, 92, 81, 82, 83, 84, 85, 86]);

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

    design.addPiece("Captured", 1);

    design.addPiece("Place", 2);

    design.setupSelector(8);

    design.setup("Black", "Place", 81);
    design.setup("Black", "Place", 82);
    design.setup("Black", "Place", 83);
    design.setup("Black", "Place", 84);
    design.setup("Black", "Place", 85);
    design.setup("Black", "Place", 86);
    design.setup("White", "Place", 87);
    design.setup("White", "Place", 88);
    design.setup("White", "Place", 89);
    design.setup("White", "Place", 90);
    design.setup("White", "Place", 91);
    design.setup("White", "Place", 92);

    design.setup("White", "Stone", 0, 1);
    design.setup("White", "Stone", 1, 1);
    design.setup("White", "Stone", 2, 1);
    design.setup("White", "Stone", 3, 1);
    design.setup("White", "Stone", 4, 1);
    design.setup("White", "Stone", 9, 1);
    design.setup("White", "Stone", 10, 1);
    design.setup("White", "Stone", 11, 1);
    design.setup("White", "Stone", 12, 1);
    design.setup("White", "Stone", 13, 1);
    design.setup("White", "Stone", 14, 1);
    design.setup("White", "Stone", 20, 1);
    design.setup("White", "Stone", 21, 1);
    design.setup("White", "Stone", 22, 1);
    design.setup("Black", "Stone", 76, 1);
    design.setup("Black", "Stone", 77, 1);
    design.setup("Black", "Stone", 78, 1);
    design.setup("Black", "Stone", 79, 1);
    design.setup("Black", "Stone", 80, 1);
    design.setup("Black", "Stone", 66, 1);
    design.setup("Black", "Stone", 67, 1);
    design.setup("Black", "Stone", 68, 1);
    design.setup("Black", "Stone", 69, 1);
    design.setup("Black", "Stone", 70, 1);
    design.setup("Black", "Stone", 71, 1);
    design.setup("Black", "Stone", 58, 1);
    design.setup("Black", "Stone", 59, 1);
    design.setup("Black", "Stone", 60, 1);

    design.setup("Black", "Stone", 11, 2);
    design.setup("Black", "Stone", 12, 2);
    design.setup("Black", "Stone", 20, 2);
    design.setup("Black", "Stone", 22, 2);
    design.setup("Black", "Stone", 49, 2);
    design.setup("Black", "Stone", 50, 2);
    design.setup("Black", "Stone", 57, 2);
    design.setup("Black", "Stone", 59, 2);
    design.setup("Black", "Stone", 61, 2);
    design.setup("Black", "Stone", 67, 2);
    design.setup("Black", "Stone", 70, 2);
    design.setup("Black", "Stone", 76, 2);
    design.setup("Black", "Stone", 78, 2);
    design.setup("Black", "Stone", 80, 2);
    design.setup("White", "Stone", 68, 2);
    design.setup("White", "Stone", 69, 2);
    design.setup("White", "Stone", 58, 2);
    design.setup("White", "Stone", 60, 2);
    design.setup("White", "Stone", 0, 2);
    design.setup("White", "Stone", 2, 2);
    design.setup("White", "Stone", 4, 2);
    design.setup("White", "Stone", 10, 2);
    design.setup("White", "Stone", 13, 2);
    design.setup("White", "Stone", 19, 2);
    design.setup("White", "Stone", 21, 2);
    design.setup("White", "Stone", 23, 2);
    design.setup("White", "Stone", 30, 2);
    design.setup("White", "Stone", 31, 2);

    design.setup("Black", "Stone", 0, 3);
    design.setup("Black", "Stone", 1, 3);
    design.setup("Black", "Stone", 9, 3);
    design.setup("Black", "Stone", 13, 3);
    design.setup("Black", "Stone", 11, 3);
    design.setup("Black", "Stone", 19, 3);
    design.setup("Black", "Stone", 20, 3);
    design.setup("Black", "Stone", 60, 3);
    design.setup("Black", "Stone", 61, 3);
    design.setup("Black", "Stone", 69, 3);
    design.setup("Black", "Stone", 67, 3);
    design.setup("Black", "Stone", 71, 3);
    design.setup("Black", "Stone", 79, 3);
    design.setup("Black", "Stone", 80, 3);
    design.setup("White", "Stone", 3, 3);
    design.setup("White", "Stone", 4, 3);
    design.setup("White", "Stone", 12, 3);
    design.setup("White", "Stone", 10, 3);
    design.setup("White", "Stone", 14, 3);
    design.setup("White", "Stone", 22, 3);
    design.setup("White", "Stone", 23, 3);
    design.setup("White", "Stone", 57, 3);
    design.setup("White", "Stone", 58, 3);
    design.setup("White", "Stone", 66, 3);
    design.setup("White", "Stone", 70, 3);
    design.setup("White", "Stone", 68, 3);
    design.setup("White", "Stone", 76, 3);
    design.setup("White", "Stone", 77, 3);

    design.setup("Black", "Stone", 11, 4);
    design.setup("Black", "Stone", 12, 4);
    design.setup("Black", "Stone", 21, 4);
    design.setup("Black", "Stone", 49, 4);
    design.setup("Black", "Stone", 50, 4);
    design.setup("Black", "Stone", 58, 4);
    design.setup("Black", "Stone", 60, 4);
    design.setup("Black", "Stone", 67, 4);
    design.setup("Black", "Stone", 70, 4);
    design.setup("Black", "Stone", 76, 4);
    design.setup("Black", "Stone", 77, 4);
    design.setup("Black", "Stone", 78, 4);
    design.setup("Black", "Stone", 79, 4);
    design.setup("Black", "Stone", 80, 4);
    design.setup("White", "Stone", 68, 4);
    design.setup("White", "Stone", 69, 4);
    design.setup("White", "Stone", 59, 4);
    design.setup("White", "Stone", 0, 4);
    design.setup("White", "Stone", 1, 4);
    design.setup("White", "Stone", 2, 4);
    design.setup("White", "Stone", 3, 4);
    design.setup("White", "Stone", 4, 4);
    design.setup("White", "Stone", 10, 4);
    design.setup("White", "Stone", 13, 4);
    design.setup("White", "Stone", 20, 4);
    design.setup("White", "Stone", 22, 4);
    design.setup("White", "Stone", 30, 4);
    design.setup("White", "Stone", 31, 4);

    design.setup("Black", "Stone", 0, 5);
    design.setup("Black", "Stone", 1, 5);
    design.setup("Black", "Stone", 9, 5);
    design.setup("Black", "Stone", 10, 5);
    design.setup("Black", "Stone", 11, 5);
    design.setup("Black", "Stone", 19, 5);
    design.setup("Black", "Stone", 20, 5);
    design.setup("Black", "Stone", 60, 5);
    design.setup("Black", "Stone", 61, 5);
    design.setup("Black", "Stone", 69, 5);
    design.setup("Black", "Stone", 70, 5);
    design.setup("Black", "Stone", 71, 5);
    design.setup("Black", "Stone", 79, 5);
    design.setup("Black", "Stone", 80, 5);
    design.setup("White", "Stone", 3, 5);
    design.setup("White", "Stone", 4, 5);
    design.setup("White", "Stone", 12, 5);
    design.setup("White", "Stone", 13, 5);
    design.setup("White", "Stone", 14, 5);
    design.setup("White", "Stone", 22, 5);
    design.setup("White", "Stone", 23, 5);
    design.setup("White", "Stone", 57, 5);
    design.setup("White", "Stone", 58, 5);
    design.setup("White", "Stone", 66, 5);
    design.setup("White", "Stone", 67, 5);
    design.setup("White", "Stone", 68, 5);
    design.setup("White", "Stone", 76, 5);
    design.setup("White", "Stone", 77, 5);

    design.setup("Black", "Stone", 49, 6);
    design.setup("Black", "Stone", 50, 6);
    design.setup("Black", "Stone", 41, 6);
    design.setup("Black", "Stone", 32, 6);
    design.setup("Black", "Stone", 33, 6);
    design.setup("Black", "Stone", 43, 6);
    design.setup("Black", "Stone", 53, 6);
    design.setup("Black", "Stone", 62, 6);
    design.setup("Black", "Stone", 71, 6);
    design.setup("Black", "Stone", 80, 6);
    design.setup("Black", "Stone", 79, 6);
    design.setup("Black", "Stone", 78, 6);
    design.setup("Black", "Stone", 77, 6);
    design.setup("Black", "Stone", 76, 6);
    design.setup("White", "Stone", 31, 6);
    design.setup("White", "Stone", 30, 6);
    design.setup("White", "Stone", 39, 6);
    design.setup("White", "Stone", 48, 6);
    design.setup("White", "Stone", 47, 6);
    design.setup("White", "Stone", 37, 6);
    design.setup("White", "Stone", 27, 6);
    design.setup("White", "Stone", 18, 6);
    design.setup("White", "Stone", 9, 6);
    design.setup("White", "Stone", 0, 6);
    design.setup("White", "Stone", 1, 6);
    design.setup("White", "Stone", 2, 6);
    design.setup("White", "Stone", 3, 6);
    design.setup("White", "Stone", 4, 6);

    design.setup("Black", "Stone", 9, 7);
    design.setup("Black", "Stone", 10, 7);
    design.setup("Black", "Stone", 18, 7);
    design.setup("Black", "Stone", 23, 7);
    design.setup("Black", "Stone", 20, 7);
    design.setup("Black", "Stone", 28, 7);
    design.setup("Black", "Stone", 29, 7);
    design.setup("Black", "Stone", 51, 7);
    design.setup("Black", "Stone", 52, 7);
    design.setup("Black", "Stone", 60, 7);
    design.setup("Black", "Stone", 57, 7);
    design.setup("Black", "Stone", 62, 7);
    design.setup("Black", "Stone", 70, 7);
    design.setup("Black", "Stone", 71, 7);
    design.setup("White", "Stone", 13, 7);
    design.setup("White", "Stone", 14, 7);
    design.setup("White", "Stone", 22, 7);
    design.setup("White", "Stone", 19, 7);
    design.setup("White", "Stone", 24, 7);
    design.setup("White", "Stone", 32, 7);
    design.setup("White", "Stone", 33, 7);
    design.setup("White", "Stone", 47, 7);
    design.setup("White", "Stone", 48, 7);
    design.setup("White", "Stone", 56, 7);
    design.setup("White", "Stone", 61, 7);
    design.setup("White", "Stone", 58, 7);
    design.setup("White", "Stone", 66, 7);
    design.setup("White", "Stone", 67, 7);

    design.setup("Black", "Stone", 46, 8);
    design.setup("Black", "Stone", 47, 8);
    design.setup("Black", "Stone", 48, 8);
    design.setup("Black", "Stone", 49, 8);
    design.setup("Black", "Stone", 50, 8);
    design.setup("Black", "Stone", 51, 8);
    design.setup("Black", "Stone", 52, 8);
    design.setup("Black", "Stone", 53, 8);
    design.setup("Black", "Stone", 57, 8);
    design.setup("Black", "Stone", 58, 8);
    design.setup("Black", "Stone", 59, 8);
    design.setup("Black", "Stone", 60, 8);
    design.setup("Black", "Stone", 61, 8);
    design.setup("Black", "Stone", 78, 8);
    design.setup("White", "Stone", 27, 8);
    design.setup("White", "Stone", 28, 8);
    design.setup("White", "Stone", 29, 8);
    design.setup("White", "Stone", 30, 8);
    design.setup("White", "Stone", 31, 8);
    design.setup("White", "Stone", 32, 8);
    design.setup("White", "Stone", 33, 8);
    design.setup("White", "Stone", 34, 8);
    design.setup("White", "Stone", 19, 8);
    design.setup("White", "Stone", 20, 8);
    design.setup("White", "Stone", 21, 8);
    design.setup("White", "Stone", 22, 8);
    design.setup("White", "Stone", 23, 8);
    design.setup("White", "Stone", 2, 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackCaptured", "Black Captured");
    view.defPiece("WhiteCaptured", "White Captured");
    view.defPiece("BlackPlace", "Black Place");
    view.defPiece("WhitePlace", "White Place");
 
    view.defPosition("a9", 141, 85, 46, 40);
    view.defPosition("b9", 187, 85, 46, 40);
    view.defPosition("c9", 233, 85, 46, 40);
    view.defPosition("d9", 279, 85, 46, 40);
    view.defPosition("e9", 325, 85, 46, 40);
    view.defPosition("f9", 371, 85, 46, 40);
    view.defPosition("g9", 417, 85, 46, 40);
    view.defPosition("h9", 463, 85, 46, 40);
    view.defPosition("i9", 509, 85, 46, 40);
    view.defPosition("a8", 118, 125, 46, 40);
    view.defPosition("b8", 164, 125, 46, 40);
    view.defPosition("c8", 210, 125, 46, 40);
    view.defPosition("d8", 256, 125, 46, 40);
    view.defPosition("e8", 302, 125, 46, 40);
    view.defPosition("f8", 348, 125, 46, 40);
    view.defPosition("g8", 394, 125, 46, 40);
    view.defPosition("h8", 440, 125, 46, 40);
    view.defPosition("i8", 486, 125, 46, 40);
    view.defPosition("a7", 95, 165, 46, 40);
    view.defPosition("b7", 141, 165, 46, 40);
    view.defPosition("c7", 187, 165, 46, 40);
    view.defPosition("d7", 233, 165, 46, 40);
    view.defPosition("e7", 279, 165, 46, 40);
    view.defPosition("f7", 325, 165, 46, 40);
    view.defPosition("g7", 371, 165, 46, 40);
    view.defPosition("h7", 417, 165, 46, 40);
    view.defPosition("i7", 463, 165, 46, 40);
    view.defPosition("a6", 72, 205, 46, 40);
    view.defPosition("b6", 118, 205, 46, 40);
    view.defPosition("c6", 164, 205, 46, 40);
    view.defPosition("d6", 210, 205, 46, 40);
    view.defPosition("e6", 256, 205, 46, 40);
    view.defPosition("f6", 302, 205, 46, 40);
    view.defPosition("g6", 348, 205, 46, 40);
    view.defPosition("h6", 394, 205, 46, 40);
    view.defPosition("i6", 440, 205, 46, 40);
    view.defPosition("a5", 49, 245, 46, 40);
    view.defPosition("b5", 95, 245, 46, 40);
    view.defPosition("c5", 141, 245, 46, 40);
    view.defPosition("d5", 187, 245, 46, 40);
    view.defPosition("e5", 233, 245, 46, 40);
    view.defPosition("f5", 279, 245, 46, 40);
    view.defPosition("g5", 325, 245, 46, 40);
    view.defPosition("h5", 371, 245, 46, 40);
    view.defPosition("i5", 417, 245, 46, 40);
    view.defPosition("a4", 26, 285, 46, 40);
    view.defPosition("b4", 72, 285, 46, 40);
    view.defPosition("c4", 118, 285, 46, 40);
    view.defPosition("d4", 164, 285, 46, 40);
    view.defPosition("e4", 210, 285, 46, 40);
    view.defPosition("f4", 256, 285, 46, 40);
    view.defPosition("g4", 302, 285, 46, 40);
    view.defPosition("h4", 348, 285, 46, 40);
    view.defPosition("i4", 394, 285, 46, 40);
    view.defPosition("a3", 3, 325, 46, 40);
    view.defPosition("b3", 49, 325, 46, 40);
    view.defPosition("c3", 95, 325, 46, 40);
    view.defPosition("d3", 141, 325, 46, 40);
    view.defPosition("e3", 187, 325, 46, 40);
    view.defPosition("f3", 233, 325, 46, 40);
    view.defPosition("g3", 279, 325, 46, 40);
    view.defPosition("h3", 325, 325, 46, 40);
    view.defPosition("i3", 371, 325, 46, 40);
    view.defPosition("a2", -20, 365, 46, 40);
    view.defPosition("b2", 26, 365, 46, 40);
    view.defPosition("c2", 72, 365, 46, 40);
    view.defPosition("d2", 118, 365, 46, 40);
    view.defPosition("e2", 164, 365, 46, 40);
    view.defPosition("f2", 210, 365, 46, 40);
    view.defPosition("g2", 256, 365, 46, 40);
    view.defPosition("h2", 302, 365, 46, 40);
    view.defPosition("i2", 348, 365, 46, 40);
    view.defPosition("a1", -43, 405, 46, 40);
    view.defPosition("b1", 3, 405, 46, 40);
    view.defPosition("c1", 49, 405, 46, 40);
    view.defPosition("d1", 95, 405, 46, 40);
    view.defPosition("e1", 141, 405, 46, 40);
    view.defPosition("f1", 187, 405, 46, 40);
    view.defPosition("g1", 233, 405, 46, 40);
    view.defPosition("h1", 279, 405, 46, 40);
    view.defPosition("i1", 325, 405, 46, 40);
    view.defPosition("a10", 3, 4, 46, 40);
    view.defPosition("b10", 49, 4, 46, 40);
    view.defPosition("c10", 95, 4, 46, 40);
    view.defPosition("d10", 141, 4, 46, 40);
    view.defPosition("e10", 187, 4, 46, 40);
    view.defPosition("f10", 233, 4, 46, 40);
    view.defPosition("a0", 230, 485, 46, 40);
    view.defPosition("b0", 276, 485, 46, 40);
    view.defPosition("c0", 322, 485, 46, 40);
    view.defPosition("d0", 368, 485, 46, 40);
    view.defPosition("e0", 414, 485, 46, 40);
    view.defPosition("f0", 460, 485, 46, 40);
}
