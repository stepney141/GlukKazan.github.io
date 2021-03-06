Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;
Dagaz.View.clearDrops = true;
Dagaz.Model.WIDTH = 19;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("ko", "situation");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a19", [20, 19, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("c19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("d19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("e19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("f19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("g19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("h19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("i19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("j19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("k19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("l19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("m19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("n19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("o19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("p19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("q19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("r19", [20, 19, 18, 1, -1, 0, 0, 0]);
    design.addPosition("s19", [0, 19, 18, 0, -1, 0, 0, 0]);
    design.addPosition("a18", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r18", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s18", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a17", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r17", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s17", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a16", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r16", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s16", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a15", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r15", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s15", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a14", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r14", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s14", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a13", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r13", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s13", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a12", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r12", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s12", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a11", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r11", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s11", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a10", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r10", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s10", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a9", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r9", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s9", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a8", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r8", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s8", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a7", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r7", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s7", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a6", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r6", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s6", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a5", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r5", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s5", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a4", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r4", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s4", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a3", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r3", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s3", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a2", [20, 19, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("c2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("d2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("e2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("f2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("g2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("h2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("i2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("j2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("k2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("l2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("m2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("n2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("o2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("p2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("q2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("r2", [20, 19, 18, 1, -1, -18, -20, -19]);
    design.addPosition("s2", [0, 19, 18, 0, -1, 0, -20, -19]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -18, 0, -19]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("l1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("m1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("n1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("o1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("p1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("q1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("r1", [0, 0, 0, 1, -1, -18, -20, -19]);
    design.addPosition("s1", [0, 0, 0, 0, -1, 0, -20, -19]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	0);	// Stone
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.LITERAL,	0);	// Stone
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	0);	// Stone
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-15);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.LITERAL,	0);	// Stone
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-15);
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.LITERAL,	0);	// Stone
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-12);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	0);	// Stone
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	0);	// Stone
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);

    design.addPiece("Soldier", 1);
    design.addDrop(1, 1, [], 1);
    design.addMove(1, 2, [7], 2);
    design.addMove(1, 2, [3], 2);
    design.addMove(1, 2, [4], 2);
    design.addMove(1, 2, [1], 2);

    design.addPiece("Horse", 2);
    design.addDrop(2, 1, [], 1);
    design.addMove(2, 3, [7, 6], 2);
    design.addMove(2, 3, [7, 5], 2);
    design.addMove(2, 3, [1, 2], 2);
    design.addMove(2, 3, [1, 0], 2);
    design.addMove(2, 3, [4, 6], 2);
    design.addMove(2, 3, [3, 5], 2);
    design.addMove(2, 3, [4, 2], 2);
    design.addMove(2, 3, [3, 0], 2);

    design.addPiece("Elephant", 3);
    design.addDrop(3, 1, [], 1);
    design.addMove(3, 3, [6, 6], 2);
    design.addMove(3, 3, [5, 5], 2);
    design.addMove(3, 3, [2, 2], 2);
    design.addMove(3, 3, [0, 0], 2);

    design.addPiece("Chariot", 4);
    design.addDrop(4, 1, [], 1);
    design.addMove(4, 4, [7, 7], 2);
    design.addMove(4, 4, [3, 3], 2);
    design.addMove(4, 4, [4, 4], 2);
    design.addMove(4, 4, [1, 1], 2);

    design.addPiece("Cannon", 5);
    design.addDrop(5, 1, [], 1);
    design.addMove(5, 5, [7, 7, 7, 7, 7, 7], 2);
    design.addMove(5, 5, [3, 3, 3, 3, 3, 3], 2);
    design.addMove(5, 5, [4, 4, 4, 4, 4, 4], 2);
    design.addMove(5, 5, [1, 1, 1, 1, 1, 1], 2);

    design.addPiece("Mandarin", 6);
    design.addDrop(6, 1, [], 1);
    design.addMove(6, 6, [6], 2);
    design.addMove(6, 6, [5], 2);
    design.addMove(6, 6, [2], 2);
    design.addMove(6, 6, [0], 2);

    design.addPiece("General", 7);
    design.addDrop(7, 1, [], 1);
    design.addMove(7, 7, [7], 2);
    design.addMove(7, 7, [3], 2);
    design.addMove(7, 7, [4], 2);
    design.addMove(7, 7, [1], 2);

    design.reserve("White", "Stone", 500);
    design.reserve("White", "Soldier", 5);
    design.reserve("White", "Horse", 2);
    design.reserve("White", "Elephant", 2);
    design.reserve("White", "Chariot", 2);
    design.reserve("White", "Mandarin", 2);
    design.reserve("White", "Cannon", 2);
    design.reserve("White", "General", 1);
    design.reserve("Black", "Stone", 500);
    design.reserve("Black", "Soldier", 5);
    design.reserve("Black", "Horse", 2);
    design.reserve("Black", "Elephant", 2);
    design.reserve("Black", "Chariot", 2);
    design.reserve("Black", "Mandarin", 2);
    design.reserve("Black", "Cannon", 2);
    design.reserve("Black", "General", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("WhiteSoldier", "White Soldier");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("WhiteHorse", "White Horse");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("WhiteElephant", "White Elephant");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("WhiteChariot", "White Chariot");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("WhiteCannon", "White Cannon");
    view.defPiece("BlackMandarin", "Black Mandarin");
    view.defPiece("WhiteMandarin", "White Mandarin");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("WhiteGeneral", "White General");
 
    view.defPosition("a19", 6, 6, 30, 30);
    view.defPosition("b19", 36, 6, 30, 30);
    view.defPosition("c19", 66, 6, 30, 30);
    view.defPosition("d19", 96, 6, 30, 30);
    view.defPosition("e19", 126, 6, 30, 30);
    view.defPosition("f19", 156, 6, 30, 30);
    view.defPosition("g19", 186, 6, 30, 30);
    view.defPosition("h19", 216, 6, 30, 30);
    view.defPosition("i19", 246, 6, 30, 30);
    view.defPosition("j19", 276, 6, 30, 30);
    view.defPosition("k19", 306, 6, 30, 30);
    view.defPosition("l19", 336, 6, 30, 30);
    view.defPosition("m19", 366, 6, 30, 30);
    view.defPosition("n19", 396, 6, 30, 30);
    view.defPosition("o19", 426, 6, 30, 30);
    view.defPosition("p19", 456, 6, 30, 30);
    view.defPosition("q19", 486, 6, 30, 30);
    view.defPosition("r19", 516, 6, 30, 30);
    view.defPosition("s19", 546, 6, 30, 30);
    view.defPosition("a18", 6, 36, 30, 30);
    view.defPosition("b18", 36, 36, 30, 30);
    view.defPosition("c18", 66, 36, 30, 30);
    view.defPosition("d18", 96, 36, 30, 30);
    view.defPosition("e18", 126, 36, 30, 30);
    view.defPosition("f18", 156, 36, 30, 30);
    view.defPosition("g18", 186, 36, 30, 30);
    view.defPosition("h18", 216, 36, 30, 30);
    view.defPosition("i18", 246, 36, 30, 30);
    view.defPosition("j18", 276, 36, 30, 30);
    view.defPosition("k18", 306, 36, 30, 30);
    view.defPosition("l18", 336, 36, 30, 30);
    view.defPosition("m18", 366, 36, 30, 30);
    view.defPosition("n18", 396, 36, 30, 30);
    view.defPosition("o18", 426, 36, 30, 30);
    view.defPosition("p18", 456, 36, 30, 30);
    view.defPosition("q18", 486, 36, 30, 30);
    view.defPosition("r18", 516, 36, 30, 30);
    view.defPosition("s18", 546, 36, 30, 30);
    view.defPosition("a17", 6, 66, 30, 30);
    view.defPosition("b17", 36, 66, 30, 30);
    view.defPosition("c17", 66, 66, 30, 30);
    view.defPosition("d17", 96, 66, 30, 30);
    view.defPosition("e17", 126, 66, 30, 30);
    view.defPosition("f17", 156, 66, 30, 30);
    view.defPosition("g17", 186, 66, 30, 30);
    view.defPosition("h17", 216, 66, 30, 30);
    view.defPosition("i17", 246, 66, 30, 30);
    view.defPosition("j17", 276, 66, 30, 30);
    view.defPosition("k17", 306, 66, 30, 30);
    view.defPosition("l17", 336, 66, 30, 30);
    view.defPosition("m17", 366, 66, 30, 30);
    view.defPosition("n17", 396, 66, 30, 30);
    view.defPosition("o17", 426, 66, 30, 30);
    view.defPosition("p17", 456, 66, 30, 30);
    view.defPosition("q17", 486, 66, 30, 30);
    view.defPosition("r17", 516, 66, 30, 30);
    view.defPosition("s17", 546, 66, 30, 30);
    view.defPosition("a16", 6, 96, 30, 30);
    view.defPosition("b16", 36, 96, 30, 30);
    view.defPosition("c16", 66, 96, 30, 30);
    view.defPosition("d16", 96, 96, 30, 30);
    view.defPosition("e16", 126, 96, 30, 30);
    view.defPosition("f16", 156, 96, 30, 30);
    view.defPosition("g16", 186, 96, 30, 30);
    view.defPosition("h16", 216, 96, 30, 30);
    view.defPosition("i16", 246, 96, 30, 30);
    view.defPosition("j16", 276, 96, 30, 30);
    view.defPosition("k16", 306, 96, 30, 30);
    view.defPosition("l16", 336, 96, 30, 30);
    view.defPosition("m16", 366, 96, 30, 30);
    view.defPosition("n16", 396, 96, 30, 30);
    view.defPosition("o16", 426, 96, 30, 30);
    view.defPosition("p16", 456, 96, 30, 30);
    view.defPosition("q16", 486, 96, 30, 30);
    view.defPosition("r16", 516, 96, 30, 30);
    view.defPosition("s16", 546, 96, 30, 30);
    view.defPosition("a15", 6, 126, 30, 30);
    view.defPosition("b15", 36, 126, 30, 30);
    view.defPosition("c15", 66, 126, 30, 30);
    view.defPosition("d15", 96, 126, 30, 30);
    view.defPosition("e15", 126, 126, 30, 30);
    view.defPosition("f15", 156, 126, 30, 30);
    view.defPosition("g15", 186, 126, 30, 30);
    view.defPosition("h15", 216, 126, 30, 30);
    view.defPosition("i15", 246, 126, 30, 30);
    view.defPosition("j15", 276, 126, 30, 30);
    view.defPosition("k15", 306, 126, 30, 30);
    view.defPosition("l15", 336, 126, 30, 30);
    view.defPosition("m15", 366, 126, 30, 30);
    view.defPosition("n15", 396, 126, 30, 30);
    view.defPosition("o15", 426, 126, 30, 30);
    view.defPosition("p15", 456, 126, 30, 30);
    view.defPosition("q15", 486, 126, 30, 30);
    view.defPosition("r15", 516, 126, 30, 30);
    view.defPosition("s15", 546, 126, 30, 30);
    view.defPosition("a14", 6, 156, 30, 30);
    view.defPosition("b14", 36, 156, 30, 30);
    view.defPosition("c14", 66, 156, 30, 30);
    view.defPosition("d14", 96, 156, 30, 30);
    view.defPosition("e14", 126, 156, 30, 30);
    view.defPosition("f14", 156, 156, 30, 30);
    view.defPosition("g14", 186, 156, 30, 30);
    view.defPosition("h14", 216, 156, 30, 30);
    view.defPosition("i14", 246, 156, 30, 30);
    view.defPosition("j14", 276, 156, 30, 30);
    view.defPosition("k14", 306, 156, 30, 30);
    view.defPosition("l14", 336, 156, 30, 30);
    view.defPosition("m14", 366, 156, 30, 30);
    view.defPosition("n14", 396, 156, 30, 30);
    view.defPosition("o14", 426, 156, 30, 30);
    view.defPosition("p14", 456, 156, 30, 30);
    view.defPosition("q14", 486, 156, 30, 30);
    view.defPosition("r14", 516, 156, 30, 30);
    view.defPosition("s14", 546, 156, 30, 30);
    view.defPosition("a13", 6, 186, 30, 30);
    view.defPosition("b13", 36, 186, 30, 30);
    view.defPosition("c13", 66, 186, 30, 30);
    view.defPosition("d13", 96, 186, 30, 30);
    view.defPosition("e13", 126, 186, 30, 30);
    view.defPosition("f13", 156, 186, 30, 30);
    view.defPosition("g13", 186, 186, 30, 30);
    view.defPosition("h13", 216, 186, 30, 30);
    view.defPosition("i13", 246, 186, 30, 30);
    view.defPosition("j13", 276, 186, 30, 30);
    view.defPosition("k13", 306, 186, 30, 30);
    view.defPosition("l13", 336, 186, 30, 30);
    view.defPosition("m13", 366, 186, 30, 30);
    view.defPosition("n13", 396, 186, 30, 30);
    view.defPosition("o13", 426, 186, 30, 30);
    view.defPosition("p13", 456, 186, 30, 30);
    view.defPosition("q13", 486, 186, 30, 30);
    view.defPosition("r13", 516, 186, 30, 30);
    view.defPosition("s13", 546, 186, 30, 30);
    view.defPosition("a12", 6, 216, 30, 30);
    view.defPosition("b12", 36, 216, 30, 30);
    view.defPosition("c12", 66, 216, 30, 30);
    view.defPosition("d12", 96, 216, 30, 30);
    view.defPosition("e12", 126, 216, 30, 30);
    view.defPosition("f12", 156, 216, 30, 30);
    view.defPosition("g12", 186, 216, 30, 30);
    view.defPosition("h12", 216, 216, 30, 30);
    view.defPosition("i12", 246, 216, 30, 30);
    view.defPosition("j12", 276, 216, 30, 30);
    view.defPosition("k12", 306, 216, 30, 30);
    view.defPosition("l12", 336, 216, 30, 30);
    view.defPosition("m12", 366, 216, 30, 30);
    view.defPosition("n12", 396, 216, 30, 30);
    view.defPosition("o12", 426, 216, 30, 30);
    view.defPosition("p12", 456, 216, 30, 30);
    view.defPosition("q12", 486, 216, 30, 30);
    view.defPosition("r12", 516, 216, 30, 30);
    view.defPosition("s12", 546, 216, 30, 30);
    view.defPosition("a11", 6, 246, 30, 30);
    view.defPosition("b11", 36, 246, 30, 30);
    view.defPosition("c11", 66, 246, 30, 30);
    view.defPosition("d11", 96, 246, 30, 30);
    view.defPosition("e11", 126, 246, 30, 30);
    view.defPosition("f11", 156, 246, 30, 30);
    view.defPosition("g11", 186, 246, 30, 30);
    view.defPosition("h11", 216, 246, 30, 30);
    view.defPosition("i11", 246, 246, 30, 30);
    view.defPosition("j11", 276, 246, 30, 30);
    view.defPosition("k11", 306, 246, 30, 30);
    view.defPosition("l11", 336, 246, 30, 30);
    view.defPosition("m11", 366, 246, 30, 30);
    view.defPosition("n11", 396, 246, 30, 30);
    view.defPosition("o11", 426, 246, 30, 30);
    view.defPosition("p11", 456, 246, 30, 30);
    view.defPosition("q11", 486, 246, 30, 30);
    view.defPosition("r11", 516, 246, 30, 30);
    view.defPosition("s11", 546, 246, 30, 30);
    view.defPosition("a10", 6, 276, 30, 30);
    view.defPosition("b10", 36, 276, 30, 30);
    view.defPosition("c10", 66, 276, 30, 30);
    view.defPosition("d10", 96, 276, 30, 30);
    view.defPosition("e10", 126, 276, 30, 30);
    view.defPosition("f10", 156, 276, 30, 30);
    view.defPosition("g10", 186, 276, 30, 30);
    view.defPosition("h10", 216, 276, 30, 30);
    view.defPosition("i10", 246, 276, 30, 30);
    view.defPosition("j10", 276, 276, 30, 30);
    view.defPosition("k10", 306, 276, 30, 30);
    view.defPosition("l10", 336, 276, 30, 30);
    view.defPosition("m10", 366, 276, 30, 30);
    view.defPosition("n10", 396, 276, 30, 30);
    view.defPosition("o10", 426, 276, 30, 30);
    view.defPosition("p10", 456, 276, 30, 30);
    view.defPosition("q10", 486, 276, 30, 30);
    view.defPosition("r10", 516, 276, 30, 30);
    view.defPosition("s10", 546, 276, 30, 30);
    view.defPosition("a9", 6, 306, 30, 30);
    view.defPosition("b9", 36, 306, 30, 30);
    view.defPosition("c9", 66, 306, 30, 30);
    view.defPosition("d9", 96, 306, 30, 30);
    view.defPosition("e9", 126, 306, 30, 30);
    view.defPosition("f9", 156, 306, 30, 30);
    view.defPosition("g9", 186, 306, 30, 30);
    view.defPosition("h9", 216, 306, 30, 30);
    view.defPosition("i9", 246, 306, 30, 30);
    view.defPosition("j9", 276, 306, 30, 30);
    view.defPosition("k9", 306, 306, 30, 30);
    view.defPosition("l9", 336, 306, 30, 30);
    view.defPosition("m9", 366, 306, 30, 30);
    view.defPosition("n9", 396, 306, 30, 30);
    view.defPosition("o9", 426, 306, 30, 30);
    view.defPosition("p9", 456, 306, 30, 30);
    view.defPosition("q9", 486, 306, 30, 30);
    view.defPosition("r9", 516, 306, 30, 30);
    view.defPosition("s9", 546, 306, 30, 30);
    view.defPosition("a8", 6, 336, 30, 30);
    view.defPosition("b8", 36, 336, 30, 30);
    view.defPosition("c8", 66, 336, 30, 30);
    view.defPosition("d8", 96, 336, 30, 30);
    view.defPosition("e8", 126, 336, 30, 30);
    view.defPosition("f8", 156, 336, 30, 30);
    view.defPosition("g8", 186, 336, 30, 30);
    view.defPosition("h8", 216, 336, 30, 30);
    view.defPosition("i8", 246, 336, 30, 30);
    view.defPosition("j8", 276, 336, 30, 30);
    view.defPosition("k8", 306, 336, 30, 30);
    view.defPosition("l8", 336, 336, 30, 30);
    view.defPosition("m8", 366, 336, 30, 30);
    view.defPosition("n8", 396, 336, 30, 30);
    view.defPosition("o8", 426, 336, 30, 30);
    view.defPosition("p8", 456, 336, 30, 30);
    view.defPosition("q8", 486, 336, 30, 30);
    view.defPosition("r8", 516, 336, 30, 30);
    view.defPosition("s8", 546, 336, 30, 30);
    view.defPosition("a7", 6, 366, 30, 30);
    view.defPosition("b7", 36, 366, 30, 30);
    view.defPosition("c7", 66, 366, 30, 30);
    view.defPosition("d7", 96, 366, 30, 30);
    view.defPosition("e7", 126, 366, 30, 30);
    view.defPosition("f7", 156, 366, 30, 30);
    view.defPosition("g7", 186, 366, 30, 30);
    view.defPosition("h7", 216, 366, 30, 30);
    view.defPosition("i7", 246, 366, 30, 30);
    view.defPosition("j7", 276, 366, 30, 30);
    view.defPosition("k7", 306, 366, 30, 30);
    view.defPosition("l7", 336, 366, 30, 30);
    view.defPosition("m7", 366, 366, 30, 30);
    view.defPosition("n7", 396, 366, 30, 30);
    view.defPosition("o7", 426, 366, 30, 30);
    view.defPosition("p7", 456, 366, 30, 30);
    view.defPosition("q7", 486, 366, 30, 30);
    view.defPosition("r7", 516, 366, 30, 30);
    view.defPosition("s7", 546, 366, 30, 30);
    view.defPosition("a6", 6, 396, 30, 30);
    view.defPosition("b6", 36, 396, 30, 30);
    view.defPosition("c6", 66, 396, 30, 30);
    view.defPosition("d6", 96, 396, 30, 30);
    view.defPosition("e6", 126, 396, 30, 30);
    view.defPosition("f6", 156, 396, 30, 30);
    view.defPosition("g6", 186, 396, 30, 30);
    view.defPosition("h6", 216, 396, 30, 30);
    view.defPosition("i6", 246, 396, 30, 30);
    view.defPosition("j6", 276, 396, 30, 30);
    view.defPosition("k6", 306, 396, 30, 30);
    view.defPosition("l6", 336, 396, 30, 30);
    view.defPosition("m6", 366, 396, 30, 30);
    view.defPosition("n6", 396, 396, 30, 30);
    view.defPosition("o6", 426, 396, 30, 30);
    view.defPosition("p6", 456, 396, 30, 30);
    view.defPosition("q6", 486, 396, 30, 30);
    view.defPosition("r6", 516, 396, 30, 30);
    view.defPosition("s6", 546, 396, 30, 30);
    view.defPosition("a5", 6, 426, 30, 30);
    view.defPosition("b5", 36, 426, 30, 30);
    view.defPosition("c5", 66, 426, 30, 30);
    view.defPosition("d5", 96, 426, 30, 30);
    view.defPosition("e5", 126, 426, 30, 30);
    view.defPosition("f5", 156, 426, 30, 30);
    view.defPosition("g5", 186, 426, 30, 30);
    view.defPosition("h5", 216, 426, 30, 30);
    view.defPosition("i5", 246, 426, 30, 30);
    view.defPosition("j5", 276, 426, 30, 30);
    view.defPosition("k5", 306, 426, 30, 30);
    view.defPosition("l5", 336, 426, 30, 30);
    view.defPosition("m5", 366, 426, 30, 30);
    view.defPosition("n5", 396, 426, 30, 30);
    view.defPosition("o5", 426, 426, 30, 30);
    view.defPosition("p5", 456, 426, 30, 30);
    view.defPosition("q5", 486, 426, 30, 30);
    view.defPosition("r5", 516, 426, 30, 30);
    view.defPosition("s5", 546, 426, 30, 30);
    view.defPosition("a4", 6, 456, 30, 30);
    view.defPosition("b4", 36, 456, 30, 30);
    view.defPosition("c4", 66, 456, 30, 30);
    view.defPosition("d4", 96, 456, 30, 30);
    view.defPosition("e4", 126, 456, 30, 30);
    view.defPosition("f4", 156, 456, 30, 30);
    view.defPosition("g4", 186, 456, 30, 30);
    view.defPosition("h4", 216, 456, 30, 30);
    view.defPosition("i4", 246, 456, 30, 30);
    view.defPosition("j4", 276, 456, 30, 30);
    view.defPosition("k4", 306, 456, 30, 30);
    view.defPosition("l4", 336, 456, 30, 30);
    view.defPosition("m4", 366, 456, 30, 30);
    view.defPosition("n4", 396, 456, 30, 30);
    view.defPosition("o4", 426, 456, 30, 30);
    view.defPosition("p4", 456, 456, 30, 30);
    view.defPosition("q4", 486, 456, 30, 30);
    view.defPosition("r4", 516, 456, 30, 30);
    view.defPosition("s4", 546, 456, 30, 30);
    view.defPosition("a3", 6, 486, 30, 30);
    view.defPosition("b3", 36, 486, 30, 30);
    view.defPosition("c3", 66, 486, 30, 30);
    view.defPosition("d3", 96, 486, 30, 30);
    view.defPosition("e3", 126, 486, 30, 30);
    view.defPosition("f3", 156, 486, 30, 30);
    view.defPosition("g3", 186, 486, 30, 30);
    view.defPosition("h3", 216, 486, 30, 30);
    view.defPosition("i3", 246, 486, 30, 30);
    view.defPosition("j3", 276, 486, 30, 30);
    view.defPosition("k3", 306, 486, 30, 30);
    view.defPosition("l3", 336, 486, 30, 30);
    view.defPosition("m3", 366, 486, 30, 30);
    view.defPosition("n3", 396, 486, 30, 30);
    view.defPosition("o3", 426, 486, 30, 30);
    view.defPosition("p3", 456, 486, 30, 30);
    view.defPosition("q3", 486, 486, 30, 30);
    view.defPosition("r3", 516, 486, 30, 30);
    view.defPosition("s3", 546, 486, 30, 30);
    view.defPosition("a2", 6, 516, 30, 30);
    view.defPosition("b2", 36, 516, 30, 30);
    view.defPosition("c2", 66, 516, 30, 30);
    view.defPosition("d2", 96, 516, 30, 30);
    view.defPosition("e2", 126, 516, 30, 30);
    view.defPosition("f2", 156, 516, 30, 30);
    view.defPosition("g2", 186, 516, 30, 30);
    view.defPosition("h2", 216, 516, 30, 30);
    view.defPosition("i2", 246, 516, 30, 30);
    view.defPosition("j2", 276, 516, 30, 30);
    view.defPosition("k2", 306, 516, 30, 30);
    view.defPosition("l2", 336, 516, 30, 30);
    view.defPosition("m2", 366, 516, 30, 30);
    view.defPosition("n2", 396, 516, 30, 30);
    view.defPosition("o2", 426, 516, 30, 30);
    view.defPosition("p2", 456, 516, 30, 30);
    view.defPosition("q2", 486, 516, 30, 30);
    view.defPosition("r2", 516, 516, 30, 30);
    view.defPosition("s2", 546, 516, 30, 30);
    view.defPosition("a1", 6, 546, 30, 30);
    view.defPosition("b1", 36, 546, 30, 30);
    view.defPosition("c1", 66, 546, 30, 30);
    view.defPosition("d1", 96, 546, 30, 30);
    view.defPosition("e1", 126, 546, 30, 30);
    view.defPosition("f1", 156, 546, 30, 30);
    view.defPosition("g1", 186, 546, 30, 30);
    view.defPosition("h1", 216, 546, 30, 30);
    view.defPosition("i1", 246, 546, 30, 30);
    view.defPosition("j1", 276, 546, 30, 30);
    view.defPosition("k1", 306, 546, 30, 30);
    view.defPosition("l1", 336, 546, 30, 30);
    view.defPosition("m1", 366, 546, 30, 30);
    view.defPosition("n1", 396, 546, 30, 30);
    view.defPosition("o1", 426, 546, 30, 30);
    view.defPosition("p1", 456, 546, 30, 30);
    view.defPosition("q1", 486, 546, 30, 30);
    view.defPosition("r1", 516, 546, 30, 30);
    view.defPosition("s1", 546, 546, 30, 30);
}
