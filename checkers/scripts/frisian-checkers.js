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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("maximal-captures", "2");
    design.checkVersion("deferred-captures", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("international-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a10", [0, 2, 20, 0, 0, 11, 0, 0]);
    design.addPosition("b10", [0, 2, 20, 0, 0, 11, 9, 0]);
    design.addPosition("c10", [-2, 2, 20, 0, 0, 11, 9, 0]);
    design.addPosition("d10", [-2, 2, 20, 0, 0, 11, 9, 0]);
    design.addPosition("e10", [-2, 2, 20, 0, 0, 11, 9, 0]);
    design.addPosition("f10", [-2, 2, 20, 0, 0, 11, 9, 0]);
    design.addPosition("g10", [-2, 2, 20, 0, 0, 11, 9, 0]);
    design.addPosition("h10", [-2, 2, 20, 0, 0, 11, 9, 0]);
    design.addPosition("i10", [-2, 0, 20, 0, 0, 11, 9, 0]);
    design.addPosition("j10", [-2, 0, 20, 0, 0, 0, 9, 0]);
    design.addPosition("a9", [0, 2, 20, -9, 0, 11, 0, 0]);
    design.addPosition("b9", [0, 2, 20, -9, 0, 11, 9, -11]);
    design.addPosition("c9", [-2, 2, 20, -9, 0, 11, 9, -11]);
    design.addPosition("d9", [-2, 2, 20, -9, 0, 11, 9, -11]);
    design.addPosition("e9", [-2, 2, 20, -9, 0, 11, 9, -11]);
    design.addPosition("f9", [-2, 2, 20, -9, 0, 11, 9, -11]);
    design.addPosition("g9", [-2, 2, 20, -9, 0, 11, 9, -11]);
    design.addPosition("h9", [-2, 2, 20, -9, 0, 11, 9, -11]);
    design.addPosition("i9", [-2, 0, 20, -9, 0, 11, 9, -11]);
    design.addPosition("j9", [-2, 0, 20, 0, 0, 0, 9, -11]);
    design.addPosition("a8", [0, 2, 20, -9, -20, 11, 0, 0]);
    design.addPosition("b8", [0, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("c8", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("d8", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("e8", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("f8", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("g8", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("h8", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("i8", [-2, 0, 20, -9, -20, 11, 9, -11]);
    design.addPosition("j8", [-2, 0, 20, 0, -20, 0, 9, -11]);
    design.addPosition("a7", [0, 2, 20, -9, -20, 11, 0, 0]);
    design.addPosition("b7", [0, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("c7", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("d7", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("e7", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("f7", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("g7", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("h7", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("i7", [-2, 0, 20, -9, -20, 11, 9, -11]);
    design.addPosition("j7", [-2, 0, 20, 0, -20, 0, 9, -11]);
    design.addPosition("a6", [0, 2, 20, -9, -20, 11, 0, 0]);
    design.addPosition("b6", [0, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("c6", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("d6", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("e6", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("f6", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("g6", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("h6", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("i6", [-2, 0, 20, -9, -20, 11, 9, -11]);
    design.addPosition("j6", [-2, 0, 20, 0, -20, 0, 9, -11]);
    design.addPosition("a5", [0, 2, 20, -9, -20, 11, 0, 0]);
    design.addPosition("b5", [0, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("c5", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("d5", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("e5", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("f5", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("g5", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("h5", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("i5", [-2, 0, 20, -9, -20, 11, 9, -11]);
    design.addPosition("j5", [-2, 0, 20, 0, -20, 0, 9, -11]);
    design.addPosition("a4", [0, 2, 20, -9, -20, 11, 0, 0]);
    design.addPosition("b4", [0, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("c4", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("d4", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("e4", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("f4", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("g4", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("h4", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("i4", [-2, 0, 20, -9, -20, 11, 9, -11]);
    design.addPosition("j4", [-2, 0, 20, 0, -20, 0, 9, -11]);
    design.addPosition("a3", [0, 2, 20, -9, -20, 11, 0, 0]);
    design.addPosition("b3", [0, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("c3", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("d3", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("e3", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("f3", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("g3", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("h3", [-2, 2, 20, -9, -20, 11, 9, -11]);
    design.addPosition("i3", [-2, 0, 20, -9, -20, 11, 9, -11]);
    design.addPosition("j3", [-2, 0, 20, 0, -20, 0, 9, -11]);
    design.addPosition("a2", [0, 2, 0, -9, -20, 11, 0, 0]);
    design.addPosition("b2", [0, 2, 0, -9, -20, 11, 9, -11]);
    design.addPosition("c2", [-2, 2, 0, -9, -20, 11, 9, -11]);
    design.addPosition("d2", [-2, 2, 0, -9, -20, 11, 9, -11]);
    design.addPosition("e2", [-2, 2, 0, -9, -20, 11, 9, -11]);
    design.addPosition("f2", [-2, 2, 0, -9, -20, 11, 9, -11]);
    design.addPosition("g2", [-2, 2, 0, -9, -20, 11, 9, -11]);
    design.addPosition("h2", [-2, 2, 0, -9, -20, 11, 9, -11]);
    design.addPosition("i2", [-2, 0, 0, -9, -20, 11, 9, -11]);
    design.addPosition("j2", [-2, 0, 0, 0, -20, 0, 9, -11]);
    design.addPosition("a1", [0, 2, 0, -9, -20, 0, 0, 0]);
    design.addPosition("b1", [0, 2, 0, -9, -20, 0, 0, -11]);
    design.addPosition("c1", [-2, 2, 0, -9, -20, 0, 0, -11]);
    design.addPosition("d1", [-2, 2, 0, -9, -20, 0, 0, -11]);
    design.addPosition("e1", [-2, 2, 0, -9, -20, 0, 0, -11]);
    design.addPosition("f1", [-2, 2, 0, -9, -20, 0, 0, -11]);
    design.addPosition("g1", [-2, 2, 0, -9, -20, 0, 0, -11]);
    design.addPosition("h1", [-2, 2, 0, -9, -20, 0, 0, -11]);
    design.addPosition("i1", [-2, 0, 0, -9, -20, 0, 0, -11]);
    design.addPosition("j1", [-2, 0, 0, 0, -20, 0, 0, -11]);

    design.addZone("promotion", 1, [1, 3, 5, 7, 9]);
    design.addZone("promotion", 2, [90, 92, 94, 96, 98]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	18);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-6);
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.MODE,	0);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-19);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 1, [3], 1);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [7, 7, 7, 7, 7], 0, 10);
    design.addMove(1, 2, [3, 3, 3, 3, 3], 0, 10);
    design.addMove(1, 2, [6, 6, 6, 6, 6], 0, 10);
    design.addMove(1, 2, [5, 5, 5, 5, 5], 0, 10);
    design.addMove(1, 2, [4, 4, 4, 4, 4], 0, 10);
    design.addMove(1, 2, [1, 1, 1, 1, 1], 0, 10);
    design.addMove(1, 2, [0, 0, 0, 0, 0], 0, 10);
    design.addMove(1, 2, [2, 2, 2, 2, 2], 0, 10);
    design.addMove(1, 3, [7, 7], 1, 10);
    design.addMove(1, 3, [3, 3], 1, 10);
    design.addMove(1, 3, [6, 6], 1, 10);
    design.addMove(1, 3, [5, 5], 1, 10);

    design.setup("White", "Man", 90);
    design.setup("White", "Man", 92);
    design.setup("White", "Man", 94);
    design.setup("White", "Man", 96);
    design.setup("White", "Man", 98);
    design.setup("White", "Man", 81);
    design.setup("White", "Man", 83);
    design.setup("White", "Man", 85);
    design.setup("White", "Man", 87);
    design.setup("White", "Man", 89);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 74);
    design.setup("White", "Man", 76);
    design.setup("White", "Man", 78);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 63);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 67);
    design.setup("White", "Man", 69);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 23);
    design.setup("Black", "Man", 25);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 29);
    design.setup("Black", "Man", 30);
    design.setup("Black", "Man", 32);
    design.setup("Black", "Man", 34);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 38);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a10", 2, 2, 50, 50);
    view.defPosition("b10", 52, 2, 50, 50);
    view.defPosition("c10", 102, 2, 50, 50);
    view.defPosition("d10", 152, 2, 50, 50);
    view.defPosition("e10", 202, 2, 50, 50);
    view.defPosition("f10", 252, 2, 50, 50);
    view.defPosition("g10", 302, 2, 50, 50);
    view.defPosition("h10", 352, 2, 50, 50);
    view.defPosition("i10", 402, 2, 50, 50);
    view.defPosition("j10", 452, 2, 50, 50);
    view.defPosition("a9", 2, 52, 50, 50);
    view.defPosition("b9", 52, 52, 50, 50);
    view.defPosition("c9", 102, 52, 50, 50);
    view.defPosition("d9", 152, 52, 50, 50);
    view.defPosition("e9", 202, 52, 50, 50);
    view.defPosition("f9", 252, 52, 50, 50);
    view.defPosition("g9", 302, 52, 50, 50);
    view.defPosition("h9", 352, 52, 50, 50);
    view.defPosition("i9", 402, 52, 50, 50);
    view.defPosition("j9", 452, 52, 50, 50);
    view.defPosition("a8", 2, 102, 50, 50);
    view.defPosition("b8", 52, 102, 50, 50);
    view.defPosition("c8", 102, 102, 50, 50);
    view.defPosition("d8", 152, 102, 50, 50);
    view.defPosition("e8", 202, 102, 50, 50);
    view.defPosition("f8", 252, 102, 50, 50);
    view.defPosition("g8", 302, 102, 50, 50);
    view.defPosition("h8", 352, 102, 50, 50);
    view.defPosition("i8", 402, 102, 50, 50);
    view.defPosition("j8", 452, 102, 50, 50);
    view.defPosition("a7", 2, 152, 50, 50);
    view.defPosition("b7", 52, 152, 50, 50);
    view.defPosition("c7", 102, 152, 50, 50);
    view.defPosition("d7", 152, 152, 50, 50);
    view.defPosition("e7", 202, 152, 50, 50);
    view.defPosition("f7", 252, 152, 50, 50);
    view.defPosition("g7", 302, 152, 50, 50);
    view.defPosition("h7", 352, 152, 50, 50);
    view.defPosition("i7", 402, 152, 50, 50);
    view.defPosition("j7", 452, 152, 50, 50);
    view.defPosition("a6", 2, 202, 50, 50);
    view.defPosition("b6", 52, 202, 50, 50);
    view.defPosition("c6", 102, 202, 50, 50);
    view.defPosition("d6", 152, 202, 50, 50);
    view.defPosition("e6", 202, 202, 50, 50);
    view.defPosition("f6", 252, 202, 50, 50);
    view.defPosition("g6", 302, 202, 50, 50);
    view.defPosition("h6", 352, 202, 50, 50);
    view.defPosition("i6", 402, 202, 50, 50);
    view.defPosition("j6", 452, 202, 50, 50);
    view.defPosition("a5", 2, 252, 50, 50);
    view.defPosition("b5", 52, 252, 50, 50);
    view.defPosition("c5", 102, 252, 50, 50);
    view.defPosition("d5", 152, 252, 50, 50);
    view.defPosition("e5", 202, 252, 50, 50);
    view.defPosition("f5", 252, 252, 50, 50);
    view.defPosition("g5", 302, 252, 50, 50);
    view.defPosition("h5", 352, 252, 50, 50);
    view.defPosition("i5", 402, 252, 50, 50);
    view.defPosition("j5", 452, 252, 50, 50);
    view.defPosition("a4", 2, 302, 50, 50);
    view.defPosition("b4", 52, 302, 50, 50);
    view.defPosition("c4", 102, 302, 50, 50);
    view.defPosition("d4", 152, 302, 50, 50);
    view.defPosition("e4", 202, 302, 50, 50);
    view.defPosition("f4", 252, 302, 50, 50);
    view.defPosition("g4", 302, 302, 50, 50);
    view.defPosition("h4", 352, 302, 50, 50);
    view.defPosition("i4", 402, 302, 50, 50);
    view.defPosition("j4", 452, 302, 50, 50);
    view.defPosition("a3", 2, 352, 50, 50);
    view.defPosition("b3", 52, 352, 50, 50);
    view.defPosition("c3", 102, 352, 50, 50);
    view.defPosition("d3", 152, 352, 50, 50);
    view.defPosition("e3", 202, 352, 50, 50);
    view.defPosition("f3", 252, 352, 50, 50);
    view.defPosition("g3", 302, 352, 50, 50);
    view.defPosition("h3", 352, 352, 50, 50);
    view.defPosition("i3", 402, 352, 50, 50);
    view.defPosition("j3", 452, 352, 50, 50);
    view.defPosition("a2", 2, 402, 50, 50);
    view.defPosition("b2", 52, 402, 50, 50);
    view.defPosition("c2", 102, 402, 50, 50);
    view.defPosition("d2", 152, 402, 50, 50);
    view.defPosition("e2", 202, 402, 50, 50);
    view.defPosition("f2", 252, 402, 50, 50);
    view.defPosition("g2", 302, 402, 50, 50);
    view.defPosition("h2", 352, 402, 50, 50);
    view.defPosition("i2", 402, 402, 50, 50);
    view.defPosition("j2", 452, 402, 50, 50);
    view.defPosition("a1", 2, 452, 50, 50);
    view.defPosition("b1", 52, 452, 50, 50);
    view.defPosition("c1", 102, 452, 50, 50);
    view.defPosition("d1", 152, 452, 50, 50);
    view.defPosition("e1", 202, 452, 50, 50);
    view.defPosition("f1", 252, 452, 50, 50);
    view.defPosition("g1", 302, 452, 50, 50);
    view.defPosition("h1", 352, 452, 50, 50);
    view.defPosition("i1", 402, 452, 50, 50);
    view.defPosition("j1", 452, 452, 50, 50);
}
