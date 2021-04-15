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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("konane-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a8", [0, 1, 8, 0]);
    design.addPosition("b8", [-1, 1, 8, 0]);
    design.addPosition("c8", [-1, 1, 8, 0]);
    design.addPosition("d8", [-1, 1, 8, 0]);
    design.addPosition("e8", [-1, 1, 8, 0]);
    design.addPosition("f8", [-1, 1, 8, 0]);
    design.addPosition("g8", [-1, 1, 8, 0]);
    design.addPosition("h8", [-1, 0, 8, 0]);
    design.addPosition("a7", [0, 1, 8, -8]);
    design.addPosition("b7", [-1, 1, 8, -8]);
    design.addPosition("c7", [-1, 1, 8, -8]);
    design.addPosition("d7", [-1, 1, 8, -8]);
    design.addPosition("e7", [-1, 1, 8, -8]);
    design.addPosition("f7", [-1, 1, 8, -8]);
    design.addPosition("g7", [-1, 1, 8, -8]);
    design.addPosition("h7", [-1, 0, 8, -8]);
    design.addPosition("a6", [0, 1, 8, -8]);
    design.addPosition("b6", [-1, 1, 8, -8]);
    design.addPosition("c6", [-1, 1, 8, -8]);
    design.addPosition("d6", [-1, 1, 8, -8]);
    design.addPosition("e6", [-1, 1, 8, -8]);
    design.addPosition("f6", [-1, 1, 8, -8]);
    design.addPosition("g6", [-1, 1, 8, -8]);
    design.addPosition("h6", [-1, 0, 8, -8]);
    design.addPosition("a5", [0, 1, 8, -8]);
    design.addPosition("b5", [-1, 1, 8, -8]);
    design.addPosition("c5", [-1, 1, 8, -8]);
    design.addPosition("d5", [-1, 1, 8, -8]);
    design.addPosition("e5", [-1, 1, 8, -8]);
    design.addPosition("f5", [-1, 1, 8, -8]);
    design.addPosition("g5", [-1, 1, 8, -8]);
    design.addPosition("h5", [-1, 0, 8, -8]);
    design.addPosition("a4", [0, 1, 8, -8]);
    design.addPosition("b4", [-1, 1, 8, -8]);
    design.addPosition("c4", [-1, 1, 8, -8]);
    design.addPosition("d4", [-1, 1, 8, -8]);
    design.addPosition("e4", [-1, 1, 8, -8]);
    design.addPosition("f4", [-1, 1, 8, -8]);
    design.addPosition("g4", [-1, 1, 8, -8]);
    design.addPosition("h4", [-1, 0, 8, -8]);
    design.addPosition("a3", [0, 1, 8, -8]);
    design.addPosition("b3", [-1, 1, 8, -8]);
    design.addPosition("c3", [-1, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 1, 8, -8]);
    design.addPosition("f3", [-1, 1, 8, -8]);
    design.addPosition("g3", [-1, 1, 8, -8]);
    design.addPosition("h3", [-1, 0, 8, -8]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);

    design.addZone("first", 1, [48, 32, 16, 0, 57, 59, 61, 63, 47, 31, 15, 2, 4, 6, 27, 36]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type
    design.addPriority(1);			// first-type

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [], 1);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 2, [3, 3, 3, 3], 0);
    design.addMove(0, 2, [2, 2, 2, 2], 0);
    design.addMove(0, 2, [0, 0, 0, 0], 0);
    design.addMove(0, 2, [1, 1, 1, 1], 0);
    design.addMove(0, 3, [3, 3, 3, 3, 3, 3], 0);
    design.addMove(0, 3, [2, 2, 2, 2, 2, 2], 0);
    design.addMove(0, 3, [0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 3, [1, 1, 1, 1, 1, 1], 0);

    design.setup("White", "Stone", 56);
    design.setup("White", "Stone", 40);
    design.setup("White", "Stone", 24);
    design.setup("White", "Stone", 8);
    design.setup("White", "Stone", 49);
    design.setup("White", "Stone", 33);
    design.setup("White", "Stone", 17);
    design.setup("White", "Stone", 1);
    design.setup("White", "Stone", 58);
    design.setup("White", "Stone", 42);
    design.setup("White", "Stone", 26);
    design.setup("White", "Stone", 10);
    design.setup("White", "Stone", 51);
    design.setup("White", "Stone", 35);
    design.setup("White", "Stone", 19);
    design.setup("White", "Stone", 3);
    design.setup("White", "Stone", 60);
    design.setup("White", "Stone", 44);
    design.setup("White", "Stone", 28);
    design.setup("White", "Stone", 12);
    design.setup("White", "Stone", 53);
    design.setup("White", "Stone", 37);
    design.setup("White", "Stone", 21);
    design.setup("White", "Stone", 5);
    design.setup("White", "Stone", 62);
    design.setup("White", "Stone", 46);
    design.setup("White", "Stone", 30);
    design.setup("White", "Stone", 14);
    design.setup("White", "Stone", 55);
    design.setup("White", "Stone", 39);
    design.setup("White", "Stone", 23);
    design.setup("White", "Stone", 7);
    design.setup("Black", "Stone", 48);
    design.setup("Black", "Stone", 32);
    design.setup("Black", "Stone", 16);
    design.setup("Black", "Stone", 0);
    design.setup("Black", "Stone", 57);
    design.setup("Black", "Stone", 41);
    design.setup("Black", "Stone", 25);
    design.setup("Black", "Stone", 9);
    design.setup("Black", "Stone", 50);
    design.setup("Black", "Stone", 34);
    design.setup("Black", "Stone", 18);
    design.setup("Black", "Stone", 2);
    design.setup("Black", "Stone", 59);
    design.setup("Black", "Stone", 43);
    design.setup("Black", "Stone", 27);
    design.setup("Black", "Stone", 11);
    design.setup("Black", "Stone", 52);
    design.setup("Black", "Stone", 36);
    design.setup("Black", "Stone", 20);
    design.setup("Black", "Stone", 4);
    design.setup("Black", "Stone", 61);
    design.setup("Black", "Stone", 45);
    design.setup("Black", "Stone", 29);
    design.setup("Black", "Stone", 13);
    design.setup("Black", "Stone", 54);
    design.setup("Black", "Stone", 38);
    design.setup("Black", "Stone", 22);
    design.setup("Black", "Stone", 6);
    design.setup("Black", "Stone", 63);
    design.setup("Black", "Stone", 47);
    design.setup("Black", "Stone", 31);
    design.setup("Black", "Stone", 15);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 2, 2, 80, 80);
    view.defPosition("b8", 82, 2, 80, 80);
    view.defPosition("c8", 162, 2, 80, 80);
    view.defPosition("d8", 242, 2, 80, 80);
    view.defPosition("e8", 322, 2, 80, 80);
    view.defPosition("f8", 402, 2, 80, 80);
    view.defPosition("g8", 482, 2, 80, 80);
    view.defPosition("h8", 562, 2, 80, 80);
    view.defPosition("a7", 2, 82, 80, 80);
    view.defPosition("b7", 82, 82, 80, 80);
    view.defPosition("c7", 162, 82, 80, 80);
    view.defPosition("d7", 242, 82, 80, 80);
    view.defPosition("e7", 322, 82, 80, 80);
    view.defPosition("f7", 402, 82, 80, 80);
    view.defPosition("g7", 482, 82, 80, 80);
    view.defPosition("h7", 562, 82, 80, 80);
    view.defPosition("a6", 2, 162, 80, 80);
    view.defPosition("b6", 82, 162, 80, 80);
    view.defPosition("c6", 162, 162, 80, 80);
    view.defPosition("d6", 242, 162, 80, 80);
    view.defPosition("e6", 322, 162, 80, 80);
    view.defPosition("f6", 402, 162, 80, 80);
    view.defPosition("g6", 482, 162, 80, 80);
    view.defPosition("h6", 562, 162, 80, 80);
    view.defPosition("a5", 2, 242, 80, 80);
    view.defPosition("b5", 82, 242, 80, 80);
    view.defPosition("c5", 162, 242, 80, 80);
    view.defPosition("d5", 242, 242, 80, 80);
    view.defPosition("e5", 322, 242, 80, 80);
    view.defPosition("f5", 402, 242, 80, 80);
    view.defPosition("g5", 482, 242, 80, 80);
    view.defPosition("h5", 562, 242, 80, 80);
    view.defPosition("a4", 2, 322, 80, 80);
    view.defPosition("b4", 82, 322, 80, 80);
    view.defPosition("c4", 162, 322, 80, 80);
    view.defPosition("d4", 242, 322, 80, 80);
    view.defPosition("e4", 322, 322, 80, 80);
    view.defPosition("f4", 402, 322, 80, 80);
    view.defPosition("g4", 482, 322, 80, 80);
    view.defPosition("h4", 562, 322, 80, 80);
    view.defPosition("a3", 2, 402, 80, 80);
    view.defPosition("b3", 82, 402, 80, 80);
    view.defPosition("c3", 162, 402, 80, 80);
    view.defPosition("d3", 242, 402, 80, 80);
    view.defPosition("e3", 322, 402, 80, 80);
    view.defPosition("f3", 402, 402, 80, 80);
    view.defPosition("g3", 482, 402, 80, 80);
    view.defPosition("h3", 562, 402, 80, 80);
    view.defPosition("a2", 2, 482, 80, 80);
    view.defPosition("b2", 82, 482, 80, 80);
    view.defPosition("c2", 162, 482, 80, 80);
    view.defPosition("d2", 242, 482, 80, 80);
    view.defPosition("e2", 322, 482, 80, 80);
    view.defPosition("f2", 402, 482, 80, 80);
    view.defPosition("g2", 482, 482, 80, 80);
    view.defPosition("h2", 562, 482, 80, 80);
    view.defPosition("a1", 2, 562, 80, 80);
    view.defPosition("b1", 82, 562, 80, 80);
    view.defPosition("c1", 162, 562, 80, 80);
    view.defPosition("d1", 242, 562, 80, 80);
    view.defPosition("e1", 322, 562, 80, 80);
    view.defPosition("f1", 402, 562, 80, 80);
    view.defPosition("g1", 482, 562, 80, 80);
    view.defPosition("h1", 562, 562, 80, 80);
}