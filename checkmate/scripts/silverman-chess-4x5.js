Dagaz.Controller.persistense = "session";

Dagaz.Model.WIDTH  = 4;
Dagaz.Model.HEIGHT = 5;
Dagaz.AI.FLAGS     = 0xA2;

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

if (Dagaz.AI.SetParams) {
    Dagaz.AI.SetParams(Dagaz.Model.WIDTH, Dagaz.Model.HEIGHT, Dagaz.AI.FLAGS);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("chess-invariant", "true");

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

    design.addPosition("a5", [0, 1, 4, 0, 0, 5, 0, 0]);
    design.addPosition("b5", [-1, 1, 4, 0, 0, 5, 3, 0]);
    design.addPosition("c5", [-1, 1, 4, 0, 0, 5, 3, 0]);
    design.addPosition("d5", [-1, 0, 4, 0, 0, 0, 3, 0]);
    design.addPosition("a4", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b4", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c4", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d4", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a3", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b3", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c3", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d3", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a2", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b2", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c2", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d2", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a1", [0, 1, 0, -3, -4, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -3, -4, 0, 0, -5]);
    design.addPosition("c1", [-1, 1, 0, -3, -4, 0, 0, -5]);
    design.addPosition("d1", [-1, 0, 0, 0, -4, 0, 0, -5]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3]);
    design.addZone("last-rank", 2, [16, 17, 18, 19]);
    design.addZone("third-rank", 1, [8, 9, 10, 11]);
    design.addZone("third-rank", 2, [8, 9, 10, 11]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end


    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 2, [7], 0);
    design.addMove(0, 2, [3], 0);
    design.addMove(0, 3, [1, 4, 4], 0);
    design.addMove(0, 3, [0, 4, 4], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 4, [4, 4], 0);
    design.addMove(1, 4, [2, 2], 0);
    design.addMove(1, 4, [0, 0], 0);
    design.addMove(1, 4, [1, 1], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 4, [4, 4], 0);
    design.addMove(4, 4, [2, 2], 0);
    design.addMove(4, 4, [0, 0], 0);
    design.addMove(4, 4, [1, 1], 0);
    design.addMove(4, 4, [7, 7], 0);
    design.addMove(4, 4, [6, 6], 0);
    design.addMove(4, 4, [3, 3], 0);
    design.addMove(4, 4, [5, 5], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 6, [2], 0);
    design.addMove(5, 6, [0], 0);
    design.addMove(5, 6, [1], 0);
    design.addMove(5, 6, [7], 0);
    design.addMove(5, 6, [6], 0);
    design.addMove(5, 6, [3], 0);
    design.addMove(5, 6, [5], 0);

    design.setup("White", "Pawn", 12);
    design.setup("White", "Pawn", 13);
    design.setup("White", "Pawn", 14);
    design.setup("White", "Pawn", 15);
    design.setup("White", "Rook", 16);
    design.setup("White", "Rook", 19);
    design.setup("White", "Queen", 17);
    design.setup("White", "King", 18);
    design.setup("Black", "Pawn", 4);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 3);
    design.setup("Black", "Queen", 1);
    design.setup("Black", "King", 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a5", 2, 2, 68, 68);
    view.defPosition("b5", 70, 2, 68, 68);
    view.defPosition("c5", 138, 2, 68, 68);
    view.defPosition("d5", 206, 2, 68, 68);
    view.defPosition("a4", 2, 70, 68, 68);
    view.defPosition("b4", 70, 70, 68, 68);
    view.defPosition("c4", 138, 70, 68, 68);
    view.defPosition("d4", 206, 70, 68, 68);
    view.defPosition("a3", 2, 138, 68, 68);
    view.defPosition("b3", 70, 138, 68, 68);
    view.defPosition("c3", 138, 138, 68, 68);
    view.defPosition("d3", 206, 138, 68, 68);
    view.defPosition("a2", 2, 206, 68, 68);
    view.defPosition("b2", 70, 206, 68, 68);
    view.defPosition("c2", 138, 206, 68, 68);
    view.defPosition("d2", 206, 206, 68, 68);
    view.defPosition("a1", 2, 274, 68, 68);
    view.defPosition("b1", 70, 274, 68, 68);
    view.defPosition("c1", 138, 274, 68, 68);
    view.defPosition("d1", 206, 274, 68, 68);

    view.defPopup("Promote", 62, 30);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
}
