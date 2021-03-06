Dagaz.Controller.noDropIndex = true;

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("BlackKing", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 1);

    design.addPiece("WhiteKing", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 1);

    design.addPiece("BlackStone", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 1);

    design.addPiece("WhiteStone", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 1);

    design.addPiece("BlackShield", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 1);

    design.addPiece("WhiteShield", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 1);

    design.addPiece("BlackFers", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 1);

    design.addPiece("WhiteFers", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 1);

    design.addPiece("BlackWazir", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 1);

    design.addPiece("WhiteWazir", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackKing", "You BlackKing");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackStone", "You BlackStone");
    view.defPiece("WhiteStone", "You WhiteStone");
    view.defPiece("BlackShield", "You BlackShield");
    view.defPiece("WhiteShield", "You WhiteShield");
    view.defPiece("BlackFers", "You BlackFers");
    view.defPiece("WhiteFers", "You WhiteFers");
    view.defPiece("BlackWazir", "You BlackWazir");
    view.defPiece("WhiteWazir", "You WhiteWazir");
 
    view.defPosition("a9", 41, 41, 42, 42);
    view.defPosition("b9", 83, 41, 42, 42);
    view.defPosition("c9", 125, 41, 42, 42);
    view.defPosition("d9", 167, 41, 42, 42);
    view.defPosition("e9", 209, 41, 42, 42);
    view.defPosition("f9", 251, 41, 42, 42);
    view.defPosition("g9", 293, 41, 42, 42);
    view.defPosition("h9", 335, 41, 42, 42);
    view.defPosition("i9", 377, 41, 42, 42);
    view.defPosition("a8", 41, 83, 42, 42);
    view.defPosition("b8", 83, 83, 42, 42);
    view.defPosition("c8", 125, 83, 42, 42);
    view.defPosition("d8", 167, 83, 42, 42);
    view.defPosition("e8", 209, 83, 42, 42);
    view.defPosition("f8", 251, 83, 42, 42);
    view.defPosition("g8", 293, 83, 42, 42);
    view.defPosition("h8", 335, 83, 42, 42);
    view.defPosition("i8", 377, 83, 42, 42);
    view.defPosition("a7", 41, 125, 42, 42);
    view.defPosition("b7", 83, 125, 42, 42);
    view.defPosition("c7", 125, 125, 42, 42);
    view.defPosition("d7", 167, 125, 42, 42);
    view.defPosition("e7", 209, 125, 42, 42);
    view.defPosition("f7", 251, 125, 42, 42);
    view.defPosition("g7", 293, 125, 42, 42);
    view.defPosition("h7", 335, 125, 42, 42);
    view.defPosition("i7", 377, 125, 42, 42);
    view.defPosition("a6", 41, 167, 42, 42);
    view.defPosition("b6", 83, 167, 42, 42);
    view.defPosition("c6", 125, 167, 42, 42);
    view.defPosition("d6", 167, 167, 42, 42);
    view.defPosition("e6", 209, 167, 42, 42);
    view.defPosition("f6", 251, 167, 42, 42);
    view.defPosition("g6", 293, 167, 42, 42);
    view.defPosition("h6", 335, 167, 42, 42);
    view.defPosition("i6", 377, 167, 42, 42);
    view.defPosition("a5", 41, 209, 42, 42);
    view.defPosition("b5", 83, 209, 42, 42);
    view.defPosition("c5", 125, 209, 42, 42);
    view.defPosition("d5", 167, 209, 42, 42);
    view.defPosition("e5", 209, 209, 42, 42);
    view.defPosition("f5", 251, 209, 42, 42);
    view.defPosition("g5", 293, 209, 42, 42);
    view.defPosition("h5", 335, 209, 42, 42);
    view.defPosition("i5", 377, 209, 42, 42);
    view.defPosition("a4", 41, 251, 42, 42);
    view.defPosition("b4", 83, 251, 42, 42);
    view.defPosition("c4", 125, 251, 42, 42);
    view.defPosition("d4", 167, 251, 42, 42);
    view.defPosition("e4", 209, 251, 42, 42);
    view.defPosition("f4", 251, 251, 42, 42);
    view.defPosition("g4", 293, 251, 42, 42);
    view.defPosition("h4", 335, 251, 42, 42);
    view.defPosition("i4", 377, 251, 42, 42);
    view.defPosition("a3", 41, 293, 42, 42);
    view.defPosition("b3", 83, 293, 42, 42);
    view.defPosition("c3", 125, 293, 42, 42);
    view.defPosition("d3", 167, 293, 42, 42);
    view.defPosition("e3", 209, 293, 42, 42);
    view.defPosition("f3", 251, 293, 42, 42);
    view.defPosition("g3", 293, 293, 42, 42);
    view.defPosition("h3", 335, 293, 42, 42);
    view.defPosition("i3", 377, 293, 42, 42);
    view.defPosition("a2", 41, 335, 42, 42);
    view.defPosition("b2", 83, 335, 42, 42);
    view.defPosition("c2", 125, 335, 42, 42);
    view.defPosition("d2", 167, 335, 42, 42);
    view.defPosition("e2", 209, 335, 42, 42);
    view.defPosition("f2", 251, 335, 42, 42);
    view.defPosition("g2", 293, 335, 42, 42);
    view.defPosition("h2", 335, 335, 42, 42);
    view.defPosition("i2", 377, 335, 42, 42);
    view.defPosition("a1", 41, 377, 42, 42);
    view.defPosition("b1", 83, 377, 42, 42);
    view.defPosition("c1", 125, 377, 42, 42);
    view.defPosition("d1", 167, 377, 42, 42);
    view.defPosition("e1", 209, 377, 42, 42);
    view.defPosition("f1", 251, 377, 42, 42);
    view.defPosition("g1", 293, 377, 42, 42);
    view.defPosition("h1", 335, 377, 42, 42);
    view.defPosition("i1", 377, 377, 42, 42);
}
