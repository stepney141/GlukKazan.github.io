const Dagaz = {
    Model: {},
    View: {},
    AI: {},
    KPI: {},
    Controller: {}
};

Dagaz.Controller.persistense = "none";
Dagaz.Controller.loseRefresh = true;
Dagaz.Controller.randomized = false;
Dagaz.Controller.noDropIndex = false;
Dagaz.Controller.cyclicDropIndex = false;
Dagaz.Controller.turnChanged = false;

Dagaz.AI.selector = false;

Dagaz.Controller.Done = (board) => {};

Dagaz.Controller.go = (url) => {
    window.location = url;
};

Dagaz.KPI.open = (scope, stage) => {};
Dagaz.KPI.stage = (stage, scope) => {};
Dagaz.KPI.close = (scope, stage) => {};
Dagaz.KPI.set = (name, value, scope, stage) => {};
Dagaz.KPI.dump = () => {};

Dagaz.AI.findBot = (type, params, parent) => parent;

Dagaz.AI.isFriend = (player, opponent) => player == opponent;

Dagaz.AI.createContext = (design) => ({
    design: design
});

Dagaz.Model.Determinate = (moves) =>
    _.chain(moves)
        .map((move) => move.determinate())
        .flatten()
        .value();

Dagaz.AI.generate = (ctx, board) => {
    if (!_.isUndefined(board.moves)) {
        return board.moves;
    }
    board.generate(ctx.design);
    board.moves = Dagaz.Model.Determinate(board.moves);
    if (!_.isUndefined(Dagaz.Model.PostProcessing)) {
        Dagaz.Model.PostProcessing(board, board.moves);
    }
    return board.moves;
};

Dagaz.AI.reject = ((ctx, move) => {
    ctx.childs = _.filter(
        ctx.childs,
        (child) => child.move.toString() != move.toString()
    );
})(() => {
    const Z2J_VERSION = 2;

    Dagaz.Model.deferredStrike = false;
    Dagaz.Model.discardCascades = false;
    Dagaz.Model.forkMode = false;
    Dagaz.Model.passPartial = false;
    Dagaz.Model.passTurn = 0;
    Dagaz.Model.sharedPieces = false;
    Dagaz.Model.recycleCaptures = false;
    Dagaz.Model.smartFrom = false;
    Dagaz.Model.smartTo = false;
    Dagaz.Model.showGoals = true;
    Dagaz.Model.showCaptures = true;
    Dagaz.Model.showMoves = true;
    Dagaz.Model.showHints = false;
    Dagaz.Model.stalemateDraw = false;
    Dagaz.Model.showBlink = true;
    Dagaz.Model.chessCapturing = true;
    Dagaz.Model.progressive = false;
    Dagaz.Model.progressiveUrl = null;
    Dagaz.Model.silent = false;
    Dagaz.Model.showDrops = -1;
    Dagaz.Model.dragNdrop = true;
    Dagaz.Model.detectLoops = false;
    Dagaz.Model.advisorWait = null;
    Dagaz.Model.remapPromote = false;
    Dagaz.Model.passForcedDraw = true;
    Dagaz.Model.animateRedo = true;
    Dagaz.Model.completePartial = false;
    Dagaz.Model.zrfCompatible = false;
    Dagaz.Model.showLose = true;

    Dagaz.Model.checkVersion = (design, name, value) => {
        if (name == "z2j") {
            if (value > Z2J_VERSION) {
                design.failed = true;
            }
        } else {
            if (
                name != "zrf" &&
                name != "pass-turn" &&
                name != "pass-partial" &&
                name != "moves-limit" &&
                name != "discard-cascades" &&
                name != "animate-captures" &&
                name != "animate-drops" &&
                name != "highlight-goals" &&
                name != "prevent-flipping" &&
                name != "progressive-levels" &&
                name != "selection-screen" &&
                name != "show-moves-list" &&
                name != "show-captures" &&
                name != "show-drops" &&
                name != "smart-moves" &&
                name != "show-hints" &&
                name != "stalemate-draw" &&
                name != "recycle-captures" &&
                name != "shared-pieces" &&
                name != "show-blink" &&
                name != "drag-n-drop" &&
                name != "detect-loops" &&
                name != "advisor-wait" &&
                name != "promote-dialog" &&
                name != "complete-partial" &&
                name != "animate-redo" &&
                name != "show-lose" &&
                name != "silent-?-moves"
            ) {
                design.failed = true;
            }
            if (name == "show-lose") {
                if (value == "false") Dagaz.Model.showLose = false;
            }
            if (name == "complete-partial") {
                if (value == "true") Dagaz.Model.completePartial = true;
            }
            if (name == "animate-redo") {
                if (value == "false") Dagaz.Model.animateRedo = false;
                if (value == "true") Dagaz.Model.animateRedo = true;
            }
            if (name == "promote-dialog") {
                if (value == "remap") Dagaz.Model.remapPromote = true;
            }
            if (name == "advisor-wait") {
                Dagaz.Model.advisorWait = +value * 1000;
            }
            if (name == "detect-loops") {
                if (value == "true") Dagaz.Model.detectLoops = true;
            }
            if (name == "drag-n-drop") {
                if (value == "false") Dagaz.Model.dragNdrop = false;
            }
            if (name == "show-drops") {
                if (!_.isNaN(value)) Dagaz.Model.showDrops = +value;
                if (value == "false") Dagaz.Model.showDrops = 0;
                if (value == "true") Dagaz.Model.showDrops = -1;
                if (value == "all") Dagaz.Model.showDrops = -2;
            }
            if (name == "progressive-levels") {
                Dagaz.Model.progressive = value == "true";
                if (value == "silent") {
                    Dagaz.Model.progressive = true;
                    Dagaz.Model.silent = true;
                }
                if (value != "silent" && value != "true") {
                    Dagaz.Model.progressive = true;
                    Dagaz.Model.progressiveUrl = value;
                }
            }
            if (name == "show-blink") {
                Dagaz.Model.showBlink = value == "true";
            }
            if (name == "show-captures") {
                Dagaz.Model.showCaptures = value == "true";
            }
            if (name == "shared-pieces") {
                Dagaz.Model.sharedPieces = value == "true";
            }
            if (name == "show-moves-list") {
                Dagaz.Model.showMoves = value == "true";
            }
            if (name == "highlight-goals") {
                Dagaz.Model.showGoals = value == "true";
            }
            if (name == "smart-moves") {
                if (value == "from" || value == "true") {
                    Dagaz.Model.smartFrom = true;
                }
                if (value == "to" || value == "true") {
                    Dagaz.Model.smartTo = true;
                }
            }
            if (name == "recycle-captures" && value == "true") {
                Dagaz.Model.recycleCaptures = true;
            }
            if (name == "discard-cascades" && value == "true") {
                Dagaz.Model.discardCascades = true;
            }
            if (name == "pass-partial" && value == "true") {
                Dagaz.Model.passPartial = true;
            }
            if (name == "pass-turn" && value == "true") {
                Dagaz.Model.passTurn = 1;
            }
            if (name == "pass-turn" && value == "forced") {
                Dagaz.Model.passTurn = 2;
            }
            if (name == "moves-limit") {
                Dagaz.Model.movesLimit = value;
            }
            if (name == "show-hints" && value == "false") {
                Dagaz.Model.showHints = false;
            }
            if (name == "stalemate-draw" && value == "true") {
                Dagaz.Model.stalemateDraw = true;
            }
        }
    };

    Dagaz.Model.checkOption = (design, name, value) => {
        if (design.options[name] == value) {
            return true;
        }
    };

    Dagaz.Model.ZRF_JUMP = 0;
    Dagaz.Model.ZRF_IF = 1;
    Dagaz.Model.ZRF_FORK = 2;
    Dagaz.Model.ZRF_FUNCTION = 3;
    Dagaz.Model.ZRF_IN_ZONE = 4;
    Dagaz.Model.ZRF_GET_FLAG = 5;
    Dagaz.Model.ZRF_SET_FLAG = 6;
    Dagaz.Model.ZRF_GET_PFLAG = 7;
    Dagaz.Model.ZRF_SET_PFLAG = 8;
    Dagaz.Model.ZRF_GET_ATTR = 9;
    Dagaz.Model.ZRF_SET_ATTR = 10;
    Dagaz.Model.ZRF_PROMOTE = 11;
    Dagaz.Model.ZRF_MODE = 12;
    Dagaz.Model.ZRF_ON_BOARDD = 13;
    Dagaz.Model.ZRF_ON_BOARDP = 14;
    Dagaz.Model.ZRF_PARAM = 15;
    Dagaz.Model.ZRF_LITERAL = 16;
    Dagaz.Model.ZRF_VERIFY = 20;
    Dagaz.Model.ZRF_SET_POS = 21;
    Dagaz.Model.ZRF_NAVIGATE = 22;
    Dagaz.Model.ZRF_OPPOSITE = 23;
    Dagaz.Model.ZRF_FROM = 24;
    Dagaz.Model.ZRF_TO = 25;
    Dagaz.Model.ZRF_CAPTURE = 26;
    Dagaz.Model.ZRF_FLIP = 27;
    Dagaz.Model.ZRF_END = 28;

    Dagaz.Model.ZRF_NOT = 0;
    Dagaz.Model.ZRF_IS_EMPTY = 1;
    Dagaz.Model.ZRF_IS_ENEMY = 2;
    Dagaz.Model.ZRF_IS_FRIEND = 3;
    Dagaz.Model.ZRF_IS_LASTF = 4;
    Dagaz.Model.ZRF_IS_LASTT = 5;
    Dagaz.Model.ZRF_MARK = 6;
    Dagaz.Model.ZRF_BACK = 7;
    Dagaz.Model.ZRF_PUSH = 8;
    Dagaz.Model.ZRF_POP = 9;
    Dagaz.Model.ZRF_IS_PIECE = 10;
    Dagaz.Model.ZRF_CREATE = 11;

    Dagaz.Model.commands = {};

    Dagaz.Model.commands[Dagaz.Model.ZRF_JUMP] = (gen, param) => param - 1;

    Dagaz.Model.commands[Dagaz.Model.ZRF_IF] = (gen, param) => {
        if (gen.stack.length == 0) {
            return null;
        }
        const f = gen.stack.pop();
        if (f) {
            return param - 1;
        } else {
            return 0;
        }
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_FORK] = (gen, param) => {
        const g = gen.clone();
        g.cmd += param - 1;
        gen.board.addFork(g);
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_FUNCTION] = (gen, param) => {
        const game = gen.board.game;
        if (!_.isUndefined(game.functions[param])) {
            return game.functions[param](gen);
        }
        return null;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_IN_ZONE] = (gen, param) => {
        const player = gen.board.player;
        if (gen.pos === null) {
            return null;
        }
        gen.stack.push(gen.design.inZone(param, player, gen.pos));
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_GET_FLAG] = (gen, param) => {
        gen.stack.push(gen.getValue(param, -1));
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_SET_FLAG] = (gen, param) => {
        if (gen.stack.length == 0) {
            return null;
        }
        value = gen.stack.pop();
        gen.setValue(param, -1, value);
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_GET_PFLAG] = (gen, param) => {
        if (gen.pos === null) {
            return null;
        }
        gen.stack.push(gen.getValue(param, gen.pos));
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_SET_PFLAG] = (gen, param) => {
        if (gen.pos === null) {
            return null;
        }
        if (gen.stack.length == 0) {
            return null;
        }
        value = gen.stack.pop();
        gen.setValue(param, gen.pos, value);
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_GET_ATTR] = (gen, param) => {
        if (gen.pos === null) {
            return null;
        }
        const value = gen.getAttr(param, gen.pos);
        if (value === null) {
            return null;
        }
        gen.stack.push(value);
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_SET_ATTR] = (gen, param) => {
        if (gen.pos === null) {
            return null;
        }
        if (gen.stack.length == 0) {
            return null;
        }
        const value = gen.stack.pop();
        gen.setAttr(param, gen.pos, value);
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_PROMOTE] = (gen, param) => {
        if (_.isUndefined(gen.piece)) {
            return null;
        }
        gen.piece = gen.piece.promote(param);
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_MODE] = (gen, param) => {
        gen.mode = param;
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_ON_BOARDD] = (gen, param) => {
        const player = gen.board.player;
        let pos = gen.pos;
        if (pos === null) {
            return null;
        }
        pos = gen.design.navigate(player, pos, param);
        if (pos !== null) {
            gen.stack.push(true);
        } else {
            gen.stack.push(false);
        }
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_ON_BOARDP] = (gen, param) => {
        if (param >= 0 && param < gen.design.positions.length) {
            gen.stack.push(true);
        } else {
            gen.stack.push(false);
        }
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_PARAM] = (gen, param) => {
        const value = gen.params[param];
        gen.stack.push(value);
        return 0;
    };

    Dagaz.Model.commands[Dagaz.Model.ZRF_LITERAL] = (gen, param) => {
        gen.stack.push(param);
        return 0;
    };

    Dagaz.Model.functions = {};

    Dagaz.Model.functions[Dagaz.Model.ZRF_VERIFY] = (gen) => {
        if (gen.stack.length == 0) {
            return null;
        }
        const f = gen.stack.pop();
        if (f) {
            return 0;
        } else {
            return null;
        }
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_SET_POS] = (gen) => {
        if (gen.stack.length == 0) {
            return null;
        }
        const pos = gen.stack.pop();
        if (pos < gen.design.positions.length) {
            gen.pos = pos;
            return 0;
        } else {
            return null;
        }
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_NAVIGATE] = (gen) => {
        if (gen.stack.length == 0) {
            return null;
        }
        const dir = gen.stack.pop();
        const player = gen.board.player;
        let pos = gen.pos;
        if (pos === null) {
            return null;
        }
        pos = gen.design.navigate(player, pos, dir);
        if (pos === null) {
            return null;
        }
        if (pos < gen.design.positions.length) {
            gen.pos = pos;
            return 0;
        } else {
            return null;
        }
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_OPPOSITE] = (gen) => {
        if (gen.stack.length == 0) {
            return null;
        }
        let dir = gen.stack.pop();
        if (_.isUndefined(gen.design.players[0])) {
            return null;
        }
        if (_.isUndefined(gen.design.players[0][dir])) {
            return null;
        }
        dir = gen.design.players[0][dir];
        gen.stack.push(dir);
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_FROM] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        if (gen.getPiece(gen.pos) === null) {
            return null;
        }
        gen.from = gen.pos;
        gen.piece = gen.getPiece(gen.pos);
        delete gen.initial;
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_TO] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        if (_.isUndefined(gen.piece)) {
            return null;
        }
        if (
            Dagaz.Model.chessCapturing &&
            !_.isUndefined(gen.cover) &&
            !_.isUndefined(gen.from)
        ) {
            gen.cover[gen.pos].push(gen.from);
            gen.serial[gen.pos].push(gen.serial);
        }
        if (_.isUndefined(gen.from)) {
            gen.dropPiece(gen.pos, gen.piece);
        } else {
            gen.movePiece(gen.from, gen.pos, gen.piece);
        }
        delete gen.from;
        delete gen.piece;
        if (Dagaz.Model.detectLoops && gen.pos !== null) {
            if (!gen.notLooped()) {
                gen.move.failed = true;
            }
        }
        gen.generated = true;
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_CAPTURE] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        if (gen.getPiece(gen.pos) === null) {
            return 0;
        }
        if (!gen.capturePiece(gen.pos)) {
            return null;
        }
        if (!_.isUndefined(gen.cover) && !_.isUndefined(gen.from)) {
            gen.cover[gen.pos].push(gen.from);
            gen.serial[gen.pos].push(gen.serial);
        }
        gen.generated = true;
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_FLIP] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        if (gen.getPiece(gen.pos) === null) {
            return null;
        }
        const piece = gen.getPiece(gen.pos).flip();
        gen.movePiece(gen.pos, gen.pos, piece);
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_END] = (gen) => {
        const board = gen.board;
        if (gen.generated) {
            if (gen.moveType == 2) {
                board.changeMove(gen.move);
            }
            if (gen.moveType == 1) {
                board.addMove(gen.move);
            }
        }
        gen.moveType = 0;
        gen.completed = true;
        return null;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_NOT] = (gen) => {
        if (gen.stack.length == 0) {
            return null;
        }
        const f = gen.stack.pop();
        gen.stack.push(!f);
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_IS_EMPTY] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        if (isCaptured(gen.move, gen.pos)) {
            gen.stack.push(false);
            return 0;
        }
        const piece = gen.getPiece(gen.pos);
        gen.stack.push(piece === null);
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_IS_PIECE] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        if (gen.stack.length == 0) {
            return null;
        }
        const type = gen.stack.pop();
        const piece = gen.getPiece(gen.pos);
        if (piece === null) {
            gen.stack.push(false);
        } else {
            gen.stack.push(piece.type == type);
        }
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_CREATE] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        if (gen.stack.length == 0) {
            return null;
        }
        if (_.isUndefined(gen.initial) && gen.from == gen.pos) {
            gen.initial = gen.pos;
        }
        const type = gen.stack.pop();
        const piece = new ZrfPiece(type, gen.board.player);
        gen.dropPiece(gen.pos, piece);
        return 0;
    };

    Dagaz.Model.isFriend = (piece, player) => {
        if (piece === null) return false;
        return piece.player == player;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_IS_ENEMY] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        const piece = gen.getPiece(gen.pos);
        if (piece === null) {
            gen.stack.push(false);
            return 0;
        }
        const player = gen.board.player;
        gen.stack.push(!Dagaz.Model.isFriend(piece, player));
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_IS_FRIEND] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        const piece = gen.getPiece(gen.pos);
        if (piece === null) {
            gen.stack.push(false);
            return 0;
        }
        const player = gen.board.player;
        gen.stack.push(Dagaz.Model.isFriend(piece, player));
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_IS_LASTF] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        gen.stack.push(gen.isLastFrom(gen.pos));
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_IS_LASTT] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        gen.stack.push(gen.isLastTo(gen.pos));
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_MARK] = (gen) => {
        if (gen.pos === null) {
            return null;
        }
        gen.setMark();
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_BACK] = (gen) => {
        const pos = gen.getMark();
        if (pos !== null) {
            gen.pos = pos;
        } else {
            return null;
        }
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_PUSH] = (gen) => {
        gen.marks.push(gen.pos);
        return 0;
    };

    Dagaz.Model.functions[Dagaz.Model.ZRF_POP] = (gen) => {
        if (gen.marks.length == 0) {
            return null;
        }
        gen.pos = gen.marks.pop();
        return 0;
    };

    if (!_.isUndefined(Array.indexOf)) {
        Dagaz.find = (array, value) =>
            Array.prototype.indexOf.call(array, value);
    } else {
        Dagaz.find = (array, value) => _.indexOf(array, value);
    }

    if (!_.isUndefined(Int32Array)) {
        Dagaz.int32Array = (array) => {
            const a = new Int32Array(array.length);
            a.set(array);
            return a;
        };
    } else {
        Dagaz.int32Array = (array) => array;
    }

    Dagaz.Model.posToString = (pos, design) => {
        if (_.isUndefined(design)) {
            design = Dagaz.Model.getDesign();
        }
        if (pos < design.positionNames.length) {
            return design.positionNames[pos];
        } else {
            return "?";
        }
    };

    Dagaz.Model.stringToPos = (name, design) => {
        if (_.isUndefined(design)) {
            design = Dagaz.Model.getDesign();
        }
        const pos = Dagaz.find(design.positionNames, name);
        if (pos >= 0) {
            return pos;
        } else {
            return null;
        }
    };

    Dagaz.Model.zupdate = (value, piece, pos) => value;

    Dagaz.Model.hupdate = (value, piece, pos) => value;

    Dagaz.Model.zplayer = (value, player) => value;

    Dagaz.Model.hplayer = (value, player) => value;

    function ZrfDesign() {
        this.playerNames = [];
        this.players = [];
        this.positionNames = [];
        this.positions = [];
        this.zoneNames = [];
        this.zones = [];
        this.pieceNames = [];
        this.pieces = [];
        this.attrs = [];
        this.dirs = [];
        this.templates = [];
        this.options = [];
        this.modes = [];
        this.price = [];
        this.goals = [];
        this.failed = false;
    }

    Dagaz.Model.getDesign = () => {
        if (_.isUndefined(Dagaz.Model.design)) {
            Dagaz.Model.design = new ZrfDesign();
        }
        return Dagaz.Model.design;
    };

    ZrfDesign.prototype.allPositions = function () {
        return _.range(this.positions.length);
    };

    ZrfDesign.prototype.allDirections = function () {
        return _.range(this.dirs.length);
    };

    ZrfDesign.prototype.allPlayers = function () {
        return _.range(1, this.playerNames.length);
    };

    ZrfDesign.prototype.reserve = function (player, piece, cnt) {
        const o = Dagaz.find(this.playerNames, player);
        const t = Dagaz.find(this.pieceNames, piece);
        if (o < 0 || t < 0) {
            this.failed = true;
        } else {
            if (_.isUndefined(this.reserve[t])) {
                this.reserve[t] = [];
            }
            this.reserve[t][o] = cnt;
        }
    };

    ZrfDesign.prototype.setup = function (player, piece, pos, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getSetupSelector()
        ) {
            return;
        }
        if (_.isArray(pos)) {
            _.each(
                pos,
                function (p) {
                    this.setup(player, piece, Dagaz.Model.stringToPos(p, this));
                },
                this
            );
            return;
        }
        const o = Dagaz.find(this.playerNames, player);
        const t = Dagaz.find(this.pieceNames, piece);
        if (o < 0 || t < 0) {
            this.failed = true;
        } else {
            const board = Dagaz.Model.getInitBoard();
            board.setPiece(pos, Dagaz.Model.createPiece(t, o));
        }
    };

    ZrfDesign.prototype.goal = function (n, player, piece, pos) {
        const o = Dagaz.find(this.playerNames, player);
        if (_.isUndefined(this.goals[o])) {
            this.goals[o] = [];
        }
        this.goals[o].push({
            num: n,
            piece: Dagaz.find(this.pieceNames, piece),
            positions: pos
        });
    };

    Dagaz.Model.getPieceTypes = (piece) => [piece.type];

    ZrfDesign.prototype.getGoalPositions = function (player, pieces) {
        if (!_.isUndefined(this.goals[player])) {
            return _.chain(this.goals[player])
                .filter((goal) => goal.num == 0)
                .filter((goal) => _.indexOf(pieces, goal.piece) >= 0)
                .map((goal) => goal.positions)
                .flatten()
                .uniq()
                .value();
        } else {
            return [];
        }
    };

    ZrfDesign.prototype.getTemplate = function (ix) {
        if (_.isUndefined(this.templates[ix])) {
            this.templates[ix] = Dagaz.Model.createTemplate();
        }
        return this.templates[ix];
    };

    ZrfDesign.prototype.addCommand = function (ix, name, param) {
        const template = this.getTemplate(ix);
        template.addCommand(name, param);
    };

    ZrfDesign.prototype.addPriority = function (mode) {
        this.modes.push(mode);
    };

    ZrfDesign.prototype.addAttribute = function (type, name, val) {
        if (_.isUndefined(this.attrs[name])) {
            this.attrs[name] = [];
        }
        this.attrs[name][type] = val;
    };

    ZrfDesign.prototype.getAttribute = function (type, name) {
        if (_.isUndefined(this.attrs[name])) {
            return null;
        }
        if (_.isUndefined(this.attrs[name][type])) {
            return null;
        }
        return this.attrs[name][type];
    };

    ZrfDesign.prototype.addPiece = function (name, type, price) {
        this.pieceNames[type] = name;
        this.price[type] = price ? price : 1;
    };

    ZrfDesign.prototype.addMove = function (
        type,
        template,
        params,
        mode,
        sound
    ) {
        if (_.isUndefined(this.pieces[type])) {
            this.pieces[type] = [];
        }
        if (!_.isUndefined(this.templates[template])) {
            this.pieces[type].push({
                type: 0,
                template: this.templates[template],
                params: params,
                sound: sound,
                mode: mode
            });
        }
    };

    ZrfDesign.prototype.addDrop = function (
        type,
        template,
        params,
        mode,
        sound
    ) {
        if (_.isUndefined(this.pieces[type])) {
            this.pieces[type] = [];
        }
        if (!_.isUndefined(this.templates[template])) {
            this.pieces[type].push({
                type: 1,
                template: this.templates[template],
                params: params,
                sound: sound,
                mode: mode
            });
        }
    };

    ZrfDesign.prototype.checkVersion = function (name, value, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getSetupSelector()
        ) {
            return;
        }
        console.log("checkVersion: " + name + "=" + value);
        this.options[name] = value;
        Dagaz.Model.checkVersion(this, name, value);
    };

    ZrfDesign.prototype.checkOption = function (name, value) {
        return Dagaz.Model.checkOption(this, name, value);
    };

    ZrfDesign.prototype.getPieceType = function (name) {
        const r = Dagaz.find(this.pieceNames, name);
        if (r < 0) {
            return null;
        }
        return r;
    };

    ZrfDesign.prototype.getDirection = function (name) {
        const r = Dagaz.find(this.dirs, name);
        if (r < 0) {
            return null;
        }
        return r;
    };

    ZrfDesign.prototype.addDirection = function (name) {
        this.dirs.push(name);
    };

    ZrfDesign.prototype.addPlayer = function (player, symmetries, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getResourceSelector()
        )
            return;
        let ix = this.playerNames.length;
        if (this.playerNames.length == 0) {
            ix = 0;
            this.playerNames.push("opposite");
        }
        this.players[ix] = Dagaz.int32Array(symmetries);
        this.playerNames.push(player);
    };

    ZrfDesign.prototype.getPlayersCount = function () {
        return this.playerNames.length - 1;
    };

    ZrfDesign.prototype.addTurn = function (player, modes, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getResourceSelector()
        )
            return;
        if (_.isUndefined(this.turns)) {
            this.turns = [];
        }
        if (!_.isUndefined(modes) && !_.isArray(modes)) {
            modes = [modes];
        }
        this.turns.push({
            random: false,
            player: player,
            modes: modes
        });
    };

    ZrfDesign.prototype.addRandom = function (player, modes) {
        if (_.isUndefined(this.turns)) {
            this.turns = [];
        }
        this.turns.push({
            random: true,
            player: player,
            modes: modes
        });
    };

    ZrfDesign.prototype.repeatMark = function () {
        if (_.isUndefined(this.turns)) {
            this.turns = [];
        }
        this.repeat = this.turns.length;
    };

    ZrfDesign.prototype.isPuzzle = function () {
        if (!_.isUndefined(this.turns) && this.turns.length == 1) return true;
        return _.chain(_.keys(this.playerNames)).max().value() == 1;
    };

    ZrfDesign.prototype.nextPlayer = function (player) {
        if (player + 1 >= this.playerNames.length) {
            return 1;
        } else {
            return player + 1;
        }
    };

    ZrfDesign.prototype.nextTurn = function (board) {
        let turn = board.turn + 1;
        if (_.isUndefined(this.turns)) {
            if (turn >= this.playerNames.length - 1) {
                turn = 0;
                if (this.repeat) {
                    turn += this.repeat;
                }
            }
        } else {
            if (turn >= this.turns.length) {
                turn = 0;
                if (this.repeat) {
                    turn += this.repeat;
                }
            }
        }
        return turn;
    };

    ZrfDesign.prototype.currPlayer = function (turn) {
        if (_.isUndefined(this.turns)) {
            return turn + 1;
        } else {
            return this.turns[turn].player;
        }
    };

    ZrfDesign.prototype.isValidMode = function (turn, mode) {
        if (
            _.isUndefined(this.turns) ||
            _.isUndefined(this.turns[turn]) ||
            _.isUndefined(this.turns[turn].modes)
        ) {
            return true;
        } else {
            return _.indexOf(this.turns[turn].modes, mode) >= 0;
        }
    };

    ZrfDesign.prototype.prevPlayer = function (player) {
        if (player == 1) {
            return this.playerNames.length;
        } else {
            return player - 1;
        }
    };

    ZrfDesign.prototype.prevTurn = function (board) {
        if (_.isUndefined(this.turns)) {
            if (board.turn == 0) {
                return this.playerNames.length - 2;
            }
        } else {
            if (board.turn == 0 || board.turn == this.repeat) {
                return this.turns.length - 1;
            }
        }
        return board.turn - 1;
    };

    function ZrfGrid(design) {
        this.design = design;
        this.scales = [];
        this.dirs = [];
    }

    ZrfGrid.prototype.addScale = function (scale) {
        this.scales.push(scale.split("/"));
    };

    ZrfGrid.prototype.addDirection = function (name, offsets) {
        if (_.indexOf(this.dirs, name) < 0) {
            this.design.addDirection(name);
        }
        const ix = _.indexOf(this.design.dirs, name);
        if (ix >= 0) {
            this.dirs[ix] = offsets;
        }
    };

    ZrfDesign.prototype.addPosition = function (name, links) {
        if (_.isUndefined(links)) {
            links = _.map(_.range(this.dirs.length), (dir) => 0);
        }
        if (_.isArray(name)) {
            _.each(
                name,
                function (n) {
                    this.addPosition(n, links);
                },
                this
            );
            return;
        }
        this.positionNames.push(name);
        this.positions.push(Dagaz.int32Array(links));
    };

    ZrfDesign.prototype.linkPosition = function (dir, from, to) {
        if (dir >= this.dirs.length) return;
        if (
            from >= this.positions.length ||
            to >= this.positions.length ||
            from == to
        )
            return;
        this.positions[from][dir] = to - from;
    };

    ZrfDesign.prototype.linkPositions = function (commands, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getResourceSelector()
        )
            return;
        _.each(
            commands,
            function (c) {
                this.linkPosition(c.dir, c.from, c.to);
            },
            this
        );
    };

    ZrfDesign.prototype.unlinkPosition = function (dir, from) {
        if (dir >= this.dirs.length) return;
        if (from >= this.positions.length) return;
        this.positions[from][dir] = 0;
    };

    ZrfDesign.prototype.unlinkPositions = function (commands, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getResourceSelector()
        )
            return;
        _.each(
            commands,
            function (c) {
                let dirs = _.range(this.dirs.length);
                if (!_.isUndefined(c.dir)) {
                    dirs = [c.dir];
                }
                if (!_.isUndefined(c.from)) {
                    _.each(
                        dirs,
                        function (dir) {
                            if (!_.isUndefined(c.to)) {
                                const p = this.navigate(1, c.from, dir);
                                if (p !== null && p != c.to) return;
                            }
                            this.unlinkPosition(dir, c.from);
                        },
                        this
                    );
                } else {
                    if (_.isUndefined(c.to)) return;
                    _.each(this.allPositions(), function (from) {
                        if (from == c.to) return;
                        _.each(
                            dirs,
                            function (dir) {
                                const p = this.navigate(1, from, dir);
                                if (p === null) return;
                                if (p != c.to) return;
                                this.unlinkPosition(dir, from);
                            },
                            this
                        );
                    });
                }
            },
            this
        );
    };

    ZrfDesign.prototype.killPosition = function (pos) {
        for (let dir = 0; dir < this.dirs.length; dir++) {
            this.unlinkPosition(dir, pos);
        }
        this.unlinkPositions({
            to: pos
        });
    };

    ZrfDesign.prototype.killPositions = function (positions, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getResourceSelector()
        )
            return;
        _.each(
            positions,
            function (pos) {
                this.killPosition(pos);
            },
            this
        );
    };

    ZrfDesign.prototype.addGrid = function () {
        return new ZrfGrid(this);
    };

    const addPositions = (self, ix, name, point) => {
        if (ix < 0) {
            const offsets = _.map(_.range(self.dirs.length), (dir) => 0);
            _.each(_.keys(self.dirs), (dir) => {
                let o = 0;
                for (let c = self.scales.length - 1; c >= 0; c--) {
                    if (c < self.scales.length - 1) {
                        o = o * self.scales[c].length;
                    }
                    const v = self.dirs[dir][c];
                    const x = point[c] + v;
                    if (x < 0) return;
                    if (x >= self.scales[c].length) return;
                    o += v;
                }
                offsets[dir] = o;
            });
            self.design.addPosition(name, offsets);
            return;
        }
        for (let i = 0; i < self.scales[ix].length; i++) {
            point.unshift(i);
            addPositions(self, ix - 1, self.scales[ix][i] + name, point);
            point.shift();
        }
    };

    ZrfGrid.prototype.addPositions = function () {
        addPositions(this, this.scales.length - 1, "", []);
    };

    ZrfDesign.prototype.findDirection = function (from, to) {
        if (from >= this.positions.length) return null;
        const dir = Dagaz.find(this.positions[from], to - from);
        if (dir < 0) return null;
        return dir;
    };

    ZrfDesign.prototype.opposite = function (dir, player) {
        if (_.isUndefined(player)) {
            player = 0;
        }
        return this.players[player][dir];
    };

    ZrfDesign.prototype.navigate = function (player, pos, dir) {
        if (!_.isUndefined(this.players[player])) {
            dir = this.players[player][dir];
        }
        if (this.positions[pos][dir] != 0) {
            return +pos + this.positions[pos][dir];
        } else {
            return null;
        }
    };

    ZrfDesign.prototype.getZone = function (name) {
        const zone = Dagaz.find(this.zoneNames, name);
        if (zone < 0) return null;
        return zone;
    };

    ZrfDesign.prototype.addZone = function (name, player, positions, selector) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getResourceSelector()
        )
            return;
        let zone = Dagaz.find(this.zoneNames, name);
        if (zone < 0) {
            zone = this.zoneNames.length;
            this.zoneNames.push(name);
        }
        if (_.isUndefined(this.zones[zone])) {
            this.zones[zone] = [];
        }
        this.zones[zone][player] = Dagaz.int32Array(positions);
    };

    ZrfDesign.prototype.zonePositions = function (zone, player) {
        if (!_.isUndefined(this.zones[zone])) {
            if (!_.isUndefined(this.zones[zone][player])) {
                return this.zones[zone][player];
            }
        }
        return [];
    };

    ZrfDesign.prototype.inZone = function (zone, player, pos) {
        if (!_.isUndefined(this.zones[zone])) {
            if (!_.isUndefined(this.zones[zone][player])) {
                return Dagaz.find(this.zones[zone][player], pos) >= 0;
            }
        }
        return false;
    };

    function ZrfMoveTemplate() {
        this.commands = [];
    }

    Dagaz.Model.createTemplate = () => new ZrfMoveTemplate();

    ZrfMoveTemplate.prototype.addCommand = function (name, param) {
        if (!_.isUndefined(Dagaz.Model.commands[name])) {
            if (_.isUndefined(Dagaz.Model.cache)) {
                Dagaz.Model.cache = [];
            }
            if (_.isUndefined(Dagaz.Model.cache[name])) {
                Dagaz.Model.cache[name] = [];
            }
            const offset = param;
            if (_.isUndefined(Dagaz.Model.cache[name][offset])) {
                Dagaz.Model.cache[name][offset] = (x) =>
                    Dagaz.Model.commands[name](x, offset);
            }
            this.commands.push(Dagaz.Model.cache[name][offset]);
        }
    };

    function ZrfMoveGenerator(design, mode, serial, sound) {
        this.move = new ZrfMove(mode, serial, sound);
        this.start = mode;
        this.moveType = 1;
        this.template = null;
        this.params = null;
        this.mode = null;
        this.board = null;
        this.pos = null;
        this.parent = null;
        this.pieces = [];
        this.values = [];
        this.attrs = [];
        this.stack = [];
        this.marks = [];
        this.cmd = 0;
        this.level = 1;
        this.serial = serial;
        this.design = design;
        this.steps = [];
    }

    Dagaz.Model.createGen = (template, params, design, mode, serial, sound) => {
        if (_.isUndefined(design)) {
            design = Dagaz.Model.getDesign();
        }
        const r = new ZrfMoveGenerator(design, mode, serial, sound);
        r.template = template;
        r.params = Dagaz.int32Array(params);
        return r;
    };

    ZrfMoveGenerator.prototype.init = function (board, pos) {
        this.board = board;
        this.pos = +pos;
        if (Dagaz.Model.detectLoops) {
            this.steps.push(this.pos);
        }
    };

    ZrfMoveGenerator.prototype.clone = function () {
        const r = new ZrfMoveGenerator(
            this.design,
            this.start,
            this.serial,
            this.sound
        );
        r.template = this.template;
        r.params = this.params;
        r.level = this.level;
        r.parent = this.parent;
        r.cmd = this.cmd;
        r.mode = this.mode;
        r.board = this.board;
        r.pos = this.pos;
        if (!_.isUndefined(this.cover)) {
            r.cover = this.cover;
            r.serial = this.serial;
        }
        if (!_.isUndefined(this.initial)) {
            r.initial = this.initial;
        }
        _.each(this.marks, (it) => {
            r.marks.push(it);
        });
        _.each(this.stack, (it) => {
            r.stack.push(it);
        });
        _.each(
            _.keys(this.pieces),
            function (pos) {
                r.pieces[pos] = this.pieces[pos];
            },
            this
        );
        _.each(
            _.keys(this.values),
            function (name) {
                r.values[name] = [];
                _.each(
                    _.keys(this.values[name]),
                    function (pos) {
                        r.values[name][pos] = this.values[name][pos];
                    },
                    this
                );
            },
            this
        );
        _.each(
            _.keys(this.attrs),
            function (pos) {
                r.attrs[pos] = [];
                _.each(
                    _.keys(this.attrs[pos]),
                    function (name) {
                        r.attrs[pos][name] = this.attrs[pos][name];
                    },
                    this
                );
            },
            this
        );
        if (!_.isUndefined(this.from)) {
            r.from = this.from;
        }
        if (!_.isUndefined(this.piece)) {
            r.piece = this.piece;
        }
        r.move = this.move.clone(r.level);
        return r;
    };

    const copyArray = (a) => {
        const r = [];
        if (Dagaz.Model.detectLoops) {
            _.each(a, (x) => {
                r.push(x);
            });
        }
        return r;
    };

    ZrfMoveGenerator.prototype.copy = function (template, params) {
        const r = Dagaz.Model.createGen(
            template,
            params,
            this.design,
            this.move.mode,
            this.serial,
            this.move.sound
        );
        r.level = this.level + 1;
        r.parent = this;
        r.board = this.board;
        r.pos = this.pos;
        r.move = this.move.copy();
        r.steps = copyArray(this.steps);
        if (Dagaz.Model.detectLoops) {
            r.steps.push(this.pos);
        }
        if (!_.isUndefined(this.cover)) {
            r.cover = this.cover;
            r.serial = this.serial;
        }
        if (!_.isUndefined(this.initial)) {
            r.initial = this.initial;
        }
        return r;
    };

    ZrfMoveGenerator.prototype.notLooped = function () {
        return this.steps.length < 2 || _.indexOf(this.steps, this.pos) < 0;
    };

    ZrfMoveGenerator.prototype.getPos = function () {
        return this.pos;
    };

    ZrfMoveGenerator.prototype.movePiece = function (from, to, piece) {
        if (!_.isUndefined(this.attrs[to])) {
            for (const name in this.attrs[to]) {
                piece = piece.setValue(name, this.attrs[to][name]);
            }
        }
        this.move.movePiece(from, to, piece, this.level);
        this.lastf = from;
        this.lastt = to;
        if (from != to) {
            this.setPiece(from, null);
        }
        this.setPiece(to, piece);
    };

    ZrfMoveGenerator.prototype.dropPiece = function (pos, piece) {
        this.move.dropPiece(pos, piece, this.level);
        this.setPiece(pos, piece);
    };

    var isCaptured = (move, pos) => {
        if (!Dagaz.Model.deferredStrike) return false;
        for (let i = 0; i < move.actions.length; i++) {
            const a = move.actions[i];
            if (a[0] !== null && a[1] === null && a[0] == pos) return true;
        }
        return false;
    };

    ZrfMoveGenerator.prototype.capturePiece = function (pos) {
        if (isCaptured(this.move, pos)) return false;
        this.move.capturePiece(pos, this.level);
        this.setPiece(pos, null);
        return true;
    };

    Dagaz.Model.getMark = (gen) => {
        if (gen.marks.length == 0) {
            return null;
        } else {
            const pos = gen.marks.pop();
            gen.marks.push(pos);
            return pos;
        }
    };

    ZrfMoveGenerator.prototype.getMark = function () {
        return Dagaz.Model.getMark(this);
    };

    Dagaz.Model.setMark = (gen) => {
        if (gen.marks.length > 0) {
            gen.marks.pop();
        }
        if (gen.pos !== null) {
            gen.marks.push(gen.pos);
        }
    };

    ZrfMoveGenerator.prototype.setMark = function () {
        Dagaz.Model.setMark(this);
    };

    ZrfMoveGenerator.prototype.getPieceInternal = function (pos) {
        if (!_.isUndefined(this.pieces[pos])) {
            return this.pieces[pos];
        }
        if (this.parent !== null) {
            return this.parent.getPieceInternal(pos);
        }
        return this.board.getPiece(pos);
    };

    Dagaz.Model.getPiece = (gen, pos) => {
        if (gen.parent !== null) {
            return gen.parent.getPieceInternal(pos);
        }
        return gen.board.getPiece(pos);
    };

    ZrfMoveGenerator.prototype.getPiece = function (pos) {
        return Dagaz.Model.getPiece(this, pos);
    };

    ZrfMoveGenerator.prototype.setPiece = function (pos, piece) {
        this.pieces[pos] = piece;
    };

    Dagaz.Model.isLastFrom = (pos, board) => {
        if (!_.isUndefined(board.lastf)) {
            return board.lastf == pos;
        } else {
            return false;
        }
    };

    ZrfMoveGenerator.prototype.isLastFrom = function (pos) {
        if (this.parent !== null) {
            if (!_.isUndefined(this.parent.lastf)) {
                return this.parent.lastf == pos;
            } else {
                return false;
            }
        }
        return Dagaz.Model.isLastFrom(pos, this.board);
    };

    Dagaz.Model.isLastTo = (pos, board) => {
        if (!_.isUndefined(board.lastt)) {
            return board.lastt == pos;
        } else {
            return false;
        }
    };

    ZrfMoveGenerator.prototype.isLastTo = function (pos) {
        if (this.parent !== null) {
            if (!_.isUndefined(this.parent.lastt)) {
                return this.parent.lastt == pos;
            } else {
                return false;
            }
        }
        return Dagaz.Model.isLastTo(pos, this.board);
    };

    Dagaz.Model.getValueInternal = (aThis, name, pos) => null;

    ZrfMoveGenerator.prototype.getValue = function (name, pos) {
        if (!_.isUndefined(this.values[name])) {
            if (!_.isUndefined(this.values[name][pos])) {
                return this.values[name][pos];
            }
        }
        return Dagaz.Model.getValueInternal(this, name, pos);
    };

    ZrfMoveGenerator.prototype.setValue = function (name, pos, value) {
        if (_.isUndefined(this.values[name])) {
            this.values[name] = [];
        }
        this.values[name][pos] = value;
    };

    Dagaz.Model.getAttrInternal = (gen, name, pos) => null;

    ZrfMoveGenerator.prototype.getAttr = function (name, pos) {
        const piece = this.getPiece(pos);
        if (piece !== null) {
            return piece.getValue(name);
        }
        return Dagaz.Model.getAttrInternal(this, name, pos);
    };

    ZrfMoveGenerator.prototype.setAttr = function (name, pos, value) {
        if (_.isUndefined(this.attrs[pos])) {
            this.attrs[pos] = [];
        }
        this.attrs[pos][name] = value;
        let piece = this.getPieceInternal(pos);
        if (piece !== null) {
            piece = piece.setValue(name, value);
            this.move.movePiece(pos, pos, piece, this.level);
            this.setPiece(pos, piece);
        }
    };

    ZrfMoveGenerator.prototype.generate = function () {
        while (this.cmd < this.template.commands.length) {
            const r = this.template.commands[this.cmd++](this);
            if (r === null) return;
            this.cmd += r;
            if (this.cmd < 0) return;
        }
        this.cmd = 0;
        this.completed = true;
    };

    function ZrfPiece(type, player) {
        this.type = type;
        this.player = player;
    }

    Dagaz.Model.createPiece = (type, player) => {
        if (_.isUndefined(Dagaz.Model.cachePiece)) {
            Dagaz.Model.cachePiece = [];
        }
        if (_.isUndefined(Dagaz.Model.cachePiece[player])) {
            Dagaz.Model.cachePiece[player] = [];
        }
        if (_.isUndefined(Dagaz.Model.cachePiece[player][type])) {
            Dagaz.Model.cachePiece[player][type] = new ZrfPiece(type, player);
        }
        return Dagaz.Model.cachePiece[player][type];
    };

    Dagaz.Model.pieceToString = (piece) =>
        piece.getOwner() + " " + piece.getType();

    ZrfPiece.prototype.toString = function () {
        return Dagaz.Model.pieceToString(this);
    };

    ZrfPiece.prototype.getType = function () {
        const design = Dagaz.Model.getDesign();
        return design.pieceNames[this.type];
    };

    ZrfPiece.prototype.getOwner = function () {
        const design = Dagaz.Model.getDesign();
        return design.playerNames[this.player];
    };

    ZrfPiece.prototype.getValue = function (name) {
        if (!_.isUndefined(this.values)) {
            if (!_.isUndefined(this.values[name])) {
                return this.values[name];
            }
        }
        const design = Dagaz.Model.getDesign();
        return design.getAttribute(this.type, name);
    };

    ZrfPiece.prototype.setValue = function (name, value) {
        if (this.getValue(name) == value) {
            return this;
        }
        const piece = new ZrfPiece(this.type, this.player);
        if (_.isUndefined(piece.values)) {
            piece.values = [];
        }
        if (!_.isUndefined(this.values)) {
            for (let ix = 0; ix < this.values.length; ix++) {
                if (!_.isUndefined(this.values[ix])) {
                    piece.values[ix] = this.values[ix];
                }
            }
        }
        piece.values[name] = value;
        return piece;
    };

    ZrfPiece.prototype.promote = function (type) {
        return Dagaz.Model.createPiece(type, this.player);
    };

    ZrfPiece.prototype.changeOwner = function (player) {
        if (this.player == player) {
            return this;
        } else {
            return Dagaz.Model.createPiece(this.type, player);
        }
    };

    ZrfPiece.prototype.flip = function () {
        const design = Dagaz.Model.getDesign();
        return Dagaz.Model.createPiece(
            this.type,
            design.nextPlayer(this.player)
        );
    };

    Dagaz.Model.BuildDesign = (design) => {};

    Dagaz.Model.InitGame = function () {
        const design = Dagaz.Model.getDesign();
        this.BuildDesign(design);
    };

    function ZrfBoard(game) {
        this.game = game;
        this.pieces = [];
        this.forks = [];
        this.turn = 0;
        this.player = Dagaz.Model.getDesign().currPlayer(this.turn);
        this.changed = [];
        this.parent = null;
        this.values = [];
        this.zSign = Dagaz.Model.zplayer(0, this.player);
        this.hSign = Dagaz.Model.hplayer(0, this.player);
        this.level = 0;
    }

    ZrfBoard.prototype.assign = function (board) {
        this.zSign = board.zSign;
        this.hSign = board.hSign;
        this.pieces = board.pieces;
        delete this.moves;
    };

    ZrfBoard.prototype.getValue = function (name) {
        if (_.isUndefined(this.values[name])) {
            return null;
        } else {
            return this.values[name];
        }
    };

    ZrfBoard.prototype.setValue = function (name, value) {
        if (value === null) {
            delete this.values[name];
        } else {
            this.values[name] = value;
        }
    };

    ZrfBoard.prototype.traceMoves = function () {
        const signs = [];
        const moves = [];
        let board = this;
        while (board.parent) {
            if (board.zSign != 0) {
                if (_.indexOf(signs, board.zSign) >= 0) {
                    let f = true;
                    while (f) {
                        moves.pop();
                        f = signs.pop() != board.zSign;
                    }
                }
            }
            if (board.move) {
                signs.push(board.zSign);
                moves.push(board.move);
            }
            board = board.parent;
        }
        return moves.reverse();
    };

    Dagaz.Model.checkGoals = (design, board, player) => {
        let r = null;
        _.each(_.keys(design.goals), (p) => {
            const groups = _.groupBy(design.goals[p], (goal) => goal.num);
            const goals = _.map(_.keys(groups), (num) => groups[num]);
            const s = _.reduce(
                goals,
                (acc, goal) => {
                    if (
                        _.reduce(
                            goal,
                            (acc, g) => {
                                const type = g.piece;
                                if (
                                    !_.reduce(
                                        g.positions,
                                        (acc, pos) => {
                                            const piece = board.getPiece(pos);
                                            if (
                                                piece !== null &&
                                                piece.player == p &&
                                                piece.type == type
                                            )
                                                return true;
                                            return acc;
                                        },
                                        false
                                    )
                                )
                                    return false;
                                return acc;
                            },
                            true
                        )
                    )
                        return true;
                    return acc;
                },
                false
            );
            if (s) {
                r = p == player ? 1 : -1;
            }
        });
        return r;
    };

    ZrfBoard.prototype.checkGoals = function (design, player) {
        if (!player) {
            player = this.player;
        }
        return Dagaz.Model.checkGoals(design, this, player);
    };

    Dagaz.Model.setup = (board) => {};

    ZrfBoard.prototype.setup = function (view, initialize) {
        if (initialize) {
            Dagaz.Model.setup(this);
        }
        view.clear();
        _.each(
            _.keys(this.pieces),
            function (pos) {
                const piece = this.pieces[pos];
                if (piece !== null) {
                    view.addPiece(piece.toString(), pos, piece);
                }
            },
            this
        );
    };

    ZrfBoard.prototype.copy = function () {
        const r = new ZrfBoard(this.game);
        r.parent = this;
        r.player = this.player;
        r.zSign = this.zSign;
        r.hSign = this.hSign;
        r.lastf = this.lastf;
        r.lastt = this.lastt;
        r.reserve = [];
        _.each(
            _.keys(this.reserve),
            function (t) {
                r.reserve[t] = [];
                _.each(
                    _.keys(this.reserve[t]),
                    function (p) {
                        r.reserve[t][p] = this.reserve[t][p];
                    },
                    this
                );
            },
            this
        );
        _.each(
            _.keys(this.pieces),
            function (pos) {
                r.pieces[pos] = this.pieces[pos];
            },
            this
        );
        _.each(
            _.keys(this.values),
            function (k) {
                r.values[k] = this.values[k];
            },
            this
        );
        return r;
    };

    Dagaz.Model.getInitBoard = () => {
        if (_.isUndefined(Dagaz.Model.board)) {
            const design = Dagaz.Model.getDesign();
            Dagaz.Model.board = new ZrfBoard(Dagaz.Model);
            Dagaz.Model.board.reserve = design.reserve;
        }
        return Dagaz.Model.board;
    };

    ZrfBoard.prototype.clear = function () {
        this.zSign = 0;
        this.hSign = 0;
        this.pieces = [];
    };

    ZrfBoard.prototype.addFork = function (gen) {
        if (!_.isUndefined(Dagaz.Model.movesLimit)) {
            if (this.forks.length >= Dagaz.Model.movesLimit) {
                this.failed = true;
                return;
            }
        }
        this.forks.push(gen);
    };

    ZrfBoard.prototype.getPiece = function (pos) {
        if (_.isUndefined(this.pieces[pos])) {
            return null;
        } else {
            return this.pieces[pos];
        }
    };

    ZrfBoard.prototype.setPiece = function (pos, piece) {
        if (!_.isUndefined(this.pieces[pos])) {
            const op = this.pieces[pos];
            this.zSign = Dagaz.Model.zupdate(this.zSign, op, pos);
            this.hSign = Dagaz.Model.hupdate(this.hSign, op, pos);
        }
        if (piece === null) {
            delete this.pieces[pos];
        } else {
            this.pieces[pos] = piece;
            this.zSign = Dagaz.Model.zupdate(this.zSign, piece, pos);
            this.hSign = Dagaz.Model.hupdate(this.hSign, piece, pos);
        }
    };

    ZrfBoard.prototype.addMove = function (move) {
        this.moves.push(move);
    };

    ZrfBoard.prototype.changeMove = function (move) {
        if (this.moves.length > 0) {
            this.moves.pop();
        }
        this.moves.push(move);
    };

    ZrfBoard.prototype.getSignature = function () {
        return this.zSign;
    };

    Dagaz.Model.PostActions = (board) => {
        board.moves = _.filter(board.moves, (m) => _.isUndefined(m.failed));
    };

    Dagaz.Model.CheckInvariants = (board) => {};
    Dagaz.Model.Extension = (board) => {};

    Dagaz.Model.getPartList = (board, gen) => [gen.lastt];

    const addPrior = (priors, mode, gen) => {
        let ix = 0;
        if (gen.design.modes.length > 0) {
            ix = Dagaz.find(gen.design.modes, mode);
            if (Dagaz.Model.zrfCompatible && ix < 0) {
                ix = gen.design.modes.length;
            }
        }
        if (ix >= 0) {
            if (_.isUndefined(priors[ix])) {
                priors[ix] = [];
            }
            priors[ix].push(gen);
        }
    };

    const CompleteMove = function (board, gen, cover, serial) {
        let f = false;
        if (!_.isUndefined(gen.initial)) {
            f = true;
            gen.pos = gen.initial;
            gen.lastt = gen.initial;
        }
        const positions = Dagaz.Model.getPartList(board, gen);
        if (!Dagaz.Model.passPartial) {
            var t = 2;
        } else {
            var t = 1;
        }
        while (positions.length > 0) {
            pos = positions.pop();
            let piece = gen.getPieceInternal(pos);
            if (f && piece === null && gen.parent !== null) {
                piece = gen.parent.getPieceInternal(pos);
                gen.setPiece(pos, piece);
            }
            if (
                piece !== null &&
                (Dagaz.Model.sharedPieces ||
                    Dagaz.Model.isFriend(piece, board.player))
            ) {
                _.each(
                    board.game.design.pieces[piece.type],
                    (move) => {
                        if (
                            move.type == 0 &&
                            move.mode == gen.mode &&
                            gen.notLooped()
                        ) {
                            const g = gen.copy(move.template, move.params);
                            if (!_.isUndefined(cover)) {
                                g.cover = cover;
                                g.serial = serial;
                            }
                            g.moveType = t;
                            g.generate();
                            if (g.completed && g.moveType == 0) {
                                CompleteMove(board, g, cover, serial);
                                t = 1;
                            }
                        }
                    },
                    this
                );
            }
        }
    };

    ZrfBoard.prototype.generateInternal = function (
        callback,
        cont,
        cover,
        serial
    ) {
        const design = this.game.design;
        if (_.isUndefined(this.moves)) {
            this.moves = [];
        } else {
            return;
        }
        let sn = 0;
        if (this.moves.length == 0 && !design.failed && this.player > 0) {
            const priors = [];
            _.chain(_.keys(this.pieces))
                .filter(function (pos) {
                    return (
                        !_.isUndefined(cover) ||
                        Dagaz.Model.sharedPieces ||
                        Dagaz.Model.isFriend(this.pieces[pos], this.player)
                    );
                }, this)
                .each(function (pos) {
                    const piece = this.pieces[pos];
                    _.chain(design.pieces[piece.type])
                        .filter((move) => move.type == 0)
                        .filter(function (move) {
                            return design.isValidMode(this.turn, move.mode);
                        }, this)
                        .each(function (move) {
                            const g = Dagaz.Model.createGen(
                                move.template,
                                move.params,
                                this.game.design,
                                move.mode,
                                sn++,
                                move.sound
                            );
                            if (!_.isUndefined(cover)) {
                                g.cover = cover;
                                g.serial = serial;
                            }
                            g.init(this, pos);
                            addPrior(priors, move.mode, g);
                        }, this);
                }, this);
            if (_.isUndefined(cover)) {
                _.each(
                    design.allPositions(),
                    function (pos) {
                        _.chain(_.range(design.pieces.length))
                            .filter(function (tp) {
                                return !Dagaz.Model.noReserve(this, tp);
                            }, this)
                            .each(function (tp) {
                                _.chain(design.pieces[tp])
                                    .filter((move) => move.type == 1)
                                    .filter(function (move) {
                                        return design.isValidMode(
                                            this.turn,
                                            move.mode
                                        );
                                    }, this)
                                    .each(function (move) {
                                        const g = Dagaz.Model.createGen(
                                            move.template,
                                            move.params,
                                            this.game.design,
                                            move.mode,
                                            sn++,
                                            move.sound
                                        );
                                        g.init(this, pos);
                                        g.piece = new ZrfPiece(tp, this.player);
                                        addPrior(priors, move.mode, g);
                                    }, this);
                            }, this);
                    },
                    this
                );
            }
            this.forks = [];
            if (callback.checkContinue()) {
                for (let i = 0; i <= design.modes.length; i++) {
                    let f = false;
                    if (!_.isUndefined(priors[i])) {
                        while (priors[i].length > 0) {
                            var g = priors[i].pop();
                            g.generate();
                            if (g.completed && !g.move.isPass()) {
                                if (cont && g.moveType == 0) {
                                    CompleteMove(this, g, cover, serial);
                                }
                                f = true;
                            }
                        }
                    }
                    if (f) break;
                    if (i >= design.modes.length) break;
                }
                while (this.forks.length > 0) {
                    var g = this.forks.pop();
                    g.generate();
                    if (g.completed) {
                        if (cont && g.moveType == 0) {
                            CompleteMove(this, g, cover, serial);
                        }
                    }
                }
            }
            Dagaz.Model.Extension(this);
            if (cont) {
                Dagaz.Model.CheckInvariants(this);
                Dagaz.Model.PostActions(this);
                if (Dagaz.Model.passTurn == 1) {
                    this.moves.push(new ZrfMove());
                }
                if (Dagaz.Model.passTurn == 2) {
                    if (this.moves.length == 0) {
                        this.moves.push(new ZrfMove());
                    }
                }
            }
        }
    };

    ZrfBoard.prototype.generate = function (design) {
        this.generateInternal(this, true);
    };

    Dagaz.Model.GetCover = (design, board) => {
        if (_.isUndefined(board.cover)) {
            const b = board.copy();
            board.cover = [];
            board.serial = [];
            for (let pos = 0; pos < design.positions.length; pos++) {
                board.cover[pos] = [];
                board.serial[pos] = [];
                let piece = b.getPiece(pos);
                if (piece !== null) {
                    piece = piece.changeOwner(0);
                    b.setPiece(pos, piece);
                }
            }
            b.generateInternal(b, true, board.cover, board.serial);
        }
        return board.cover;
    };

    ZrfBoard.prototype.getCover = function (design) {
        return Dagaz.Model.GetCover(design, this);
    };

    ZrfBoard.prototype.checkContinue = () => true;

    Dagaz.Model.decReserve = (board, piece) => {
        if (!_.isUndefined(board.reserve[piece.type])) {
            if (
                !_.isUndefined(board.reserve[piece.type][piece.player]) &&
                board.reserve[piece.type][piece.player] > 0
            ) {
                board.reserve[piece.type][piece.player]--;
            }
        }
    };

    Dagaz.Model.incReserve = (board, piece) => {
        if (!_.isUndefined(board.reserve[piece.type])) {
            if (!_.isUndefined(board.reserve[piece.type][piece.player])) {
                board.reserve[piece.type][piece.player]++;
            }
        }
    };

    Dagaz.Model.noReserve = (board, piece) => {
        if (!_.isUndefined(board.reserve[piece])) {
            if (!_.isUndefined(board.reserve[piece][board.player])) {
                return board.reserve[piece][board.player] <= 0;
            }
        }
        return false;
    };

    ZrfBoard.prototype.movePiece = function (move, from, to, piece) {
        this.lastf = from;
        this.lastt = to;
        this.lastc = to;
        if (piece === null && this.parent) {
            piece = this.parent.getPiece(from);
        }
        if (piece === null) {
            piece = this.getPiece(from);
        }
        if (Dagaz.find(this.changed, from) < 0) {
            this.setPiece(from, null);
        }
        this.setPiece(to, piece);
        this.changed.push(to);
    };

    ZrfBoard.prototype.dropPiece = function (move, pos, piece) {
        this.lastt = pos;
        Dagaz.Model.decReserve(this, piece);
        this.setPiece(pos, piece);
        this.changed.push(pos);
    };

    ZrfBoard.prototype.capturePiece = function (move, pos) {
        if (Dagaz.Model.recycleCaptures) {
            const piece = this.getPiece(pos);
            if (piece != null) {
                Dagaz.Model.incReserve(this, piece);
            }
        }
        this.setPiece(pos, null);
        this.changed = _.filter(this.changed, (p) => p != pos);
    };

    ZrfBoard.prototype.commit = function (move) {
        this.changed = [];
    };

    Dagaz.Model.Done = (design, board) => {};

    ZrfBoard.prototype.apply = function (move) {
        if (!_.isUndefined(move.result)) return move.result;
        const design = Dagaz.Model.design;
        const r = this.copy();
        r.turn = design.nextTurn(this);
        r.zSign = Dagaz.Model.zplayer(r.zSign, this.player);
        r.hSign = Dagaz.Model.hplayer(r.hSign, this.player);
        r.player = design.currPlayer(r.turn);
        r.level = this.level + 1;
        move.applyAll(r);
        r.move = move;
        r.zSign = Dagaz.Model.zplayer(r.zSign, r.player);
        r.hSign = Dagaz.Model.hplayer(r.hSign, r.player);
        return r;
    };

    function ZrfMove(mode, serial, sound) {
        this.actions = [];
        this.serial = serial;
        if (!_.isUndefined(sound)) {
            this.sound = sound;
        }
        if (_.isUndefined(mode)) {
            this.mode = 0;
        } else {
            this.mode = mode;
        }
    }

    Dagaz.Model.createMove = (mode, sound) => {
        const r = new ZrfMove(mode);
        r.sound = sound;
        return r;
    };

    Dagaz.Model.compareMove = (move, notation) => move.toString() == notation;

    const cartesian = (r, prefix, arr) => {
        if (arr.length > 0) {
            _.each(_.first(arr), (n) => {
                const x = _.clone(prefix);
                x.push(n);
                cartesian(r, x, _.rest(arr));
            });
        } else {
            r.push(prefix);
        }
    };

    _.mixin({
        cartesian: function (x) {
            const r = [];
            cartesian(r, [], x);
            return r;
        }
    });

    ZrfMove.prototype.getZ = function () {
        if (_.isUndefined(this.zSign)) {
            _.each(
                this.actions,
                function (a) {
                    if (a[2] === null) return;
                    if (a[0] !== null) {
                        this.zSign = Dagaz.Model.zupdate(
                            this.zSign,
                            a[2][0],
                            a[0][0]
                        );
                    }
                    if (a[1] !== null) {
                        this.zSign = Dagaz.Model.zupdate(
                            this.zSign,
                            a[2][0],
                            a[1][0]
                        );
                    }
                },
                this
            );
        }
        return this.zSign;
    };

    ZrfMove.prototype.getControlList = function () {
        return _.chain(this.actions)
            .map((action) =>
                _.chain(_.range(3))
                    .map((ix) => {
                        if (action[ix] === null) {
                            return 0;
                        } else {
                            return action[ix].length;
                        }
                    })
                    .filter((n) => n > 1)
                    .value()
            )
            .flatten()
            .map((n) => _.range(n))
            .cartesian()
            .value();
    };

    const pushItem = (r, list, control, ix) => {
        if (
            list === null ||
            list.length < 1 ||
            list.length == 1 ||
            ix >= control.length
        ) {
            r.push(list);
            return ix;
        }
        if (list[control[ix]] === null) {
            r.push(null);
        } else {
            r.push([list[control[ix]]]);
        }
        return ix + 1;
    };

    const isValidAction = (action) => action[0] !== null || action[1] !== null;

    const isValidMove = (move) =>
        1 >=
        _.chain(move.actions)
            .filter((action) => action[1] === null)
            .map((action) => action[0][0])
            .countBy()
            .values()
            .max()
            .value();

    ZrfMove.prototype.determinate = function () {
        const c = this.getControlList();
        if (c.length > 1) {
            return _.chain(c)
                .map(function (l) {
                    const r = new ZrfMove(this.mode);
                    r.serial = this.serial;
                    let pos = 0;
                    _.each(
                        this.actions,
                        function (action) {
                            const x = [];
                            _.each(
                                _.range(3),
                                function (ix) {
                                    pos = pushItem(this, action[ix], l, pos);
                                },
                                x
                            );
                            x.push(action[3]);
                            if (isValidAction(x)) {
                                this.actions.push(x);
                            }
                        },
                        r
                    );
                    return r;
                }, this)
                .filter(isValidMove)
                .value();
        } else {
            return [this];
        }
    };

    ZrfMove.prototype.copy = function () {
        const r = new ZrfMove(this.mode);
        r.actions = _.filter(this.actions);
        r.serial = this.serial;
        r.sound = this.sound;
        return r;
    };

    ZrfMove.prototype.clone = function (level) {
        const r = new ZrfMove(this.mode);
        r.serial = this.serial;
        r.sound = this.sound;
        let o = true;
        r.actions = _.chain(this.actions)
            .filter((action) => {
                if (action[0] !== null && action[1] !== null && o) {
                    if (Dagaz.Model.discardCascades) {
                        o = false;
                    }
                    return true;
                }
                if (Dagaz.Model.forkMode || Math.abs(action[3]) < level) {
                    return true;
                }
                return false;
            })
            .value();
        return r;
    };

    Dagaz.Model.moveToString = (move, part) => {
        if (move.actions.length == 0) {
            return "Pass";
        }
        let r = "";
        let l = "";
        const n = (action) => {
            let p = action[3];
            if (p < 0) {
                p = -p;
            }
            if (part == 0) {
                p = 0;
            }
            return p == part;
        };
        _.chain(move.actions)
            .filter(n)
            .filter(
                (action) =>
                    action[0] !== null &&
                    action[1] !== null &&
                    action[0] != action[1] &&
                    action[0][0] != action[1][0]
            )
            .each((action) => {
                if (l !== action[0][0]) {
                    if (r.length > 0) {
                        r = r + " ";
                    }
                    r = r + Dagaz.Model.posToString(action[0][0]);
                }
                r = r + " - ";
                r = r + Dagaz.Model.posToString(action[1][0]);
                l = action[1][0];
            });
        _.chain(move.actions)
            .filter(n)
            .filter((action) => action[0] !== null && action[1] === null)
            .each((action) => {
                if (r.length > 0) {
                    r = r + " ";
                }
                r = r + "x ";
                r = r + Dagaz.Model.posToString(action[0][0]);
                l = action[0][0];
            });
        _.chain(move.actions)
            .filter(n)
            .filter((action) => action[0] === null && action[1] !== null)
            .each((action) => {
                if (r.length > 0) {
                    r = r + " ";
                }
                if (action[2] !== null) {
                    r = r + action[2][0].toString() + " ";
                }
                r = r + Dagaz.Model.posToString(action[1][0]);
                l = "";
            });
        return r;
    };

    ZrfMove.prototype.toString = function (part) {
        return Dagaz.Model.moveToString(this, part ? part : 0);
    };

    ZrfMove.prototype.isAttacked = function (pos) {
        return (
            _.chain(this.actions)
                .filter((action) => {
                    const fp = action[0];
                    const tp = action[1];
                    if (fp !== null && fp[0] == pos && tp === null) {
                        return true;
                    }
                    if (
                        tp !== null &&
                        tp[0] == pos &&
                        fp !== null &&
                        fp[0] != tp[0]
                    ) {
                        return true;
                    }
                    return false;
                })
                .size()
                .value() > 0
        );
    };

    ZrfMove.prototype.applyTo = function (obj, part) {
        if (!part) part = 1;
        let r = false;
        const n = (action) => action[3] == part;
        _.chain(this.actions)
            .filter(n)
            .filter((action) => action[0] !== null && action[1] !== null)
            .each(function (action) {
                obj.movePiece(
                    this,
                    action[0][0],
                    action[1][0],
                    action[2] === null ? null : action[2][0],
                    action[3]
                );
                r = true;
            }, this);
        _.chain(this.actions)
            .filter(n)
            .filter(
                (action) =>
                    action[0] === null &&
                    action[1] !== null &&
                    action[2] !== null
            )
            .each(function (action) {
                obj.dropPiece(this, action[1][0], action[2][0], action[3]);
                r = true;
            }, this);
        _.chain(this.actions)
            .filter(n)
            .filter((action) => action[0] !== null && action[1] === null)
            .each(function (action) {
                obj.capturePiece(this, action[0][0], action[3]);
                r = true;
            }, this);
        _.chain(this.actions)
            .filter(n)
            .filter(
                (action) =>
                    action[0] === null &&
                    action[1] === null &&
                    action[2] !== null
            )
            .each((action) => {
                if (!_.isUndefined(action[2][0].exec)) {
                    action[2][0].exec(obj);
                }
            });
        if (r) {
            obj.commit(this);
        }
        return r;
    };

    ZrfMove.prototype.applyAll = function (obj) {
        const mx = _.chain(this.actions)
            .map((action) => action[3])
            .push(0)
            .max()
            .value();
        if (mx > 0) {
            _.chain(_.range(1, mx + 1)).each(function (part) {
                this.applyTo(obj, part);
            }, this);
        }
    };

    ZrfMove.prototype.movePiece = function (from, to, piece, part) {
        if (!part) part = 1;
        if (piece === null) {
            this.actions.push([[from], [to], null, part]);
        } else {
            this.actions.push([[from], [to], [piece], part]);
        }
    };

    ZrfMove.prototype.dropPiece = function (pos, piece, part) {
        if (!part) part = 1;
        this.actions.push([null, [pos], [piece], part]);
    };

    ZrfMove.prototype.capturePiece = function (pos, part) {
        if (!part) part = 1;
        this.actions.push([[pos], null, null, part]);
    };

    ZrfMove.prototype.getTarget = function () {
        for (let i = 0; i < this.actions.length; i++) {
            const a = this.actions[i];
            if (a[0] !== null && a[1] !== null) {
                return a[1][0];
            }
        }
        return null;
    };

    ZrfMove.prototype.setReserve = function (type, player, value, part) {
        if (!part) part = 1;
        this.actions.push([
            null,
            null,
            [
                {
                    exec: function (obj) {
                        if (obj.reserve) {
                            obj.reserve[type][player] = value;
                        }
                    }
                }
            ],
            part
        ]);
    };

    ZrfMove.prototype.addReserve = function (type, player, value, part) {
        if (!part) part = 1;
        this.actions.push([
            null,
            null,
            [
                {
                    exec: function (obj) {
                        if (obj.reserve) {
                            obj.reserve[type][player] += value;
                        }
                    }
                }
            ],
            part
        ]);
    };

    ZrfMove.prototype.setValue = function (name, value, part) {
        if (!part) part = 1;
        this.actions.push([
            null,
            null,
            [
                {
                    exec: function (obj) {
                        if (obj.setValue) {
                            obj.setValue(name, value);
                        }
                    }
                }
            ],
            part
        ]);
    };

    ZrfMove.prototype.addValue = function (name, value, part) {
        if (!part) part = 1;
        this.actions.push([
            null,
            null,
            [
                {
                    exec: function (obj) {
                        if (obj.getValue && obj.setValue) {
                            let acc = obj.getValue(name);
                            if (!acc) acc = 0;
                            acc += value;
                            obj.setValue(name, acc);
                        }
                    }
                }
            ],
            part
        ]);
    };

    ZrfMove.prototype.goTo = function (turn, part) {
        if (!part) part = 1;
        this.actions.push([
            null,
            null,
            [
                {
                    exec: function (obj) {
                        const design = Dagaz.Model.design;
                        if (
                            !_.isUndefined(obj.turn) &&
                            !_.isUndefined(obj.player)
                        ) {
                            obj.turn = turn;
                            obj.player = design.currPlayer(turn);
                        }
                    }
                }
            ],
            part
        ]);
    };

    ZrfMove.prototype.playSound = function (ix, delay, part) {
        if (!part) part = 1;
        if (!_.isUndefined(Dagaz.Controller.play)) {
            this.actions.push([
                null,
                null,
                [
                    {
                        exec: function () {
                            if (_.isUndefined(delay)) {
                                Dagaz.Controller.play(ix);
                            } else {
                                _.delay(Dagaz.Controller.play, delay, ix);
                            }
                        }
                    }
                ],
                part
            ]);
        }
    };

    ZrfMove.prototype.isPass = function () {
        return this.actions.length == 0;
    };

    ZrfMove.prototype.clarify = function (move) {
        _.each(
            move.actions,
            function (s) {
                if (s[0] !== null && s[1] !== null) {
                    _.each(this.actions, (d) => {
                        if (
                            d[0] !== null &&
                            d[1] !== null &&
                            d[0][0] == s[0][0] &&
                            d[1][0] == s[1][0]
                        ) {
                            d[2] = s[2];
                        }
                    });
                }
            },
            this
        );
    };

    ZrfMove.prototype.isSimpleMove = function () {
        return (
            this.actions.length == 1 &&
            this.actions[0][0] !== null &&
            this.actions[0][1] !== null
        );
    };

    ZrfMove.prototype.isDropMove = function () {
        const r = false;
        for (let i = 0; i < this.actions.length; i++) {
            if (this.actions[i][0] !== null) return false;
            if (this.actions[i][1] !== null) return true;
        }
        return r;
    };

    ZrfMove.prototype.join = function (move) {
        _.each(
            move.actions,
            function (a) {
                this.actions.push(a);
            },
            this
        );
    };

    Dagaz.Model.getX = (pos) => pos % Dagaz.Model.WIDTH;

    Dagaz.Model.getY = (pos) => (pos / Dagaz.Model.WIDTH) | 0;

    Dagaz.Model.continue = (design, board, str, result) => {
        if (!_.isUndefined(result) && result < 1) return str;
        const re = /^(\D*)(\d+)(.*)$/;
        let num = str.replace(re, "$2");
        if (num) {
            const len = num.length;
            num = +num + 1;
            while (num.toString().length < len) {
                num = "0" + num;
            }
            return str.replace(re, "$1" + num + "$3");
        }
        return null;
    };

    Dagaz.Model.getSetupSelector = (val) => {
        if (_.isUndefined(Dagaz.Model.setupSelector)) {
            const str = window.location.search.toString();
            const result = str.match(/[?&]selector=([^&]*)/);
            if (result) {
                Dagaz.Model.setupSelector = +result[1];
            }
        }
        if (_.isUndefined(Dagaz.Model.setupSelector)) {
            if (!_.isUndefined(val) && val > 1) {
                Dagaz.Model.setupSelector = _.random(1, val);
            } else {
                Dagaz.Model.setupSelector = 1;
            }
        }
        return Dagaz.Model.setupSelector;
    };

    ZrfDesign.prototype.setupSelector = (val) => {
        Dagaz.Model.getSetupSelector(val);
    };

    Dagaz.Model.getResourceSelector = () => Dagaz.Model.setupSelector;
})();
(() => {
    getRandomByte = () => _.random(0, 255);

    function ZobristHash() {
        this.lh = [];
        this.hh = [];
        this.lp = [];
        this.hp = [];
    }

    ZobristHash.prototype.getRandomValue = () => {
        let r = getRandomByte();
        for (let i = 0; i < 3; i++) {
            r = r << 8;
            r = r | getRandomByte();
        }
        return r;
    };

    ZobristHash.prototype.update = function (value, player, piece, pos) {
        if (_.isUndefined(this.lh[piece])) {
            this.lh[piece] = [];
        }
        if (_.isUndefined(this.lh[piece][player])) {
            this.lh[piece][player] = [];
        }
        if (_.isUndefined(this.lh[piece][player][pos])) {
            this.lh[piece][player][pos] = this.getRandomValue();
        }
        return value ^ this.lh[piece][player][pos];
    };

    ZobristHash.prototype.hpdate = function (value, player, piece, pos) {
        if (_.isUndefined(this.hh[piece])) {
            this.hh[piece] = [];
        }
        if (_.isUndefined(this.hh[piece][player])) {
            this.hh[piece][player] = [];
        }
        if (_.isUndefined(this.hh[piece][player][pos])) {
            this.hh[piece][player][pos] = this.getRandomValue();
        }
        return value ^ this.hh[piece][player][pos];
    };

    ZobristHash.prototype.zplayer = function (value, player) {
        if (_.isUndefined(this.lp[player])) {
            this.lp[player] = this.getRandomValue();
        }
        return value ^ this.lp[player];
    };

    ZobristHash.prototype.hplayer = function (value, player) {
        if (_.isUndefined(this.hp[player])) {
            this.hp[player] = this.getRandomValue();
        }
        return value ^ this.hp[player];
    };

    Dagaz.Model.getZobristHash = () => {
        if (_.isUndefined(Dagaz.Model.zobrist)) {
            Dagaz.Model.zobrist = new ZobristHash();
        }
        return Dagaz.Model.zobrist;
    };

    Dagaz.Model.getPieceType = (piece) => piece.type;

    Dagaz.Model.zupdate = (value, piece, pos) => {
        const z = Dagaz.Model.getZobristHash();
        return z.update(
            value,
            piece.player,
            Dagaz.Model.getPieceType(piece),
            pos
        );
    };

    Dagaz.Model.hupdate = (value, piece, pos) => {
        const z = Dagaz.Model.getZobristHash();
        return z.hpdate(
            value,
            piece.player,
            Dagaz.Model.getPieceType(piece),
            pos
        );
    };

    Dagaz.Model.zplayer = (value, player) => {
        const z = Dagaz.Model.getZobristHash();
        return z.zplayer(value, player);
    };

    Dagaz.Model.hplayer = (value, player) => {
        const z = Dagaz.Model.getZobristHash();
        return z.hplayer(value, player);
    };
})();
(() => {
    Dagaz.Controller.persistense = "setup";

    const getName = () => {
        const str = window.location.pathname.toString();
        const result = str.match(/\/([^.\/]+)\./);
        if (result) {
            return result[1]
                .replace("-board", "")
                .replace("-ai", "")
                .replace("-kanji", "");
        } else {
            return str;
        }
    };

    const badName = (str) => {
        const result = str.match(/[?&]game=([^&*]*)/);
        if (result) {
            return result[1] != getName();
        } else {
            return true;
        }
    };

    const getCookie = () => {
        const result = localStorage.getItem("dagaz.setup");
        if (result) {
            if (badName(result)) return "";
            return "?setup=" + result;
        } else {
            return "";
        }
    };

    const getSetup = (setup) => {
        let str = window.location.search.toString();
        if (setup) {
            str = setup;
        }
        let result = str.match(/[?&]setup=([^&]*)/);
        if (result) {
            return result[1];
        } else {
            str = getCookie();
            result = str.match(/[?&]setup=([^&]*)/);
            if (result) {
                return result[1];
            } else {
                return "";
            }
        }
    };

    const getTurn = (setup) => {
        let str = window.location.search.toString();
        if (setup) {
            str = setup;
        }
        let result = str.match(/[?&]turn=(\d+)/);
        if (result) {
            return result[1];
        } else {
            str = getCookie();
            result = str.match(/[?&]turn=(\d+)/);
            if (result) {
                return result[1];
            } else {
                return "";
            }
        }
    };

    const getSeed = (setup) => {
        let str = window.location.search.toString();
        if (setup) {
            str = setup;
        }
        let result = str.match(/[?&]seed=(\d+)/);
        if (result) {
            return result[1];
        } else {
            str = getCookie();
            result = str.match(/[?&]seed=(\d+)/);
            if (result) {
                return result[1];
            } else {
                return "";
            }
        }
    };

    const getReserve = (setup) => {
        let str = window.location.search.toString();
        if (setup) {
            str = setup;
        }
        let result = str.match(/[?&]reserve=([,;\d]+)/);
        if (result) {
            return result[1];
        } else {
            str = getCookie();
            result = str.match(/[?&]reserve=([,;\d]+)/);
            if (result) {
                return result[1];
            } else {
                return "";
            }
        }
    };

    const getGlobal = (setup) => {
        let str = window.location.search.toString();
        if (setup) {
            str = setup;
        }
        let result = str.match(/[?&]global=([;\d]+)/);
        if (result) {
            return result[1];
        } else {
            str = getCookie();
            result = str.match(/[?&]global=([;\d]+)/);
            if (result) {
                return result[1];
            } else {
                return "";
            }
        }
    };

    function Pattern(exec) {
        this.exec = exec;
        this.then = (transform) =>
            new Pattern((str, pos) => {
                const r = exec(str, pos);
                return r && { res: transform(r.res), end: r.end };
            });
    }

    function txt(text) {
        return new Pattern((str, pos) => {
            if (str.substr(pos, text.length) == text)
                return { res: text, end: pos + text.length };
        });
    }

    function rgx(regexp) {
        return new Pattern((str, pos) => {
            const m = regexp.exec(str.slice(pos));
            if (m && m.index == 0) return { res: m[0], end: pos + m[0].length };
        });
    }

    function opt(pattern) {
        return new Pattern(
            (str, pos) => pattern.exec(str, pos) || { res: void 0, end: pos }
        );
    }

    function seq(patterns) {
        return new Pattern((str, pos) => {
            let i;
            let r;
            let end = pos;
            const res = [];
            for (i = 0; i < patterns.length; i++) {
                r = patterns[i].exec(str, end);
                if (!r) return;
                res.push(r.res);
                end = r.end;
            }
            return { res: res, end: end };
        });
    }

    function rep(pattern, separator) {
        const separated = !separator
            ? pattern
            : seq([separator, pattern]).then((r) => r[1]);
        return new Pattern((str, pos) => {
            const res = [];
            let end = pos;
            let r = pattern.exec(str, end);
            while (r && r.end > end) {
                res.push(r.res);
                end = r.end;
                r = separated.exec(str, end);
            }
            return { res: res, end: end };
        });
    }

    const num = rgx(/-?\d+/);
    const str = rgx(/[^=;+]+/);

    const attr = seq([txt("="), str]).then((r) => r[1]);

    const quan = seq([txt("+"), num]).then((r) => r[1]);

    const parm = seq([num, txt(":"), num, opt(rep(attr))]).then((r) => ({
        type: r[0],
        player: r[2],
        attrs: r[3]
    }));

    const term = seq([opt(parm), opt(quan), txt(";")]).then((r) => ({
        body: r[0],
        quan: r[1]
    }));

    const conf = rep(term);

    Dagaz.Model.setup = (board, init) => {
        const design = Dagaz.Model.design;
        const setup = getSetup(init);
        if (setup) {
            const r = conf.exec(setup, 0);
            if (r.end > 0) {
                let pos = 0;
                for (let ix = 0; ix < r.res.length; ix++, pos++) {
                    if (pos >= design.positions.length) break;
                    let piece = null;
                    if (ix < r.res.length && !_.isUndefined(r.res[ix].body)) {
                        const type = r.res[ix].body.type;
                        const player = r.res[ix].body.player;
                        piece = Dagaz.Model.createPiece(type, player);
                        for (var i = 0; i < r.res[ix].body.attrs.length; i++) {
                            piece = piece.setValue(i, r.res[ix].body.attrs[i]);
                        }
                    }
                    board.setPiece(pos, piece);
                    if (!_.isUndefined(r.res[ix].quan)) {
                        const cnt = +r.res[ix].quan;
                        for (var i = 0; i < cnt; i++) {
                            pos++;
                            if (pos >= design.positions.length) break;
                            board.setPiece(pos, piece);
                        }
                    }
                }
                const turn = getTurn(init);
                if (turn) {
                    board.turn = +turn;
                    board.player = design.currPlayer(board.turn);
                }
                _.each(_.keys(board.reserve), (t) => {
                    _.each(_.keys(board.reserve[t]), (p) => {
                        board.reserve[t][p] = 0;
                    });
                });
                const rs = getReserve(init);
                if (rs) {
                    Dagaz.Model.setReserve(design, board, rs);
                }
                const g = getGlobal(init);
                if (g) {
                    Dagaz.Model.setGlobal(design, board, g);
                }
            }
        }
    };

    Dagaz.Model.getGlobal = (design, board) => {
        let r = "";
        const k = _.keys(board.values);
        if (k.length > 0) {
            for (let i = 0; i <= _.max(k); i++) {
                const v = board.getValue(i);
                if (v !== null) {
                    r = r + v;
                }
                r = r + ";";
            }
        }
        return r;
    };

    Dagaz.Model.setGlobal = (design, board, str) => {
        let ix = 0;
        let n = null;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == ";") {
                if (n !== null) {
                    board.setValue(ix, n);
                }
                n = null;
                ix++;
            } else {
                if (n !== null) {
                    n = n * 10;
                } else {
                    n = 0;
                }
                n += +str[i];
            }
        }
    };

    Dagaz.Model.getReserve = (design, board) => {
        let r = "";
        for (let o = 1; o < design.playerNames.length; o++) {
            if (r != "") r = r + ";";
            _.each(_.keys(design.pieceNames), (t) => {
                if (_.isUndefined(board.reserve[t])) return;
                if (_.isUndefined(board.reserve[t][o])) {
                    r = r + "0,";
                } else {
                    r = r + board.reserve[t][o] + ",";
                }
            });
        }
        return r;
    };

    Dagaz.Model.setReserve = (design, board, str) => {
        design.reserve = [];
        let o = 1;
        let t = 0;
        let n = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == ";") {
                o++;
                t = 0;
            } else if (str[i] == ",") {
                if (_.isUndefined(design.reserve[t])) {
                    design.reserve[t] = [];
                }
                design.reserve[t][o] = n;
                t++;
                n = 0;
            } else {
                n = n * 10;
                n += +str[i];
            }
        }
        board.reserve = design.reserve;
    };

    Dagaz.Model.getSetup = (design, board) => {
        let str = "";
        let prev = null;
        let cnt = 0;
        _.each(design.allPositions(), (pos) => {
            const piece = board.getPiece(pos);
            let s = "";
            if (piece !== null) {
                s = s + piece.type + ":" + piece.player;
                for (let i = 0; i < 10; i++) {
                    const value = piece.getValue(i);
                    if (value === null) break;
                    s = s + "=" + value;
                }
            }
            if (prev === null || prev != s) {
                if (prev !== null) {
                    str = str + prev;
                    if (cnt > 0) {
                        str = str + "+" + cnt;
                    }
                    str = str + ";";
                }
                prev = s;
                cnt = 0;
            } else {
                cnt++;
            }
        });
        str = str + prev;
        if (cnt > 0) {
            str = str + "+" + cnt;
        }
        str = str + ";&turn=" + board.turn;
        const rs = Dagaz.Model.getReserve(design, board);
        if (rs != "") {
            str = str + "&reserve=" + rs;
        }
        const g = Dagaz.Model.getGlobal(design, board);
        if (g != "") {
            str = str + "&global=" + g;
        }
        if (!_.isUndefined(Dagaz.Controller.seed)) {
            str = str + "&seed=" + Dagaz.Controller.seed;
        }
        if (Dagaz.Controller.persistense == "setup") {
            const s = str + "&game=" + getName() + "*";
            localStorage.setItem("dagaz.setup", s);
        }
        return "?setup=" + str;
    };

    const getSetupSelector = Dagaz.Model.getSetupSelector;

    Dagaz.Model.getSetupSelector = (val) => {
        if (
            Dagaz.Controller.randomized &&
            _.isUndefined(Dagaz.Controller.seed)
        ) {
            Dagaz.Controller.seed = getSeed();
            if (!Dagaz.Controller.seed) {
                Dagaz.Controller.seed = _.random(0, 10000);
            }
            console.log("Seed: " + Dagaz.Controller.seed);
            Math.seedrandom(+Dagaz.Controller.seed);
        }
        return getSetupSelector(val);
    };

    const clearGame = Dagaz.Controller.clearGame;

    Dagaz.Controller.clearGame = () => {
        localStorage.setItem("dagaz.setup", "");
        if (!_.isUndefined(clearGame)) {
            clearGame();
        }
    };
})();
(() => {
    const checkVersion = Dagaz.Model.checkVersion;
    let superKo = null;
    let numKo = 1;
    let asymmetric = false;

    Dagaz.Model.checkVersion = (design, name, value) => {
        if (name == "ko") {
            if (value == "true") {
                superKo = 0;
            }
            if (value == "position") {
                superKo = 1;
            }
            if (value == "situation") {
                superKo = 2;
            }
            if (value == "asymmetric") {
                superKo = 2;
                asymmetric = true;
            }
            if (value == "3") {
                superKo = 2;
                numKo = 2;
            }
        } else {
            checkVersion(design, name, value);
        }
    };

    const zplayer = Dagaz.Model.zplayer;

    Dagaz.Model.zplayer = (value, player) => {
        if (superKo == 1) return value;
        return zplayer(value, player);
    };

    const CheckInvariants = Dagaz.Model.CheckInvariants;

    Dagaz.Model.CheckInvariants = (board) => {
        if (superKo !== null && (!asymmetric || board.player > 1)) {
            for (let i = 0; i < board.moves.length; i++) {
                let r = 0;
                const m = board.moves[i];
                const b = board.apply(m);
                if (superKo == 0) {
                    if (board.parent) {
                        if (b.zSign == board.parent.zSign) {
                            r = 1;
                        }
                    }
                } else {
                    let p = b;
                    while (p.parent) {
                        const q = p.parent;
                        if (superKo == 1 || q.player == b.player) {
                            if (b.zSign == q.zSign) {
                                r++;
                                if (numKo < 2 || r >= numKo) {
                                    break;
                                }
                            }
                        }
                        p = q;
                    }
                }
                if (r >= numKo) {
                    if (m.actions.length > 0 && m.actions[0][1] !== null) {
                        pos = m.actions[0][1][0];
                        if (_.isUndefined(board.ko)) {
                            board.ko = [];
                        }
                        if (_.indexOf(board.ko, pos) < 0) {
                            board.ko.push(pos);
                        }
                    }
                    m.failed = true;
                }
            }
        }
        CheckInvariants(board);
    };
})();
(() => {
    Dagaz.View.SHIFT_X = 0;
    Dagaz.View.SHIFT_Y = 0;

    Dagaz.View.STRIKE_ALPHA = 0.5;
    Dagaz.View.DROPS_ALPHA = 0.5;

    Dagaz.View.HINT_STEPS = 1;

    Dagaz.View.markType = {
        TARGET: 0,
        ATTACKING: 1,
        GOAL: 2,
        CURRENT: 3,
        KO: 4
    };

    Dagaz.View.maxSteps = 3;
    Dagaz.View.STEP_CNT = 3;

    let self = null;
    let isConfigured = false;
    let isValid = false;
    let mouseX = 0;
    let mouseY = 0;
    let mousePressed = false;
    let hintedPiece = null;
    const fromPos = null;
    let deferred = [];
    let blink = 0;

    Dagaz.View.blink = [1, 0, -1, 0];

    Dagaz.View.configure = (view) => {};

    function View2D() {
        this.pos = [];
        this.res = [];
        this.back = [];
        this.piece = [];
        this.board = [];
        this.setup = [];
        this.target = [];
        this.strike = [];
        this.goal = [];
        this.changes = [];
        this.vectors = [];
        this.current = [];
        this.drops = [];
        this.ko = [];
    }

    Dagaz.View.getView = () => {
        if (_.isUndefined(Dagaz.View.view)) {
            Dagaz.View.view = new View2D();
        }
        return Dagaz.View.view;
    };

    Dagaz.View.inRect = (view, pos, x, y) =>
        x > view.pos[pos].x &&
        y > view.pos[pos].y &&
        x < view.pos[pos].x + view.pos[pos].dx &&
        y < view.pos[pos].y + view.pos[pos].dy;

    Dagaz.View.pointToPieces = (view, x, y) => {
        const list = _.chain(view.setup)
            .map((piece) => +piece.pos)
            .filter((pos) => Dagaz.View.inRect(view, pos, x, y))
            .sortBy((pos) => -pos)
            .value();
    };

    View2D.prototype.pointToPieces = function (x, y) {
        return Dagaz.View.pointToPieces(this, x, y);
    };

    Dagaz.View.pointToPositions = (view, x, y) =>
        _.chain(_.range(view.pos.length))
            .filter((pos) => Dagaz.View.inRect(view, pos, x, y))
            .value();

    View2D.prototype.pointToPositions = function (x, y) {
        return Dagaz.View.pointToPositions(this, x, y);
    };

    const posToIx = (view, pos) => {
        for (let i = 0; i < view.setup.length; i++) {
            if (view.setup[i].pos == pos) {
                return i;
            }
        }
        return null;
    };

    View2D.prototype.isEmpty = function (pos) {
        return posToIx(this, pos) === null;
    };

    View2D.prototype.setDrops = function (name, positions) {
        this.drops = [];
        if (!_.isUndefined(this.piece[name])) {
            _.each(
                positions,
                function (p) {
                    if (p <= this.pos.length) {
                        this.drops.push({
                            piece: this.piece[name],
                            position: this.pos[p]
                        });
                    }
                },
                this
            );
        }
    };

    View2D.prototype.clearDrops = function () {
        this.drops = [];
    };

    View2D.prototype.defPosition = function (name, x, y, dx, dy) {
        this.pos.push({
            name: name,
            x: x,
            y: y,
            dx: dx,
            dy: dy
        });
    };

    View2D.prototype.defBoard = function (img, x, y, selector, turns) {
        if (
            !_.isUndefined(selector) &&
            selector != Dagaz.Model.getResourceSelector()
        )
            return;
        const board = {
            h: document.getElementById(img),
            t: turns,
            x: x ? x : 0,
            y: y ? y : 0
        };
        this.res.push(board);
        this.back.push(board);
    };

    View2D.prototype.defPiece = function (img, name, help, glyph) {
        const piece = {
            h: document.getElementById(img),
            name: name
        };
        if (glyph) {
            piece.glyph = document.getElementById(glyph);
        }
        if (help) {
            piece.help = help;
        }
        this.res.push(piece);
        this.piece[name] = piece;
    };

    View2D.prototype.allResLoaded = function () {
        if (this.allDone) return true;
        for (let i = 0; i < this.res.length; i++) {
            const image = this.res[i].h;
            if (!image.complete || image.naturalWidth == 0) return false;
            this.res[i].dx = image.naturalWidth;
            this.res[i].dy = image.naturalHeight;
        }
        this.allDone = true;
        return true;
    };

    View2D.prototype.clear = function () {
        this.setup = [];
    };

    View2D.prototype.addPiece = function (piece, pos, model) {
        this.setup.push({
            pos: +pos,
            name: piece,
            model: model,
            x: this.pos[pos].x,
            y: this.pos[pos].y
        });
    };

    View2D.prototype.markPositions = function (type, positions) {
        if (type == Dagaz.View.markType.TARGET) {
            this.target = positions;
        }
        if (type == Dagaz.View.markType.ATTACKING) {
            this.strike = positions;
        }
        if (type == Dagaz.View.markType.GOAL) {
            this.goal = positions;
        }
        if (type == Dagaz.View.markType.CURRENT) {
            this.current = positions;
        }
        if (type == Dagaz.View.markType.KO) {
            this.ko = positions;
        }
        this.invalidate();
    };

    View2D.prototype.capturePiece = function (move, pos, phase) {
        if (!phase) {
            phase = 1;
        }
        _.chain(this.changes)
            .filter(
                (frame) =>
                    !_.isUndefined(frame.from) && !_.isUndefined(frame.to)
            )
            .filter((frame) => frame.to == pos)
            .each((frame) => {
                deferred.push(pos);
            });
        const ix = posToIx(this, pos);
        if (ix === null) return;
        this.changes.push({
            phase: phase,
            steps: 1,
            from: pos,
            op: ix
        });
    };

    View2D.prototype.dropPiece = function (move, pos, piece, phase) {
        if (!phase) {
            phase = 0;
        }
        const ix = posToIx(this, pos);
        this.changes.push({
            phase: phase,
            steps: 1,
            ix: ix,
            to: pos,
            model: piece,
            np: piece.toString()
        });
    };

    View2D.prototype.addVector = function (from, to, steps, mode, level) {
        if (!mode) mode = 0;
        if (!steps) {
            steps = Dagaz.View.STEP_CNT;
        }
        if (_.isUndefined(this.vectors[mode])) {
            this.vectors[mode] = [];
        }
        if (_.isUndefined(this.vectors[mode][from])) {
            this.vectors[mode][from] = [];
        }
        this.vectors[mode][from][to] = {
            steps: steps,
            level: level
        };
    };

    View2D.prototype.addPhase = function (ix, from, to, piece, phase, steps) {
        this.changes.push({
            phase: phase,
            steps: steps,
            from: from,
            to: to,
            ix: ix,
            model: piece,
            np: piece === null ? null : piece.toString(),
            dx: ((this.pos[to].x - this.pos[from].x) / steps) | 0,
            dy: ((this.pos[to].y - this.pos[from].y) / steps) | 0
        });
    };

    View2D.prototype.vectorFound = function (ix, from, to, piece, mode, phase) {
        if (!phase) {
            phase = 1;
        }
        if (phase > Dagaz.View.maxSteps) return false;
        if (this.vectors[mode] && this.vectors[mode][from]) {
            if (
                this.vectors[mode][from][to] &&
                this.vectors[mode][from][to].level == phase
            ) {
                this.addPhase(
                    ix,
                    from,
                    to,
                    piece,
                    phase,
                    this.vectors[mode][from][to].steps
                );
                return true;
            }
            const list = _.keys(this.vectors[mode][from]);
            for (let i = 0; i < list.length; i++) {
                const pos = list[i];
                if (this.vectors[mode][from][pos].level == phase) {
                    this.addPhase(
                        ix,
                        from,
                        pos,
                        piece,
                        phase,
                        this.vectors[mode][from][pos].steps
                    );
                    if (this.vectorFound(ix, pos, to, piece, mode, phase + 1)) {
                        return true;
                    }
                    this.changes.pop();
                }
            }
        }
        return false;
    };

    View2D.prototype.movePiece = function (
        move,
        from,
        to,
        piece,
        phase,
        steps
    ) {
        if (!phase) {
            phase = 1;
        }
        if (!steps) {
            steps = Dagaz.View.STEP_CNT;
        }
        const ix = posToIx(this, from);
        if (!this.vectorFound(ix, from, to, piece, move.mode)) {
            if (!_.isUndefined(move.hints)) {
                _.each(
                    move.hints,
                    function (p) {
                        this.addPhase(
                            ix,
                            from,
                            p,
                            piece,
                            phase,
                            Dagaz.View.HINT_STEPS
                        );
                        from = p;
                        phase++;
                    },
                    this
                );
            }
            this.addPhase(ix, from, to, piece, phase, steps);
        }
    };

    View2D.prototype.commit = function (move) {
        _.chain(this.changes)
            .filter(
                (frame) =>
                    !_.isUndefined(frame.from) && !_.isUndefined(frame.to)
            )
            .filter(function (frame) {
                return (
                    _.indexOf(
                        _.chain(this.changes)
                            .filter(
                                (frame) =>
                                    !_.isUndefined(frame.from) &&
                                    _.isUndefined(frame.to)
                            )
                            .map((frame) => frame.from)
                            .value(),
                        frame.to
                    ) >= 0
                );
            }, this)
            .each((frame) => {
                delete frame.ix;
            });
        _.chain(this.changes)
            .map((frame) => frame.phase)
            .uniq()
            .each(function (phase) {
                const steps = _.chain(this.changes)
                    .filter((frame) => frame.phase == phase)
                    .map((frame) => frame.steps)
                    .push(1)
                    .max()
                    .value();
                _.chain(this.changes)
                    .filter((frame) => frame.phase == phase)
                    .each((frame) => {
                        frame.cnt = steps;
                    });
            }, this);
        this.invalidate();
    };

    const drawMarks = (ctx, view, list, color) => {
        _.each(
            list,
            function (p) {
                const pos = this.pos[p];
                let x = pos.x;
                let y = pos.y;
                if (pos.dx > 0) {
                    x += (pos.dx / 2) | 0;
                }
                if (pos.dy > 0) {
                    y += (pos.dy / 2) | 0;
                }
                let r = pos.dx / 4;
                if (Math.abs(pos.dy - pos.dx) > 10) {
                    r = Math.min(pos.dy, pos.dx) / 2;
                }
                if (!_.isUndefined(Dagaz.View.MARK_R)) {
                    r = Dagaz.View.MARK_R;
                }
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.arc(
                    x + Dagaz.View.SHIFT_X,
                    y + Dagaz.View.SHIFT_Y,
                    r,
                    0,
                    2 * Math.PI
                );
                ctx.fill();
                ctx.stroke();
            },
            view
        );
    };

    View2D.prototype.drawKo = function (ctx) {
        if (!_.isUndefined(this.piece["Ko"]) && this.ko.length > 0) {
            const piece = this.piece["Ko"];
            _.each(
                this.ko,
                function (pos) {
                    const p = this.pos[pos];
                    const x = (p.x + (p.dx - piece.dx) / 2) | 0;
                    const y = (p.y + (p.dy - piece.dy) / 2) | 0;
                    if (!_.isUndefined(Dagaz.View.KO_ALPHA)) {
                        ctx.save();
                        ctx.globalAlpha = Dagaz.View.KO_ALPHA;
                    }
                    ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
                    if (!_.isUndefined(Dagaz.View.KO_ALPHA)) {
                        ctx.restore();
                    }
                },
                this
            );
        }
    };

    View2D.prototype.invalidate = () => {
        isValid = false;
    };

    const isCommitted = (frame) => !_.isUndefined(frame.cnt);

    const isDone = (frame) => frame.cnt <= 0;

    const isNotNull = (x) => !_.isUndefined(x) && x !== null;

    View2D.prototype.animate = function () {
        const len = this.changes.length;
        this.changes = _.filter(this.changes, (frame) =>
            _.isUndefined(frame.done)
        );
        const phase = _.chain(this.changes)
            .map((frame) => frame.phase)
            .min()
            .value();
        _.chain(this.changes)
            .filter((frame) => frame.phase == phase)
            .filter(
                (frame) => !_.isUndefined(frame.from) && _.isUndefined(frame.op)
            )
            .each(function (frame) {
                frame.op = posToIx(this, frame.from);
            }, this);
        this.changes = _.filter(this.changes, (frame) => {
            if (frame.phase > phase) return true;
            if (_.isUndefined(frame.from)) return true;
            return !_.isUndefined(frame.op);
        });
        _.chain(this.changes)
            .filter((frame) => frame.phase == phase)
            .filter(isCommitted)
            .each(function (frame) {
                if (!_.isUndefined(frame.op)) {
                    const piece = this.setup[frame.op];
                    if (piece) {
                        if (!_.isUndefined(frame.dx)) {
                            piece.x += frame.dx;
                        }
                        if (!_.isUndefined(frame.dy)) {
                            piece.y += frame.dy;
                        }
                        piece.z = Math.abs(+frame.dx) + Math.abs(+frame.dy);
                    }
                }
                frame.cnt--;
            }, this);
        const captured = _.chain(this.changes)
            .filter((frame) => frame.phase == phase)
            .filter(isCommitted)
            .filter(isDone)
            .map((frame) => {
                if (_.isUndefined(frame.to)) {
                    return frame.from;
                } else {
                    return frame.to;
                }
            })
            .map(function (pos) {
                return posToIx(this, pos);
            }, this)
            .filter(isNotNull)
            .difference(
                _.chain(this.changes)
                    .filter(isCommitted)
                    .filter(isDone)
                    .map((frame) => frame.ix)
                    .filter(isNotNull)
                    .value()
            )
            .value();
        _.chain(this.changes)
            .filter((frame) => frame.phase == phase)
            .filter(isCommitted)
            .filter(isDone)
            .each(function (frame) {
                if (!_.isUndefined(frame.op) && !_.isUndefined(frame.to)) {
                    const piece = this.setup[frame.op];
                    if (piece) {
                        if (frame.np) {
                            piece.name = frame.np;
                        }
                        if (frame.model) {
                            piece.model = frame.model;
                        }
                        piece.pos = +frame.to;
                        piece.x = this.pos[frame.to].x;
                        piece.y = this.pos[frame.to].y;
                        delete piece.z;
                    }
                }
                if (_.isUndefined(frame.op) && !_.isUndefined(frame.to)) {
                    this.setup.push({
                        pos: frame.to,
                        name: frame.np,
                        model: frame.model,
                        x: this.pos[frame.to].x,
                        y: this.pos[frame.to].y
                    });
                }
                frame.done = true;
            }, this);
        this.setup = _.chain(_.range(this.setup.length))
            .filter((ix) => _.indexOf(captured, ix) < 0)
            .map(function (ix) {
                return this.setup[ix];
            }, this)
            .value();
        if (len > 0 && this.changes.length == 0) {
            isValid = true;
            if (this.controller) {
                this.controller.done();
            }
            if (deferred.length > 0) {
                deferred = _.map(
                    deferred,
                    function (pos) {
                        return posToIx(this, pos);
                    },
                    this
                );
                this.setup = _.chain(_.range(this.setup.length))
                    .filter((ix) => _.indexOf(deferred, ix) < 0)
                    .map(function (ix) {
                        return this.setup[ix];
                    }, this)
                    .value();
                deferred = [];
            }
        }
    };

    Dagaz.View.showMarks = (view, ctx) => {
        drawMarks(ctx, view, view.target, "#00AA00");
        drawMarks(ctx, view, view.goal, "#FFFF00");
    };

    Dagaz.View.showPiece = (view, ctx, frame, pos, piece, model, x, y) => {
        let isSaved = false;
        let dx = 0;
        let dy = 0;
        if (_.indexOf(view.strike, pos) >= 0) {
            ctx.save();
            ctx.globalAlpha = Dagaz.View.STRIKE_ALPHA;
            isSaved = true;
        }
        if (Dagaz.Model.showBlink && _.indexOf(view.current, pos) >= 0) {
            dx = Dagaz.View.blink[blink];
            dy = Dagaz.View.blink[blink + 1];
        }
        ctx.drawImage(piece.h, x + dx, y + dy, piece.dx, piece.dy);
        if (isSaved) {
            ctx.restore();
        }
    };

    View2D.prototype.showDrops = function (ctx) {
        if (this.drops.length > 0) {
            ctx.save();
            ctx.globalAlpha = Dagaz.View.DROPS_ALPHA;
            _.each(this.drops, (f) => {
                const dx = ((f.position.dx - f.piece.dx) / 2) | 0;
                const dy = ((f.position.dy - f.piece.dy) / 2) | 0;
                ctx.drawImage(
                    f.piece.h,
                    f.position.x + dx,
                    f.position.y + dy,
                    f.piece.dx,
                    f.piece.dy
                );
            });
            ctx.restore();
        }
    };

    View2D.prototype.reInit = function (board) {
        board.setup(this, false);
        this.invalidate();
    };

    View2D.prototype.configure = function () {
        if (!isConfigured) {
            Dagaz.View.configure(this);
            if (this.controller) {
                const board = this.controller.getBoard();
                board.setup(this, true);
                this.controller.done();
            }
            isConfigured = true;
        }
    };

    View2D.prototype.draw = function (canvas) {
        this.configure();
        if (this.allResLoaded() && !isValid) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            _.each(this.back, (b) => {
                if (!_.isUndefined(b.t)) {
                    const board = Dagaz.Controller.app.board;
                    if (_.indexOf(b.t, board.turn) < 0) return;
                }
                ctx.drawImage(b.h, b.x, b.y);
            });
            _.chain(_.range(this.setup.length))
                .sortBy(function (ix) {
                    const piece = this.setup[ix];
                    let order = piece.pos;
                    if (piece.z > 0) {
                        order += this.pos.length;
                    }
                    return order;
                }, this)
                .map(function (ix) {
                    return this.setup[ix];
                }, this)
                .each(function (p) {
                    let x = p.x;
                    let y = p.y;
                    const pos = this.pos[p.pos];
                    const piece = this.piece[p.name];
                    if (piece) {
                        x += ((pos.dx - piece.dx) / 2) | 0;
                        y += ((pos.dy - piece.dy) / 2) | 0;
                        Dagaz.View.showPiece(
                            this,
                            ctx,
                            pos,
                            p.pos,
                            piece,
                            p.model,
                            x,
                            y,
                            p
                        );
                    }
                }, this);
            blink += 2;
            if (blink >= Dagaz.View.blink.length) {
                blink = 0;
            }
            this.drawKo(ctx);
            Dagaz.View.showMarks(this, ctx);
            this.showDrops(ctx);
            this.animate();
            if (!_.isUndefined(Dagaz.View.showBoard)) {
                const board = this.controller.getBoard();
                Dagaz.View.showBoard(board, ctx);
            }
        }
    };

    View2D.prototype.debug = (text) => {
        PieceInfoText.innerHTML = text;
        PieceInfo.style.display = "inline";
    };

    Dagaz.View.showHint = (view) => {
        if (Dagaz.Model.showHints) {
            const positions = view.pointToPositions(mouseX, mouseY);
            if (!_.isUndefined(positions) && positions.length > 0) {
                const ix = posToIx(view, positions[0]);
                if (ix !== null) {
                    const piece = view.piece[view.setup[ix].name];
                    if (hintedPiece !== piece) {
                        let text = piece.name;
                        if (piece.help) {
                            text = piece.help;
                        }
                        PieceInfoImage.src = piece.h.src;
                        PieceInfoText.innerHTML = text;
                        PieceInfo.style.display = "inline";
                        hintedPiece = piece;
                    }
                }
            } else {
                PieceInfo.style.display = "none";
                hintedPiece = null;
            }
        }
    };

    const mouseUpdate = (event) => {
        const canvasRect = Canvas.getBoundingClientRect();
        mouseX = event.clientX - canvasRect.left;
        mouseY = event.clientY - canvasRect.top;
    };

    const mouseMove = (event) => {
        mouseUpdate(event);
        Dagaz.View.showHint(self);
        const pos = self.pointToPositions(mouseX, mouseY);
        if (pos && self.controller) {
            self.controller.mouseLocate(self, pos);
        }
    };

    Dagaz.View.PKM = (view, positions) => {};

    const mouseUp = (event) => {
        const pos = self.pointToPositions(mouseX, mouseY);
        if (event.button == 2) return;
        if (pos && self.controller) {
            self.controller.mouseUp(self, pos);
        }
        mousePressed = false;
    };

    const mouseDown = (event) => {
        if (event.button == 2) return;
        mousePressed = true;
        const pos = self.pointToPositions(mouseX, mouseY);
        if (pos && self.controller) {
            self.controller.mouseDown(self, pos);
        }
        event.preventDefault();
    };

    const mouseWheel = (event) => {
        let delta = event.wheelDelta;
        if (_.isUndefined(event.wheelDelta)) {
            delta = -event.deltaY;
        }
        if (delta > 0) {
            self.controller.mouseWheel(self, -1);
        } else {
            self.controller.mouseWheel(self, 1);
        }
        mouseUpdate(event);
        const pos = self.pointToPositions(mouseX, mouseY);
        if (pos && pos.length > 0) {
            event.preventDefault();
        }
    };

    View2D.prototype.init = function (canvas, controller) {
        self = this;
        canvas.onmousemove = mouseMove;
        canvas.onmouseup = mouseUp;
        canvas.onmousedown = mouseDown;
        if ("onwheel" in document) {
            document.addEventListener("wheel", mouseWheel, { passive: false });
        } else if ("onmousewheel" in document) {
            document.addEventListener("mousewheel", mouseWheel, {
                passive: false
            });
        } else {
            document.MozMousePixelScroll = mouseWheel;
        }
        this.controller = controller;
    };

    document.oncontextmenu = () => {
        const pos = self.pointToPositions(mouseX, mouseY);
        Dagaz.View.PKM(self, pos);
        return false;
    };
})();
(() => {
    function MoveList(board) {
        this.board = board;
        this.moves = board.moves;
        this.level = 0;
        this.position = null;
        this.stops = null;
    }

    Dagaz.Model.getMoveList = (board) => {
        board.generate();
        return new MoveList(board);
    };

    MoveList.prototype.isPassForced = function () {
        return this.moves.length == 1 && this.moves[0].isPass();
    };

    MoveList.prototype.isEmpty = function () {
        return this.moves.length == 0;
    };

    const getMaxPart = (move) =>
        _.chain(move.actions)
            .map((action) => action[3])
            .push(-1)
            .max()
            .value();

    MoveList.prototype.getMoves = function () {
        let result = _.filter(
            this.moves,
            function (move) {
                return getMaxPart(move) < this.level + 1;
            },
            this
        );
        result = _.uniq(result, false, (move) => move.toString());
        return result;
    };

    MoveList.prototype.isDone = function () {
        const result =
            _.filter(
                this.moves,
                function (move) {
                    return getMaxPart(move) >= this.level + 1;
                },
                this
            ).length == 0;
        return result;
    };

    MoveList.prototype.canPass = function () {
        const result =
            _.chain(this.moves).map(getMaxPart).min().value() <= this.level;
        return result;
    };

    MoveList.prototype.getActions = function (move) {
        return _.filter(
            move.actions,
            function (action) {
                return action[3] == this.level + 1;
            },
            this
        );
    };

    const isMove = (action) => action[0] !== null && action[1] !== null;

    const isNoMove = (action) => action[0] === null || action[1] === null;

    const isDrop = (action) => action[0] === null && action[1] !== null;

    const isCapturing = (action) => action[0] !== null && action[1] === null;

    MoveList.prototype.getTargets = function () {
        let result = [];
        if (this.position !== null) {
            _.each(
                this.moves,
                function (move) {
                    const actions = _.filter(this.getActions(move), isMove);
                    if (
                        actions.length > 0 &&
                        _.indexOf(actions[0][0], this.position) >= 0
                    ) {
                        _.each(actions[0][1], (pos) => {
                            result.push(pos);
                        });
                    }
                },
                this
            );
        }
        result = _.uniq(result);
        return result;
    };

    MoveList.prototype.getStarts = function () {
        let result = [];
        _.each(
            this.moves,
            function (move) {
                const actions = _.filter(this.getActions(move), isMove);
                if (actions.length > 0) {
                    _.each(actions[0][0], (pos) => {
                        result.push(pos);
                    });
                }
            },
            this
        );
        result = _.uniq(_.union(result, this.getCaptures()));
        return result;
    };

    MoveList.prototype.getStops = function () {
        if (this.stops !== null) {
            return this.stops;
        }
        let result = this.getTargets();
        _.each(
            this.moves,
            function (move) {
                const actions = _.filter(this.getActions(move), isMove);
                if (
                    actions.length == 0 ||
                    actions[0][0].length > 1 ||
                    actions[0][1].length > 1
                ) {
                    _.chain(this.getActions(move))
                        .filter(isNoMove)
                        .each((action) => {
                            if (action[0] !== null) {
                                _.each(action[0], (pos) => {
                                    result.push(pos);
                                });
                            }
                            if (action[1] !== null) {
                                _.each(action[1], (pos) => {
                                    result.push(pos);
                                });
                            }
                        });
                }
            },
            this
        );
        if (Dagaz.Model.smartFrom || Dagaz.Model.smartTo) {
            let positions = [];
            const canPass = this.canPass();
            _.each(
                this.moves,
                function (move) {
                    const actions = _.filter(this.getActions(move), isMove);
                    if (
                        !canPass &&
                        actions.length > 0 &&
                        actions[0][0].length == 1 &&
                        Dagaz.Model.smartFrom
                    ) {
                        positions.push(actions[0][0][0]);
                    }
                    if (
                        actions.length > 0 &&
                        actions[0][1].length == 1 &&
                        Dagaz.Model.smartTo
                    ) {
                        positions.push(actions[0][1][0]);
                    }
                },
                this
            );
            positions = _.countBy(positions, _.identity);
            _.each(_.keys(positions), (pos) => {
                if (positions[pos] == 1) {
                    result.push(+pos);
                }
            });
        }
        result = _.uniq(result);
        this.stops = result;
        return result;
    };

    MoveList.prototype.getCaptures = function () {
        let result = [];
        _.each(
            this.moves,
            function (move) {
                const actions = _.filter(this.getActions(move), isMove);
                if (
                    (actions.length > 0 &&
                        _.indexOf(actions[0][0], this.position) >= 0) ||
                    (actions.length == 0 && this.position === null)
                ) {
                    _.chain(this.getActions(move))
                        .filter(isCapturing)
                        .each((action) => {
                            _.each(action[0], (pos) => {
                                result.push(pos);
                            });
                        });
                }
            },
            this
        );
        result = _.uniq(result);
        return result;
    };

    MoveList.prototype.getDrops = function () {
        const result = [];
        _.each(
            this.moves,
            function (move) {
                const actions = _.filter(this.getActions(move), isMove);
                if (actions.length == 0) {
                    _.chain(this.getActions(move))
                        .filter(isDrop)
                        .each((action) => {
                            _.each(action[1], (pos) => {
                                result.push(pos);
                            });
                        });
                }
            },
            this
        );
        return _.uniq(result);
    };

    MoveList.prototype.getDropPieces = function (pos) {
        let result = null;
        _.each(this.moves, (move) => {
            _.each(move.actions, (action) => {
                if (
                    result === null &&
                    action[0] === null &&
                    action[1] !== null &&
                    action[1][0] == pos
                ) {
                    result = action[2];
                }
            });
        });
        return result;
    };

    MoveList.prototype.filterDrops = (moves, ix) => moves;

    const isEq = (x, y) => {
        if (x === null) return y === null;
        if (y === null) return false;
        return _.intersection(x, y).length > 0;
    };

    MoveList.prototype.copyActions = (move, actions, mode, sound) => {
        move.mode = mode;
        move.sound = sound;
        if (actions.length == 0) return;
        if (move.isPass()) {
            _.each(actions, (action) => {
                move.actions.push([action[0], action[1], action[2], 1]);
            });
        } else {
            const result = [];
            _.each(actions, (action) => {
                _.each(move.actions, (a) => {
                    if (isEq(action[0], a[0]) && isEq(action[1], a[1])) {
                        result.push([action[0], action[1], action[2], 1]);
                    }
                });
            });
            move.actions = result;
        }
    };

    MoveList.prototype.setPosition = function (pos) {
        if (Dagaz.Model.completePartial) {
            let r = null;
            if (Dagaz.Model.smartFrom) {
                _.each(this.moves, (move) => {
                    _.each(move.actions, (a) => {
                        if (
                            a[0] !== null &&
                            a[1] !== null &&
                            a[3] == 1 &&
                            a[0][0] == pos
                        ) {
                            r = move;
                        }
                        if (
                            a[0] === null &&
                            a[1] !== null &&
                            a[3] == 1 &&
                            a[1][0] == pos
                        ) {
                            r = move;
                        }
                    });
                });
            }
            if (this.position !== null) {
                _.each(
                    this.moves,
                    function (move) {
                        _.each(
                            move.actions,
                            function (a) {
                                if (
                                    a[0] !== null &&
                                    a[1] !== null &&
                                    a[3] == 1 &&
                                    a[1][0] == pos &&
                                    a[0][0] == this.position
                                ) {
                                    r = move;
                                }
                            },
                            this
                        );
                    },
                    this
                );
            }
            if (r !== null) {
                return r;
            }
        }
        const result = Dagaz.Model.createMove();
        if (_.indexOf(this.getStops(), pos) >= 0) {
            const moves = _.filter(
                this.moves,
                function (move) {
                    const actions = this.getActions(move);
                    const m = _.filter(actions, isMove);
                    if (m.length > 0) {
                        if (
                            _.indexOf(m[0][0], this.position) >= 0 &&
                            _.indexOf(m[0][1], pos) >= 0
                        ) {
                            // Regular move
                            m[0][0] = [this.position];
                            m[0][1] = [pos];
                            this.copyActions(
                                result,
                                actions,
                                move.mode,
                                move.sound
                            );
                            return true;
                        }
                        if (
                            Dagaz.Model.smartFrom &&
                            this.position == null &&
                            _.indexOf(m[0][0], pos) >= 0
                        ) {
                            // Smart from move
                            m[0][0] = [pos];
                            this.copyActions(
                                result,
                                actions,
                                move.mode,
                                move.sound
                            );
                            return true;
                        }
                        if (
                            Dagaz.Model.smartTo &&
                            this.position == null &&
                            _.indexOf(m[0][1], pos) >= 0
                        ) {
                            // Smart from move
                            m[0][1] = [pos];
                            this.copyActions(
                                result,
                                actions,
                                move.mode,
                                move.sound
                            );
                            return true;
                        }
                    } else {
                        const n = _.chain(actions)
                            .filter(isNoMove)
                            .filter((action) => {
                                if (
                                    action[0] !== null &&
                                    _.indexOf(action[0], pos) >= 0
                                ) {
                                    // Capture move
                                    action[0] = [pos];
                                    return true;
                                }
                                if (
                                    action[1] !== null &&
                                    _.indexOf(action[1], pos) >= 0
                                ) {
                                    // Drop move
                                    action[1] = [pos];
                                    return true;
                                }
                                return false;
                            })
                            .value();
                        if (n.length > 0) {
                            this.copyActions(
                                result,
                                actions,
                                move.mode,
                                move.sound
                            );
                            return true;
                        }
                    }
                },
                this
            );
            if (moves.length != 0) {
                this.moves = moves;
                this.level++;
            }
            this.position = null;
        }
        if (_.indexOf(this.getStarts(), pos) >= 0) {
            if (this.position == pos) {
                this.position = null;
            } else {
                this.position = pos;
            }
        }
        this.stops = null;
        return result;
    };
})();
(() => {
    Dagaz.Model.DETAIL_MOVE_DESCRIPTION = false;

    let sessionManager = null;

    function SessionManager(controller) {
        this.controller = controller;
        this.states = [];
    }

    Dagaz.Controller.getSessionManager = (controller) => {
        if (sessionManager === null) {
            sessionManager = new SessionManager(controller);
        }
        return sessionManager;
    };

    const getName = () => {
        const str = window.location.pathname.toString();
        const result = str.match(/\/([^.\/]+)\./);
        if (result) {
            return result[1].replace("-board", "").replace("-ai", "");
        } else {
            return str;
        }
    };

    const badName = (str) => {
        const result = str.match(/[?&]game=([^&*]*)/);
        if (result) {
            return result[1] != getName();
        } else {
            return true;
        }
    };

    const getCookie = () => {
        const result = localStorage.getItem("dagaz.session");
        if (result) {
            if (badName(result)) return "";
            return "?session=" + result;
        } else {
            return "";
        }
    };

    SessionManager.prototype.aiPresent = function () {
        return this.controller.getAI() !== null;
    };

    SessionManager.prototype.updateButtons = function () {
        if (
            !_.isUndefined(this.current) &&
            !_.isUndefined(this.current.parent)
        ) {
            undo.style.display = "inline";
        } else {
            undo.style.display = "none";
        }
        if (
            !_.isUndefined(this.current) &&
            !_.isUndefined(this.current.current)
        ) {
            redo.style.display = "inline";
        } else {
            redo.style.display = "none";
        }
    };

    Dagaz.Model.playerToString = (player) => {
        if (player == 1) {
            return "W";
        } else {
            return "B";
        }
    };

    Dagaz.Model.moveToString = (move) => {
        let r = "";
        for (let i = 0; i < move.actions.length; i++) {
            if (move.actions[i][1] !== null) {
                if (r != "") {
                    r = r + "-";
                }
                if (move.actions[i][0] !== null) {
                    r = r + Dagaz.Model.posToString(move.actions[i][0][0]);
                } else if (
                    Dagaz.Model.DETAIL_MOVE_DESCRIPTION &&
                    move.actions[i][2] !== null
                ) {
                    r = r + move.actions[i][2][0].toString() + " ";
                }
                if (move.actions[i][1] !== null) {
                    r = r + Dagaz.Model.posToString(move.actions[i][1][0]);
                }
            }
        }
        return r;
    };

    SessionManager.prototype.save = function () {
        if (_.isUndefined(this.current) || _.isUndefined(this.current.board))
            return null;
        const states = [];
        var board = this.current.board;
        while (board.parent !== null) {
            states.push(board);
            board = board.parent;
        }
        let r = "(";
        while (states.length > 0) {
            var board = states.pop();
            r = r + ";" + Dagaz.Model.playerToString(board.parent.player);
            r = r + "[" + Dagaz.Model.moveToString(board.move) + "]";
        }
        r = r + ")";
        return r;
    };

    SessionManager.prototype.locateMove = (board, notation) => {
        board.generate(Dagaz.Model.getDesign());
        for (let i = 0; i < board.moves.length; i++) {
            if (Dagaz.Model.moveToString(board.moves[i]) == notation) {
                return board.moves[i];
            }
        }
        return null;
    };

    SessionManager.prototype.load = function (sgf) {
        if (_.isUndefined(Dagaz.Model.parseSgf)) return false;
        const res = Dagaz.Model.parseSgf(sgf);
        this.states = [];
        delete this.current;
        let board = Dagaz.Model.getInitBoard();
        this.addState(Dagaz.Model.createMove(), board);
        for (let i = 0; i < res.length; i++) {
            const p = res[i].name;
            if (p != Dagaz.Model.playerToString(board.player)) return false;
            if (res[i].arg.length != 1) return false;
            const move = this.locateMove(board, res[i].arg[0]);
            if (move === null) return false;
            board = board.apply(move);
            this.addState(move, board);
        }
        this.controller.setBoard(board, true);
        return true;
    };

    SessionManager.prototype.addState = function (move, board) {
        const current = {
            move: move,
            board: board,
            states: []
        };
        if (!_.isUndefined(this.current)) {
            current.parent = this.current;
            for (let i = 0; i < this.current.states.length; i++) {
                if (this.current.states[i].move.toString() == move.toString()) {
                    this.current.current = this.current.states[i];
                    this.current = this.current.states[i];
                    return;
                }
            }
            this.current.states.push(current);
            this.current.current = current;
        } else {
            this.states.push(current);
        }
        this.current = current;
        if (Dagaz.Controller.persistense == "session") {
            let str = Dagaz.Controller.getSessionManager().save();
            if (str == "()") return;
            str = str + "&game=" + getName();
            localStorage.setItem("dagaz.session", str);
        }
    };

    Dagaz.Controller.addState = (move, board) => {
        const sm = Dagaz.Controller.getSessionManager();
        sm.addState(move, board);
        sm.updateButtons();
    };

    Dagaz.Controller.pushState = (move, board) => {
        const sm = Dagaz.Controller.getSessionManager();
        if (!_.isUndefined(sm.current) && _.isUndefined(sm.current.current)) {
            board.generate();
            sm.current.current = {
                parent: sm.current,
                move: move,
                board: board,
                states: []
            };
            sm.current.states.push(sm.current.current);
            sm.updateButtons();
        }
    };

    Dagaz.Controller.noRedo = () => {
        const sm = Dagaz.Controller.getSessionManager();
        return !_.isUndefined(sm.current) && _.isUndefined(sm.current.current);
    };

    const noMoves = (board) => {
        if (!_.isUndefined(Dagaz.Controller.skip)) {
            if (Dagaz.Controller.skip(board)) {
                return true;
            }
        }
        for (let ix = 0; ix < board.moves.length; ix++) {
            if (!board.moves[ix].isPass()) return false;
        }
        return true;
    };

    SessionManager.prototype.redo = function (board) {
        if (_.isUndefined(this.current) || _.isUndefined(this.current.current))
            return null;
        this.current = this.current.current;
        console.log("redo");
        return this.current.board;
    };

    const isRandom = (board) => {
        const design = Dagaz.Model.getDesign();
        if (_.isUndefined(design.turns)) return false;
        if (_.isUndefined(design.turns[board.turn])) return false;
        return design.turns[board.turn].random;
    };

    Dagaz.Controller.redo = () => {
        const sm = Dagaz.Controller.getSessionManager();
        if (_.isUndefined(sm.current) || !sm.controller.isReady()) return;
        const current = sm.current;
        let board = sm.redo();
        if (board === null) return;
        if (
            !_.isUndefined(sm.controller.setMove) &&
            Dagaz.Model.animateRedo &&
            sm.current &&
            !sm.current.current
        ) {
            sm.controller.setMove(board.move);
        } else {
            if (_.isUndefined(sm.controller.setBoard)) return;
            while (
                (sm.aiPresent() &&
                    board.player != current.board.player &&
                    sm.current.current) ||
                noMoves(board) ||
                isRandom(board)
            ) {
                if (_.isUndefined(sm.current.current)) break;
                const b = sm.redo();
                if (b === null) {
                    sm.current = current;
                    return;
                }
                board = b;
            }
            if (!_.isUndefined(Dagaz.Controller.play)) {
                Dagaz.Controller.play(Dagaz.Sounds.page);
            }
            sm.controller.setBoard(board);
        }
        sm.updateButtons();
    };

    SessionManager.prototype.undo = function () {
        if (_.isUndefined(this.current) || _.isUndefined(this.current.parent))
            return null;
        this.current = this.current.parent;
        console.log("undo");
        return this.current.board;
    };

    Dagaz.Controller.undo = () => {
        const sm = Dagaz.Controller.getSessionManager();
        if (
            _.isUndefined(sm.current) ||
            _.isUndefined(sm.controller.setBoard) ||
            !sm.controller.isReady()
        )
            return;
        const current = sm.current;
        let board = sm.undo();
        if (board !== null) {
            while (
                (sm.aiPresent() &&
                    board.player != current.board.player &&
                    board.parent) ||
                noMoves(board) ||
                isRandom(board)
            ) {
                const b = sm.undo();
                if (b === null) {
                    sm.current = current;
                    return;
                }
                board = b;
            }
        }
        if (!_.isUndefined(Dagaz.Controller.play)) {
            Dagaz.Controller.play(Dagaz.Sounds.page);
        }
        sm.controller.setBoard(board);
        sm.updateButtons();
    };

    const clearGame = Dagaz.Controller.clearGame;

    Dagaz.Controller.clearGame = () => {
        localStorage.setItem("dagaz.session", "");
        if (!_.isUndefined(clearGame)) {
            clearGame();
        }
    };

    Dagaz.Model.load = (board) => {
        const str = getCookie();
        const result = str.match(/session=([^&]*)/);
        if (result) {
            const sm = Dagaz.Controller.getSessionManager();
            sm.load(result[1]);
            sm.updateButtons();
        }
    };
})();
Dagaz.Sounds = [];

Dagaz.Sounds.move = 0;
Dagaz.Sounds.drop = 1;
Dagaz.Sounds.win = 2;
Dagaz.Sounds.lose = 3;
Dagaz.Sounds.draw = 4;
Dagaz.Sounds.page = 5;
Dagaz.Sounds.start = 6;
Dagaz.Sounds.hint = 7;
Dagaz.Sounds.popup = 8;

Dagaz.Controller.soundOff = false;

(() => {
    const sounds = [];
    let current = null;
    let cnt = 0;

    function Sound(src, clonable) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        this.clonable = clonable;
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }

    Dagaz.Controller.addSound = (ix, src, clonable) => {
        sounds[ix + "_1"] = new Sound(src, clonable);
    };

    const getSound = (ix, player) => {
        if (!_.isUndefined(sounds[ix + "_1"])) {
            const parent = sounds[ix + "_1"];
            if (parent.clonable && player != 1) {
                if (_.isUndefined(sounds[ix + "_" + player])) {
                    sounds[ix + "_" + player] = new Sound(
                        parent.sound.src,
                        parent.clonable
                    );
                }
                return sounds[ix + "_" + player];
            }
            return parent;
        }
        return null;
    };

    Dagaz.Controller.play = (ix, player) => {
        if (Dagaz.Controller.soundOff) return;
        Dagaz.Controller.stop();
        cnt++;
        if (cnt > 2) {
            cnt = 1;
        }
        current = getSound(ix, cnt);
        if (current !== null) {
            current.play();
        }
    };

    Dagaz.Controller.stop = () => {
        if (current !== null) {
            current = null;
        }
    };

    Dagaz.Controller.sound = () => {
        if (Dagaz.Controller.soundOff) {
            sound.innerHTML = "no Sound";
            Dagaz.Controller.soundOff = false;
            localStorage.setItem("dagaz.sound", "on");
        } else {
            sound.innerHTML = "Sound";
            Dagaz.Controller.soundOff = true;
            localStorage.setItem("dagaz.sound", "off");
        }
    };

    Dagaz.Controller.checkSound = () => {
        const result = localStorage.getItem("dagaz.sound");
        if (result == "off") {
            sound.innerHTML = "Sound";
            Dagaz.Controller.soundOff = true;
        } else {
            sound.innerHTML = "no Sound";
            Dagaz.Controller.soundOff = false;
        }
    };
})();

Dagaz.Controller.checkSound();

Dagaz.Controller.addSound(Dagaz.Sounds.move, "../sounds/clack.wav", true);
Dagaz.Controller.addSound(Dagaz.Sounds.drop, "../sounds/on.wav", true);
Dagaz.Controller.addSound(Dagaz.Sounds.win, "../sounds/tadam.wav", true);
Dagaz.Controller.addSound(Dagaz.Sounds.lose, "../sounds/loss.wav", true);
Dagaz.Controller.addSound(Dagaz.Sounds.draw, "../sounds/draw.ogg", true);
Dagaz.Controller.addSound(Dagaz.Sounds.page, "../sounds/page.wav", true);
Dagaz.Controller.addSound(Dagaz.Sounds.hint, "../sounds/bird.wav", true);
Dagaz.Controller.addSound(Dagaz.Sounds.popup, "../sounds/popup.wav", true);
(() => {
    function RandomAi(params) {
        this.params = params;
        if (_.isUndefined(this.params.rand)) {
            this.params.rand = _.random;
        }
    }

    const findBot = Dagaz.AI.findBot;

    Dagaz.AI.findBot = (type, params, parent) => {
        if (type == "random" || type == "solver") {
            return new RandomAi(params);
        } else {
            return findBot(type, params, parent);
        }
    };

    RandomAi.prototype.setContext = (ctx, board) => {
        ctx.board = board;
    };

    RandomAi.prototype.getMove = function (ctx) {
        const moves = Dagaz.AI.generate(ctx, ctx.board);
        if (moves.length == 0) {
            return { done: true, ai: "nothing" };
        }
        if (moves.length == 1) {
            return { done: true, move: moves[0], ai: "once" };
        }
        const ix = this.params.rand(0, moves.length - 1);
        return {
            done: true,
            move: moves[ix],
            ai: "random"
        };
    };
})();
(() => {
    const MAXVALUE = 1000000;

    Dagaz.AI.AI_FRAME = 5000;
    Dagaz.AI.MIN_DEEP = 2;
    Dagaz.AI.MAX_DEEP = 10;
    Dagaz.AI.WIN_EVAL = 100;
    Dagaz.AI.DRAW_EVAL = 50;
    Dagaz.AI.NOISE_FACTOR = 0;
    Dagaz.AI.UCT_COEFF = Math.sqrt(2);
    Dagaz.AI.KING_TYPES = [0];
    Dagaz.AI.ONE_KING = true;
    Dagaz.AI.CHECK_GOALS = false;

    let maxDeep = 0;

    function UctAi(parent) {
        this.parent = parent;
    }

    const findBot = Dagaz.AI.findBot;

    Dagaz.AI.findBot = (type, params, parent) => {
        if (type == "uct" || type == "common" || type == "1" || type == "2") {
            return new UctAi(parent);
        } else {
            return findBot(type, params, parent);
        }
    };

    Dagaz.AI.eval = (design, params, board, player, covered) => {
        let r = 0;
        _.each(design.allPositions(), (pos) => {
            const piece = board.getPiece(pos);
            if (piece !== null) {
                let v = design.price[+piece.type];
                if (_.isUndefined(covered) && _.indexOf(covered, pos) >= 0) {
                    v = (v / 2) | 0;
                }
                if (piece.player != player) {
                    v = -v;
                }
                r += v;
            }
        });
        return r;
    };

    Dagaz.AI.heuristic = (ai, design, board, move) => {
        let r = 1;
        const captured = [];
        let price = null;
        _.each(move.actions, (a) => {
            if (a[0] !== null && a[1] === null) {
                const piece = board.getPiece(a[0][0]);
                if (piece !== null) {
                    r += design.price[+piece.type];
                }
                captured.push(a[0][0]);
            }
        });
        _.each(move.actions, (a) => {
            if (a[0] !== null && a[1] !== null) {
                const target = board.getPiece(a[1][0]);
                if (target !== null) {
                    r += design.price[+target.type];
                }
                const piece = board.getPiece(a[0][0]);
                if (price === null) {
                    price = design.price[+piece.type];
                }
                if (target !== null && _.indexOf(captured, a[1][0]) >= 0) {
                    r -= price;
                    return;
                }
                if (piece !== null) {
                    if (target !== null) {
                        r -= (design.price[+piece.type] / 2) | 0;
                    }
                    if (a[2] !== null && a[2][0].type != +piece.type) {
                        r += design.price[a[2][0].type];
                    }
                }
            }
        });
        return r;
    };

    const uct = (win, count, all) =>
        Math.sqrt(Math.log(all) / count) * Dagaz.AI.UCT_COEFF + win / count;

    UctAi.prototype.simulate = function (ctx, node, player) {
        let board = node.b;
        const move = node.m;
        let deep = 0;
        let positions = null;
        let price = null;
        let last = null;
        let covered = [];
        let start = null;
        if (move.isSimpleMove()) {
            var piece = board.getPiece(move.actions[0][0][0]);
            if (piece !== null) {
                price = design.price[+piece.type];
                last = move.actions[0][1][0];
                piece = board.getPiece(last);
                if (piece === null || design.price[+piece.type] > price) {
                    last = null;
                }
            }
        }
        while (deep < Dagaz.AI.MAX_DEEP) {
            const moves = Dagaz.AI.generate(ctx, board);
            let goal = null;
            if (moves.length == 0 || Dagaz.AI.CHECK_GOALS) {
                goal = Dagaz.Model.checkGoals(ctx.design, board, player);
                if (goal !== null) {
                    if (goal > 0) return Dagaz.AI.WIN_EVAL;
                    if (goal == 0) return Dagaz.AI.DRAW_EVAL;
                    return null;
                }
            }
            if (moves.length == 0) {
                if (board.player != player) return Dagaz.AI.WIN_EVAL;
                return null;
            }
            if (board.player == player) {
                deep++;
                if (deep > maxDeep) {
                    maxDeep = deep;
                }
                if (_.isUndefined(node.d) || node.d < deep) {
                    node.d = deep;
                }
                positions = [];
                for (let pos = 0; pos < ctx.design.positions.length; pos++) {
                    var piece = board.getPiece(pos);
                    if (
                        piece !== null &&
                        piece.player == player &&
                        _.indexOf(Dagaz.AI.KING_TYPES, +piece.type) >= 0
                    ) {
                        positions.push(pos);
                        if (Dagaz.AI.KING_TYPES.length < 2) break;
                    }
                }
                last = null;
            } else {
                covered = [];
                if (deep >= Dagaz.AI.MIN_DEEP && positions !== null) {
                    let f = true;
                    for (var i = 0; i < moves.length; i++) {
                        for (var j = 0; j < moves[i].actions.length; j++) {
                            var a = moves[i].actions[j];
                            if (
                                a[0] !== null &&
                                a[1] !== null &&
                                _.indexOf(positions, a[1][0]) >= 0
                            ) {
                                if (last !== null && last == a[1][0])
                                    return null;
                                covered.push(a[1][0]);
                                f = false;
                            }
                            if (
                                a[0] !== null &&
                                a[1] === null &&
                                _.indexOf(positions, a[0][0]) >= 0
                            ) {
                                if (last !== null && last == a[0][0])
                                    return null;
                                covered.push(a[0][0]);
                                f = false;
                            }
                        }
                    }
                    if (start === null) {
                        start = Dagaz.AI.eval(
                            ctx.design,
                            [],
                            board,
                            player,
                            covered
                        );
                    }
                    if (f) break;
                }
            }
            const nodes = [];
            var all = 0;
            for (var i = 0; i < moves.length; i++) {
                let weight =
                    Dagaz.AI.heuristic(this, ctx.design, board, moves[i]) | 0;
                if (weight <= 0) weight = 1;
                nodes.push({
                    m: moves[i],
                    h: weight
                });
                all += weight;
            }
            const lvl = _.random(0, all - 1);
            var all = 0;
            for (var i = 0; i < nodes.length; i++) {
                all += nodes[i].h;
                if (lvl < all || i == nodes.length - 1) {
                    if (board.player == player && positions !== null) {
                        for (var j = 0; j < nodes[i].m.actions.length; j++) {
                            var a = nodes[i].m.actions[j];
                            if (a[0] !== null && a[1] !== null) {
                                positions.push(a[1][0]);
                            }
                        }
                    }
                    board = board.apply(nodes[i].m);
                    break;
                }
            }
        }
        return Dagaz.AI.eval(ctx.design, [], board, player, covered) - start;
    };

    UctAi.prototype.setContext = function (ctx, board) {
        if (this.parent) {
            this.parent.setContext(ctx, board);
        }
        ctx.timestamp = Date.now();
        ctx.board = board;
    };

    UctAi.prototype.getMove = function (ctx) {
        const moves = Dagaz.AI.generate(ctx, ctx.board);
        if (moves.length == 0) {
            return { done: true, ai: "nothing" };
        }
        if (moves.length == 1) {
            return {
                done: true,
                move: moves[0],
                time: Date.now() - ctx.timestamp,
                ai: "once"
            };
        }
        let nodes = _.map(moves, function (move) {
            let weight = Dagaz.AI.heuristic(this, ctx.design, ctx.board, move);
            if (weight <= 0) weight = 1;
            //    console.log("DUMP " + weight + ": " + move.toString());
            if (Dagaz.AI.NOISE_FACTOR > 0) {
                weight = weight * Dagaz.AI.NOISE_FACTOR;
                weight += _.random(0, Dagaz.AI.NOISE_FACTOR - 1);
            }
            return {
                m: move,
                h: weight,
                s: (weight / 2) | 0,
                d: 0,
                w: 0,
                c: weight
            };
        });
        const all = nodes.length;
        if (
            !_.isUndefined(Dagaz.AI.MAX_MOVES) &&
            nodes.length > Dagaz.AI.MAX_MOVES
        ) {
            nodes = _.sortBy(nodes, (n) => -n.h);
            const truncated = [];
            for (let i = 0; i < Dagaz.AI.MAX_MOVES; i++) {
                truncated.push(nodes[i]);
            }
            nodes = truncated;
        }
        ctx.timestamp = Date.now();
        let cnt = 1;
        maxDeep = 0;
        while (Date.now() - ctx.timestamp < Dagaz.AI.AI_FRAME) {
            const node = _.max(nodes, (n) => uct(n.w + n.s, n.c, cnt));
            if (_.isUndefined(node.b)) {
                node.b = ctx.board.apply(node.m);
            }
            let result = this.simulate(ctx, node, ctx.board.player);
            if (result !== null && result > 0) {
                if (result > Dagaz.AI.WIN_EVAL) {
                    result = Dagaz.AI.WIN_EVAL;
                }
                node.w += result;
                node.c += result;
            } else {
                node.c++;
                cnt++;
            }
        }
        let best = _.max(nodes, (n) => n.w);
        if (best.w == 0) {
            best = _.max(nodes, (n) => n.h);
        }
        _.each(nodes, (n) => {
            console.log(
                "Dump " +
                    n.d +
                    "/" +
                    n.c +
                    "/" +
                    n.w +
                    "/" +
                    n.h +
                    ": " +
                    n.m.toString()
            );
        });
        if (best !== null) {
            console.log(
                "UCT " +
                    all +
                    "/" +
                    cnt +
                    "/" +
                    maxDeep +
                    "/" +
                    best.c +
                    "/" +
                    best.w +
                    "/" +
                    best.h +
                    ": " +
                    best.m.toString()
            );
            return {
                done: true,
                move: best.m,
                time: Date.now() - ctx.timestamp,
                ai: "uct"
            };
        }
        if (this.parent) {
            return this.parent.getMove(ctx);
        }
    };
})();
(() => {
    function Pattern(exec) {
        this.exec = exec;
        this.then = (transform) =>
            new Pattern((str, pos) => {
                const r = exec(str, pos);
                return r && { res: transform(r.res), end: r.end };
            });
    }

    function txt(text) {
        return new Pattern((str, pos) => {
            if (str.substr(pos, text.length) == text)
                return { res: text, end: pos + text.length };
        });
    }

    function term(end, esc) {
        return new Pattern((str, pos) => {
            let f = false;
            for (let i = pos; i < str.length; i++) {
                if (str.charAt(i) == esc) {
                    f = true;
                    continue;
                }
                if (!f && str.charAt(i) == end) {
                    return { res: str.substr(pos, i - pos), end: i };
                }
                f = false;
            }
        });
    }

    function rgx(regexp) {
        return new Pattern((str, pos) => {
            const m = regexp.exec(str.slice(pos));
            if (m && m.index == 0) return { res: m[0], end: pos + m[0].length };
        });
    }

    function opt(pattern) {
        return new Pattern(
            (str, pos) => pattern.exec(str, pos) || { res: void 0, end: pos }
        );
    }

    function any(patterns) {
        return new Pattern((str, pos) => {
            for (let r, i = 0; i < patterns.length; i++)
                if ((r = patterns[i].exec(str, pos))) return r;
        });
    }

    function seq(patterns) {
        return new Pattern((str, pos) => {
            let i;
            let r;
            let end = pos;
            const res = [];
            for (i = 0; i < patterns.length; i++) {
                r = patterns[i].exec(str, end);
                if (!r) return;
                res.push(r.res);
                end = r.end;
            }
            return { res: res, end: end };
        });
    }

    function rep(pattern, separator) {
        const separated = !separator
            ? pattern
            : seq([separator, pattern]).then((r) => r[1]);
        return new Pattern((str, pos) => {
            const res = [];
            let end = pos;
            let r = pattern.exec(str, end);
            while (r && r.end > end) {
                res.push(r.res);
                end = r.end;
                r = separated.exec(str, end);
            }
            return { res: res, end: end };
        });
    }

    const wsp = rgx(/\s+/);

    const arg = seq([txt("["), term("]", "\\"), txt("]")]).then((r) => r[1]);

    const name = rgx(/\w[\w\d]*/);
    const cmd = seq([
        opt(txt(";")),
        opt(wsp),
        name,
        opt(wsp),
        rep(arg, opt(wsp))
    ]).then((r) => ({
        name: r[2],
        arg: r[4]
    }));

    const subseq = new Pattern((str, pos) => sgf.exec(str, pos));

    var sgf = seq([
        txt("("),
        opt(wsp),
        rep(any([cmd, subseq]), opt(wsp)),
        txt(")")
    ]).then((r) => r[2]);

    Dagaz.Model.parseSgf = (text) => {
        const r = sgf.exec(text, 0);
        if (r) {
            return r.res;
        }
    };
})();
Dagaz.AI.SGF = Dagaz.Model.parseSgf("(;W[b1c2](;B[b3b2])(;B[a4a3]))");
(() => {
    function SgfAi(params, parent) {
        this.params = params;
        this.parent = parent;
        if (_.isUndefined(this.params.rand)) {
            this.params.rand = _.random;
        }
    }

    const findBot = Dagaz.AI.findBot;

    Dagaz.AI.findBot = (type, params, parent) => {
        if (type == "sgf" || type == "opening" || type == "solver") {
            return new SgfAi(params, parent);
        } else {
            return findBot(type, params, parent);
        }
    };

    const getNote = (move) => {
        let r = "";
        for (let i = 0; i < move.actions.length; i++) {
            const action = move.actions[i];
            if (action[0] !== null && action[1] !== null) {
                r =
                    Dagaz.Model.posToString(action[0][0]) +
                    Dagaz.Model.posToString(action[1][0]);
                break;
            }
        }
        return r;
    };

    const locate = (cursor) => {
        let sgf = Dagaz.AI.SGF;
        for (let i = 0; i < cursor.length; i++) {
            const p = cursor[i];
            if (p >= sgf.length) return null;
            sgf = sgf[p];
            if (!_.isArray(sgf) || sgf.length == 0) return null;
        }
        return sgf;
    };

    const find = (ctx, position, sgf, move) => {
        if (_.isArray(sgf[position])) {
            for (let i = 0; i < sgf.length; i++) {
                const r = find(ctx, 0, sgf[i], move);
                if (r !== null) {
                    ctx.cursor.push(i);
                    return r;
                }
            }
            return null;
        } else {
            if (position >= sgf.length) return null;
            if (!sgf[position]) return null;
            if (sgf[position].arg[0] != move) return null;
            ctx.position = position + 1;
            return sgf;
        }
    };

    SgfAi.prototype.setContext = function (ctx, board) {
        if (this.parent) {
            this.parent.setContext(ctx, board);
        }
        ctx.board = board;
        if (_.isUndefined(ctx.cursor)) {
            ctx.cursor = [];
            ctx.position = 0;
        }
        if (!_.isUndefined(board.move)) {
            if (!ctx.design.isPuzzle()) {
                ctx.sgf = find(
                    ctx,
                    ctx.position,
                    locate(ctx.cursor),
                    getNote(board.move)
                );
            }
        } else {
            ctx.sgf = locate(ctx.cursor);
        }
    };

    SgfAi.prototype.getMove = function (ctx) {
        if (ctx.sgf && ctx.position < ctx.sgf.length) {
            const notes = [];
            if (_.isArray(ctx.sgf[ctx.position])) {
                for (let i = ctx.position; i < ctx.sgf.length; i++) {
                    notes.push(ctx.sgf[i][0].arg[0]);
                }
            } else {
                notes.push(ctx.sgf[ctx.position].arg[0]);
            }
            console.log(notes);
            if (notes) {
                var moves = Dagaz.AI.generate(ctx, ctx.board);
                var moves = _.filter(
                    moves,
                    (move) => _.indexOf(notes, getNote(move)) >= 0
                );
                if (moves.length > 0) {
                    let ix = 0;
                    if (moves.length > 1) {
                        ix = this.params.rand(0, moves.length - 1);
                        ctx.cursor.push(
                            _.indexOf(notes, getNote(moves[ix])) + ctx.position
                        );
                        ctx.position = 0;
                    }
                    ctx.position++;
                    return {
                        done: true,
                        move: moves[ix],
                        ai: "sgf"
                    };
                }
            }
        }
        if (this.parent) {
            return this.parent.getMove(ctx);
        }
    };
})();
(() => {
    Dagaz.AI.AI_FRAME = 1000;
    Dagaz.AI.MIN_DEEP = 5;
    Dagaz.AI.MAX_DEEP = 20;
    Dagaz.AI.CHECK_GOALS = true;

    const checkVersion = Dagaz.Model.checkVersion;

    Dagaz.Model.checkVersion = (design, name, value) => {
        if (name != "doubutsu-shogi-extension") {
            checkVersion(design, name, value);
        }
    };

    if (!_.isUndefined(Dagaz.Controller.addSound)) {
        Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
        Dagaz.Controller.addSound(2, "../sounds/tadam.wav", true);
        Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
    }

    const checkKing = (design, board, player, pos, dir, type, list) => {
        if (_.indexOf(list, +type) < 0) return false;
        const p = design.navigate(player, pos, dir);
        if (p === null) return false;
        const piece = board.getPiece(p);
        if (piece === null) return false;
        if (piece.player == player) return false;
        return piece.type == 0;
    };

    const checkPos = (design, board, player, pos, dir, type, list, acc) => {
        if (_.indexOf(list, +type) < 0) return false;
        const p = design.navigate(player, pos, dir);
        if (p === null) return false;
        const piece = board.getPiece(p);
        if (piece === null) return false;
        acc.push(p);
    };

    const isBadPosition = (design, board) => {
        const attacked = [];
        const defended = [];
        _.each(design.allPositions(), (pos) => {
            const piece = board.getPiece(pos);
            if (piece !== null) {
                if (piece.player == board.player) {
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        1,
                        piece.type,
                        [0, 1, 3, 4],
                        attacked
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        4,
                        piece.type,
                        [0, 3, 4],
                        attacked
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        3,
                        piece.type,
                        [0, 3, 4],
                        attacked
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        2,
                        piece.type,
                        [0, 3, 4],
                        attacked
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        7,
                        piece.type,
                        [0, 2, 4],
                        attacked
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        5,
                        piece.type,
                        [0, 2, 4],
                        attacked
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        6,
                        piece.type,
                        [0, 2],
                        attacked
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        8,
                        piece.type,
                        [0, 2],
                        attacked
                    );
                } else {
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        1,
                        piece.type,
                        [0, 1, 3, 4],
                        defended
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        4,
                        piece.type,
                        [0, 3, 4],
                        defended
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        3,
                        piece.type,
                        [0, 3, 4],
                        defended
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        2,
                        piece.type,
                        [0, 3, 4],
                        defended
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        7,
                        piece.type,
                        [0, 2, 4],
                        defended
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        5,
                        piece.type,
                        [0, 2, 4],
                        defended
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        6,
                        piece.type,
                        [0, 2],
                        defended
                    );
                    checkPos(
                        design,
                        board,
                        piece.player,
                        pos,
                        8,
                        piece.type,
                        [0, 2],
                        defended
                    );
                }
            }
        });
        return _.difference(attacked, defended).length > 0;
    };

    Dagaz.AI.heuristic = (ai, design, board, move) => {
        let r = 1;
        _.each(move.actions, (a) => {
            if (a[0] !== null && a[1] !== null) {
                const target = board.getPiece(a[1][0]);
                if (target !== null) {
                    r += design.price[+target.type];
                }
                const piece = board.getPiece(a[0][0]);
                if (piece !== null && piece.type != 0) {
                    if (
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            1,
                            piece.type,
                            [1, 3, 4]
                        ) ||
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            4,
                            piece.type,
                            [3, 4]
                        ) ||
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            3,
                            piece.type,
                            [3, 4]
                        ) ||
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            2,
                            piece.type,
                            [3, 4]
                        ) ||
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            7,
                            piece.type,
                            [2, 4]
                        ) ||
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            5,
                            piece.type,
                            [2, 4]
                        ) ||
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            6,
                            piece.type,
                            [2]
                        ) ||
                        checkKing(
                            design,
                            board,
                            board.player,
                            a[1][0],
                            8,
                            piece.type,
                            [2]
                        )
                    )
                        r += 100;
                }
                if (isBadPosition(design, board.apply(move))) {
                    return -1;
                }
            }
        });
        return r;
    };

    const checkDirection = (design, board, player, pos, dir, types, from) => {
        const p = design.navigate(player, pos, dir);
        if (p === null) return 0;
        if (from) {
            if (p == from) return 0;
        }
        const piece = board.getPiece(p);
        if (piece == null) return 0;
        if (_.indexOf(types, +piece.type) < 0) return 0;
        if (piece.player != player) {
            return 1;
        } else {
            return -1;
        }
    };

    const checkGoals = Dagaz.Model.checkGoals;

    Dagaz.Model.checkGoals = (design, board, player) => {
        board.generate();
        if (board.moves.length == 0) {
            if (board.player != player) {
                return 1;
            } else {
                return -1;
            }
        }
        return checkGoals(design, board, player);
    };

    const findPiece = (design, board, player, type) => {
        const positions = design.allPositions();
        for (let i = 0; i < positions.length; i++) {
            const piece = board.getPiece(positions[i]);
            if (
                piece !== null &&
                piece.type == type &&
                piece.player == player
            ) {
                return positions[i];
            }
        }
        return null;
    };

    const CheckInvariants = Dagaz.Model.CheckInvariants;

    Dagaz.Model.CheckInvariants = (board) => {
        const design = Dagaz.Model.design;
        const king = design.getPieceType("King");
        const za = design.getPieceType("Za");
        const sang = design.getPieceType("Sang");
        const jang = design.getPieceType("Jang");
        const hu = design.getPieceType("Hu");
        const n = design.getDirection("n");
        const w = design.getDirection("w");
        const s = design.getDirection("s");
        const e = design.getDirection("e");
        const nw = design.getDirection("nw");
        const sw = design.getDirection("sw");
        const ne = design.getDirection("ne");
        const se = design.getDirection("se");
        _.each(board.moves, (move) => {
            const b = board.apply(move);
            var pos = findPiece(design, b, board.player, king);
            if (pos === null) {
                move.failed = true;
                return;
            }
            if (
                checkDirection(design, b, board.player, pos, n, [
                    king,
                    za,
                    jang,
                    hu
                ]) > 0 ||
                checkDirection(design, b, board.player, pos, s, [
                    king,
                    jang,
                    hu
                ]) > 0 ||
                checkDirection(design, b, board.player, pos, w, [
                    king,
                    jang,
                    hu
                ]) > 0 ||
                checkDirection(design, b, board.player, pos, e, [
                    king,
                    jang,
                    hu
                ]) > 0 ||
                checkDirection(design, b, board.player, pos, nw, [
                    king,
                    sang,
                    hu
                ]) > 0 ||
                checkDirection(design, b, board.player, pos, ne, [
                    king,
                    sang,
                    hu
                ]) > 0 ||
                checkDirection(design, b, board.player, pos, sw, [king, sang]) >
                    0 ||
                checkDirection(design, b, board.player, pos, se, [king, sang]) >
                    0
            ) {
                move.failed = true;
                return;
            }
            if (
                move.actions.length == 1 &&
                move.actions[0][0] !== null &&
                move.actions[0][1] !== null
            ) {
                const from = move.actions[0][0][0];
                const to = move.actions[0][1][0];
                const piece = board.getPiece(from);
                if (piece !== null && piece.type == za) {
                    var pos = design.navigate(board.player, from, n);
                    if (pos != to) {
                        pos = design.navigate(board.player, to, n);
                        if (pos === null) {
                            move.failed = true;
                        }
                    }
                }
            }
        });
        CheckInvariants(board);
    };
})();
ZRF = {
    JUMP: 0,
    IF: 1,
    FORK: 2,
    FUNCTION: 3,
    IN_ZONE: 4,
    FLAG: 5,
    SET_FLAG: 6,
    POS_FLAG: 7,
    SET_POS_FLAG: 8,
    ATTR: 9,
    SET_ATTR: 10,
    PROMOTE: 11,
    MODE: 12,
    ON_BOARD_DIR: 13,
    ON_BOARD_POS: 14,
    PARAM: 15,
    LITERAL: 16,
    VERIFY: 20
};

Dagaz.Model.BuildDesign = (design) => {
    design.checkVersion("z2j", "2");
    design.checkVersion("zrf", "3.0");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("ko", "situation");
    design.checkVersion("doubutsu-shogi-extension", "true");

    design.addDirection("nx"); // 0
    design.addDirection("n"); // 1
    design.addDirection("s"); // 2
    design.addDirection("w"); // 3
    design.addDirection("e"); // 4
    design.addDirection("ne"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7
    design.addDirection("se"); // 8
    design.addDirection("th"); // 9
    design.addDirection("tn"); // 10

    design.addPlayer("Green", [0, 2, 1, 4, 3, 6, 5, 8, 7, 9, 10]);
    design.addPlayer("Red", [0, 2, 1, 3, 4, 6, 5, 8, 7, 10, 9]);

    design.addPosition("r4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("a4", [16, 0, 5, 1, 0, 0, 0, 0, 6, 3, -1]);
    design.addPosition("b4", [16, 0, 5, 1, -1, 0, 4, 0, 6, 2, -2]);
    design.addPosition("c4", [16, 0, 5, 0, -1, 0, 4, 0, 0, 1, -3]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("r3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("a3", [-5, -5, 5, 1, 0, -4, 0, 0, 6, -2, -6]);
    design.addPosition("b3", [-5, -5, 5, 1, -1, -4, 4, -6, 6, -3, -7]);
    design.addPosition("c3", [-5, -5, 5, 0, -1, 0, 4, -6, 0, -4, -8]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("r2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("a2", [-5, -5, 5, 1, 0, -4, 0, 0, 6, -7, -11]);
    design.addPosition("b2", [-5, -5, 5, 1, -1, -4, 4, -6, 6, -8, -12]);
    design.addPosition("c2", [-5, -5, 5, 0, -1, 0, 4, -6, 0, -9, -13]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("r1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -11]);
    design.addPosition("a1", [-5, -5, 0, 1, 0, -4, 0, 0, 0, -12, -16]);
    design.addPosition("b1", [-5, -5, 0, 1, -1, -4, 0, -6, 0, -13, -17]);
    design.addPosition("c1", [-5, -5, 0, 0, -1, 0, 0, -6, 0, -14, -18]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -19, 0]);

    design.addZone("board-zone", 2, [16, 17, 18, 11, 12, 13, 6, 7, 8, 1, 2, 3]);
    design.addZone("board-zone", 1, [16, 17, 18, 11, 12, 13, 6, 7, 8, 1, 2, 3]);
    design.addZone("promotion-zone", 2, [16, 17, 18]);
    design.addZone("promotion-zone", 1, [1, 2, 3]);

    design.addCommand(0, ZRF.FUNCTION, 24); // from
    design.addCommand(0, ZRF.IN_ZONE, 0); // board-zone
    design.addCommand(0, ZRF.FUNCTION, 20); // verify
    design.addCommand(0, ZRF.PARAM, 0); // $1
    design.addCommand(0, ZRF.FUNCTION, 22); // navigate
    design.addCommand(0, ZRF.FUNCTION, 3); // friend?
    design.addCommand(0, ZRF.FUNCTION, 0); // not
    design.addCommand(0, ZRF.FUNCTION, 20); // verify
    design.addCommand(0, ZRF.FUNCTION, 1); // empty?
    design.addCommand(0, ZRF.IF, 6);
    design.addCommand(0, ZRF.LITERAL, 0); // King
    design.addCommand(0, ZRF.FUNCTION, 10); // piece?
    design.addCommand(0, ZRF.IF, 3);
    design.addCommand(0, ZRF.LITERAL, 1); // true
    design.addCommand(0, ZRF.JUMP, 2);
    design.addCommand(0, ZRF.LITERAL, 0); // false
    design.addCommand(0, ZRF.FUNCTION, 0); // not
    design.addCommand(0, ZRF.IF, 41);
    design.addCommand(0, ZRF.LITERAL, 1); // Za
    design.addCommand(0, ZRF.FUNCTION, 10); // piece?
    design.addCommand(0, ZRF.IF, 6);
    design.addCommand(0, ZRF.LITERAL, 4); // Hu
    design.addCommand(0, ZRF.FUNCTION, 10); // piece?
    design.addCommand(0, ZRF.IF, 3);
    design.addCommand(0, ZRF.LITERAL, 0); // false
    design.addCommand(0, ZRF.JUMP, 2);
    design.addCommand(0, ZRF.LITERAL, 1); // true
    design.addCommand(0, ZRF.SET_FLAG, 0); // is-za?
    design.addCommand(0, ZRF.LITERAL, 2); // Sang
    design.addCommand(0, ZRF.FUNCTION, 10); // piece?
    design.addCommand(0, ZRF.SET_FLAG, 1); // is-sang?
    design.addCommand(0, ZRF.LITERAL, 3); // Jang
    design.addCommand(0, ZRF.FUNCTION, 10); // piece?
    design.addCommand(0, ZRF.SET_FLAG, 2); // is-jang?
    design.addCommand(0, ZRF.FUNCTION, 6); // mark
    design.addCommand(0, ZRF.PARAM, 1); // $2
    design.addCommand(0, ZRF.FUNCTION, 22); // navigate
    design.addCommand(0, ZRF.FUNCTION, 1); // empty?
    design.addCommand(0, ZRF.IF, 4);
    design.addCommand(0, ZRF.PARAM, 2); // $3
    design.addCommand(0, ZRF.FUNCTION, 22); // navigate
    design.addCommand(0, ZRF.JUMP, -4);
    design.addCommand(0, ZRF.FLAG, 0); // is-za?
    design.addCommand(0, ZRF.FUNCTION, 0); // not
    design.addCommand(0, ZRF.IF, 3);
    design.addCommand(0, ZRF.LITERAL, 1); // Za
    design.addCommand(0, ZRF.FUNCTION, 11); // create
    design.addCommand(0, ZRF.FLAG, 1); // is-sang?
    design.addCommand(0, ZRF.FUNCTION, 0); // not
    design.addCommand(0, ZRF.IF, 3);
    design.addCommand(0, ZRF.LITERAL, 2); // Sang
    design.addCommand(0, ZRF.FUNCTION, 11); // create
    design.addCommand(0, ZRF.FLAG, 2); // is-jang?
    design.addCommand(0, ZRF.FUNCTION, 0); // not
    design.addCommand(0, ZRF.IF, 3);
    design.addCommand(0, ZRF.LITERAL, 3); // Jang
    design.addCommand(0, ZRF.FUNCTION, 11); // create
    design.addCommand(0, ZRF.FUNCTION, 7); // back
    design.addCommand(0, ZRF.FUNCTION, 25); // to
    design.addCommand(0, ZRF.FUNCTION, 28); // end

    design.addCommand(1, ZRF.FUNCTION, 24); // from
    design.addCommand(1, ZRF.IN_ZONE, 0); // board-zone
    design.addCommand(1, ZRF.FUNCTION, 20); // verify
    design.addCommand(1, ZRF.PARAM, 0); // $1
    design.addCommand(1, ZRF.FUNCTION, 22); // navigate
    design.addCommand(1, ZRF.FUNCTION, 3); // friend?
    design.addCommand(1, ZRF.FUNCTION, 0); // not
    design.addCommand(1, ZRF.FUNCTION, 20); // verify
    design.addCommand(1, ZRF.FUNCTION, 1); // empty?
    design.addCommand(1, ZRF.IF, 6);
    design.addCommand(1, ZRF.LITERAL, 0); // King
    design.addCommand(1, ZRF.FUNCTION, 10); // piece?
    design.addCommand(1, ZRF.IF, 3);
    design.addCommand(1, ZRF.LITERAL, 1); // true
    design.addCommand(1, ZRF.JUMP, 2);
    design.addCommand(1, ZRF.LITERAL, 0); // false
    design.addCommand(1, ZRF.FUNCTION, 0); // not
    design.addCommand(1, ZRF.IF, 41);
    design.addCommand(1, ZRF.LITERAL, 1); // Za
    design.addCommand(1, ZRF.FUNCTION, 10); // piece?
    design.addCommand(1, ZRF.IF, 6);
    design.addCommand(1, ZRF.LITERAL, 4); // Hu
    design.addCommand(1, ZRF.FUNCTION, 10); // piece?
    design.addCommand(1, ZRF.IF, 3);
    design.addCommand(1, ZRF.LITERAL, 0); // false
    design.addCommand(1, ZRF.JUMP, 2);
    design.addCommand(1, ZRF.LITERAL, 1); // true
    design.addCommand(1, ZRF.SET_FLAG, 0); // is-za?
    design.addCommand(1, ZRF.LITERAL, 2); // Sang
    design.addCommand(1, ZRF.FUNCTION, 10); // piece?
    design.addCommand(1, ZRF.SET_FLAG, 1); // is-sang?
    design.addCommand(1, ZRF.LITERAL, 3); // Jang
    design.addCommand(1, ZRF.FUNCTION, 10); // piece?
    design.addCommand(1, ZRF.SET_FLAG, 2); // is-jang?
    design.addCommand(1, ZRF.FUNCTION, 6); // mark
    design.addCommand(1, ZRF.PARAM, 1); // $2
    design.addCommand(1, ZRF.FUNCTION, 22); // navigate
    design.addCommand(1, ZRF.FUNCTION, 1); // empty?
    design.addCommand(1, ZRF.IF, 4);
    design.addCommand(1, ZRF.PARAM, 2); // $3
    design.addCommand(1, ZRF.FUNCTION, 22); // navigate
    design.addCommand(1, ZRF.JUMP, -4);
    design.addCommand(1, ZRF.FLAG, 0); // is-za?
    design.addCommand(1, ZRF.FUNCTION, 0); // not
    design.addCommand(1, ZRF.IF, 3);
    design.addCommand(1, ZRF.LITERAL, 1); // Za
    design.addCommand(1, ZRF.FUNCTION, 11); // create
    design.addCommand(1, ZRF.FLAG, 1); // is-sang?
    design.addCommand(1, ZRF.FUNCTION, 0); // not
    design.addCommand(1, ZRF.IF, 3);
    design.addCommand(1, ZRF.LITERAL, 2); // Sang
    design.addCommand(1, ZRF.FUNCTION, 11); // create
    design.addCommand(1, ZRF.FLAG, 2); // is-jang?
    design.addCommand(1, ZRF.FUNCTION, 0); // not
    design.addCommand(1, ZRF.IF, 3);
    design.addCommand(1, ZRF.LITERAL, 3); // Jang
    design.addCommand(1, ZRF.FUNCTION, 11); // create
    design.addCommand(1, ZRF.FUNCTION, 7); // back
    design.addCommand(1, ZRF.IN_ZONE, 1); // promotion-zone
    design.addCommand(1, ZRF.FUNCTION, 0); // not
    design.addCommand(1, ZRF.IF, 4);
    design.addCommand(1, ZRF.PROMOTE, 4); // Hu
    design.addCommand(1, ZRF.FUNCTION, 25); // to
    design.addCommand(1, ZRF.JUMP, 2);
    design.addCommand(1, ZRF.FUNCTION, 25); // to
    design.addCommand(1, ZRF.FUNCTION, 28); // end

    design.addCommand(2, ZRF.FUNCTION, 24); // from
    design.addCommand(2, ZRF.IN_ZONE, 0); // board-zone
    design.addCommand(2, ZRF.FUNCTION, 0); // not
    design.addCommand(2, ZRF.FUNCTION, 20); // verify
    design.addCommand(2, ZRF.PARAM, 0); // $1
    design.addCommand(2, ZRF.FUNCTION, 21); // position
    design.addCommand(2, ZRF.ON_BOARD_DIR, 0); // name
    design.addCommand(2, ZRF.FUNCTION, 0); // not
    design.addCommand(2, ZRF.IF, 10);
    design.addCommand(2, ZRF.FUNCTION, 1); // empty?
    design.addCommand(2, ZRF.FUNCTION, 0); // not
    design.addCommand(2, ZRF.IF, 4);
    design.addCommand(2, ZRF.FORK, 3);
    design.addCommand(2, ZRF.FUNCTION, 25); // to
    design.addCommand(2, ZRF.FUNCTION, 28); // end
    design.addCommand(2, ZRF.PARAM, 1); // $2
    design.addCommand(2, ZRF.FUNCTION, 22); // navigate
    design.addCommand(2, ZRF.JUMP, -11);
    design.addCommand(2, ZRF.FUNCTION, 28); // end

    design.addPiece("King", 0, 1000);
    design.addMove(0, 0, [1, 9, 9], 0);
    design.addMove(0, 0, [2, 9, 9], 0);
    design.addMove(0, 0, [3, 9, 9], 0);
    design.addMove(0, 0, [4, 9, 9], 0);
    design.addMove(0, 0, [7, 9, 9], 0);
    design.addMove(0, 0, [6, 9, 9], 0);
    design.addMove(0, 0, [5, 9, 9], 0);
    design.addMove(0, 0, [8, 9, 9], 0);

    design.addPiece("Za", 1, 2);
    design.addMove(1, 1, [1, 9, 9], 0);
    design.addMove(1, 2, [16, 0], 0);

    design.addPiece("Sang", 2, 8);
    design.addMove(2, 0, [7, 9, 9], 0);
    design.addMove(2, 0, [6, 9, 9], 0);
    design.addMove(2, 0, [5, 9, 9], 0);
    design.addMove(2, 0, [8, 9, 9], 0);
    design.addMove(2, 2, [16, 0], 0);

    design.addPiece("Jang", 3, 10);
    design.addMove(3, 0, [1, 9, 9], 0);
    design.addMove(3, 0, [2, 9, 9], 0);
    design.addMove(3, 0, [3, 9, 9], 0);
    design.addMove(3, 0, [4, 9, 9], 0);
    design.addMove(3, 2, [16, 0], 0);

    design.addPiece("Hu", 4, 4);
    design.addMove(4, 0, [1, 9, 9], 0);
    design.addMove(4, 0, [2, 9, 9], 0);
    design.addMove(4, 0, [3, 9, 9], 0);
    design.addMove(4, 0, [4, 9, 9], 0);
    design.addMove(4, 0, [7, 9, 9], 0);
    design.addMove(4, 0, [5, 9, 9], 0);

    design.setup("Green", "Sang", 16);
    design.setup("Green", "King", 17);
    design.setup("Green", "Jang", 18);
    design.setup("Green", "Za", 12);
    design.setup("Red", "Sang", 3);
    design.setup("Red", "King", 2);
    design.setup("Red", "Jang", 1);
    design.setup("Red", "Za", 7);

    design.goal(0, "Green", "King", [1, 2, 3]);
    design.goal(1, "Red", "King", [16, 17, 18]);
};

Dagaz.View.configure = ((view) => {
    view.defBoard("Board");
    view.defPiece("GreenKing", "Green King");
    view.defPiece("RedKing", "Red King");
    view.defPiece("GreenZa", "Green Za");
    view.defPiece("RedZa", "Red Za");
    view.defPiece("GreenSang", "Green Sang");
    view.defPiece("RedSang", "Red Sang");
    view.defPiece("GreenJang", "Green Jang");
    view.defPiece("RedJang", "Red Jang");
    view.defPiece("GreenHu", "Green Hu");
    view.defPiece("RedHu", "Red Hu");

    view.defPosition("r4", 12, 12, 103, 93);
    view.defPosition("a4", 105, 12, 103, 93);
    view.defPosition("b4", 198, 12, 103, 93);
    view.defPosition("c4", 291, 12, 103, 93);
    view.defPosition("g4", 384, 12, 103, 93);
    view.defPosition("r3", 12, 106, 103, 93);
    view.defPosition("a3", 105, 106, 103, 93);
    view.defPosition("b3", 198, 106, 103, 93);
    view.defPosition("c3", 291, 106, 103, 93);
    view.defPosition("g3", 384, 106, 103, 93);
    view.defPosition("r2", 12, 200, 103, 93);
    view.defPosition("a2", 105, 200, 103, 93);
    view.defPosition("b2", 198, 200, 103, 93);
    view.defPosition("c2", 291, 200, 103, 93);
    view.defPosition("g2", 384, 200, 103, 93);
    view.defPosition("r1", 12, 294, 103, 93);
    view.defPosition("a1", 105, 294, 103, 93);
    view.defPosition("b1", 198, 294, 103, 93);
    view.defPosition("c1", 291, 294, 103, 93);
    view.defPosition("g1", 384, 294, 103, 93);
})(() => {
    const STATE = {
        INIT: 0,
        IDLE: 1,
        WAIT: 2,
        BUZY: 3,
        EXEC: 4,
        DONE: 5,
        STOP: 6
    };

    Dagaz.Controller.AI_DELAY = 500;

    let isDrag = false;
    let passForced = 0;
    let once = false;
    let lastPosition = null;
    let determinated = null;
    let dropIndex = 0;
    let onceGameOver = true;

    function App(canvas, params) {
        this.design = Dagaz.Model.getDesign();
        this.canvas = canvas;
        this.view = Dagaz.View.getView();
        this.state = STATE.INIT;
        if (params) {
            this.params = params;
        } else {
            this.params = [];
        }
        if (_.isUndefined(this.params.AI_WAIT)) {
            this.params.AI_WAIT = 3000;
        }
        if (_.isUndefined(this.params.WAIT_FRAME)) {
            this.params.WAIT_FRAME = 100;
        }
        if (_.isUndefined(this.params.SHOW_TARGETS)) {
            this.params.SHOW_TARGETS = true;
        }
        if (_.isUndefined(this.params.SHOW_ATTACKING)) {
            this.params.SHOW_ATTACKING = true;
        }
    }

    Dagaz.Controller.newGame = () => {
        if (!_.isUndefined(Dagaz.Controller.clearGame)) {
            Dagaz.Controller.clearGame();
        }
        let str = window.location.toString();
        const result = str.match(/^([^?]+)/);
        if (result) {
            str = result[1];
        }
        window.location = str;
    };

    Dagaz.Controller.passTurn = () => {
        const app = Dagaz.Controller.app;
        if (app.state == STATE.IDLE && !_.isUndefined(app.list)) {
            const moves = _.filter(app.board.moves, (move) => move.isPass());
            if (moves.length < 1) return;
            if (!confirm("Pass turn?")) return;
            app.boardApply(moves[0]);
            app.syncCaptures(moves[0]);
            app.state = STATE.IDLE;
            delete app.list;
            app.view.clearDrops();
            lastPosition = null;
            if (_.isUndefined(Dagaz.Model.getMarked)) {
                app.view.markPositions(Dagaz.View.markType.ATTACKING, []);
            }
            app.view.markPositions(Dagaz.View.markType.CURRENT, []);
            app.view.markPositions(Dagaz.View.markType.TARGET, []);
        }
    };

    const gameOver = (text, self, player) => {
        if (!Dagaz.Model.silent || player != 0) {
            if (!_.isUndefined(Dagaz.Controller.clearGame)) {
                Dagaz.Controller.clearGame();
            }
            alert(text);
        }
        if (Dagaz.Model.progressive) {
            if (Dagaz.Model.silent && player != 0) return;
            if (Dagaz.Controller.loseRefresh && player < 0) {
                window.location = window.location.toString();
                return;
            }
            if (Dagaz.Model.progressiveUrl !== null) {
                window.location = Dagaz.Model.progressiveUrl;
                return;
            }
            const str = Dagaz.Model.continue(
                self.design,
                self.board,
                window.location.toString()
            );
            if (str !== null) {
                window.location = str;
            }
        }
    };

    App.prototype.gameOver = function (text, player) {
        Dagaz.Controller.Done(this.board);
        this.view.markPositions(Dagaz.View.markType.KO, []);
        if (onceGameOver) {
            _.delay(gameOver, 1000, text, this, player);
            onceGameOver = false;
        }
        if (this.board && Dagaz.Model.showLose) {
            const captured = [];
            _.each(
                this.design.allPositions(),
                function (pos) {
                    const piece = this.board.getPiece(pos);
                    if (piece !== null) {
                        if (
                            player == 0 ||
                            (player < 0 && piece.player == -player) ||
                            (player > 0 && piece.player != player)
                        ) {
                            captured.push(pos);
                        }
                    }
                },
                this
            );
            this.view.markPositions(Dagaz.View.markType.ATTACKING, captured);
        }
    };

    Dagaz.Controller.createApp = (canvas) => {
        if (_.isUndefined(Dagaz.Controller.app)) {
            Dagaz.Controller.app = new App(canvas);
        }
        return Dagaz.Controller.app;
    };

    const sendStat = (goal, player) => {
        if (player != 1) {
            goal = -goal;
        }
        if (!_.isUndefined(ga)) {
            ga("send", "event", {
                eventCategory: goal == 0 ? "Draw" : goal > 0 ? "Win" : "Loss"
            });
        }
    };

    App.prototype.done = function () {
        if (this.state != STATE.DONE) {
            this.state = STATE.STOP;
        } else {
            if (this.doneMessage) {
                this.gameOver(this.doneMessage, this.winPlayer);
            }
        }
    };

    App.prototype.getStarts = function () {
        if (_.isUndefined(this.starts)) {
            if (_.isUndefined(this.list)) {
                this.starts = [];
            } else {
                this.starts = this.list.getStarts();
            }
        }
        return this.starts;
    };

    App.prototype.getStops = function () {
        if (_.isUndefined(this.stops)) {
            if (_.isUndefined(this.list)) {
                this.stops = [];
            } else {
                this.stops = this.list.getStops();
            }
        }
        return this.stops;
    };

    App.prototype.getTargets = function () {
        if (_.isUndefined(this.targets)) {
            if (_.isUndefined(this.list)) {
                this.targets = [];
            } else {
                this.targets = this.list.getTargets();
            }
        }
        return this.targets;
    };

    App.prototype.getDrops = function () {
        if (_.isUndefined(this.list) || Dagaz.Model.showDrops == 0) {
            this.drops = [];
        } else {
            if (_.isUndefined(this.drops) || this.drops.length == 0) {
                this.drops = this.list.getDrops();
            }
        }
        return this.drops;
    };

    App.prototype.clearPositions = function () {
        delete this.starts;
        delete this.stops;
        delete this.targets;
        delete this.drops;
        this.view.clearDrops();
    };

    App.prototype.setPosition = function (pos) {
        this.move = this.list.setPosition(pos);
        this.clearPositions();
        if (this.params.SHOW_TARGETS) {
            this.view.markPositions(
                Dagaz.View.markType.TARGET,
                this.getTargets()
            );
        }
        if (
            this.params.SHOW_ATTACKING &&
            Dagaz.Model.showCaptures &&
            _.isUndefined(Dagaz.Model.getMarked)
        ) {
            this.view.markPositions(
                Dagaz.View.markType.ATTACKING,
                this.list.getCaptures()
            );
        }
        this.state = STATE.EXEC;
        Canvas.style.cursor = "default";
        this.view.markPositions(Dagaz.View.markType.CURRENT, [pos]);
    };

    App.prototype.syncCaptures = function (move) {
        const m = Dagaz.Model.createMove(move.mode, move.sound);
        _.each(move.actions, (a) => {
            if (a[0] !== null && a[1] === null) {
                m.actions.push(a);
            }
        });
        m.applyAll(this.view);
    };

    App.prototype.mouseWheel = function (view, delta) {
        dropIndex += delta;
        if (dropIndex < 0) dropIndex = 0;
        const pos = this.currPos;
        this.currPos = -1;
        this.mouseLocate(view, pos);
    };

    App.prototype.mouseLocate = function (view, pos) {
        if (this.currPos != pos) {
            this.getDrops();
            if (
                Dagaz.Model.showDrops == -1 ||
                (!_.isUndefined(this.drops) &&
                    Dagaz.Model.showDrops > 0 &&
                    this.drops.length > Dagaz.Model.showDrops)
            ) {
                if (
                    !_.isUndefined(this.list) &&
                    _.intersection(this.getDrops(), pos).length >= 0
                ) {
                    const p = _.intersection(this.getDrops(), pos)[0];
                    let pieces = this.list.getDropPieces(p);
                    if (!_.isUndefined(Dagaz.View.getDropPieces)) {
                        pieces = Dagaz.View.getDropPieces(
                            this.design,
                            this.board,
                            p
                        );
                    }
                    if (pieces !== null && pieces.length > 0) {
                        if (dropIndex >= pieces.length) {
                            if (Dagaz.Controller.cyclicDropIndex) {
                                dropIndex = 0;
                            } else {
                                dropIndex = pieces.length - 1;
                            }
                        }
                        this.view.setDrops(pieces[dropIndex].toString(), [p]);
                    }
                } else {
                    this.view.clearDrops();
                }
            }
            if (this.state == STATE.IDLE && !_.isUndefined(this.list)) {
                if (isDrag) {
                    if (_.intersection(this.getStops(), pos).length > 0) {
                        Canvas.style.cursor = "pointer";
                    } else {
                        Canvas.style.cursor = "move";
                    }
                } else {
                    if (_.intersection(this.getStarts(), pos).length > 0) {
                        Canvas.style.cursor = "pointer";
                    } else {
                        Canvas.style.cursor = "default";
                    }
                }
            }
            this.view.markPositions(Dagaz.View.markType.GOAL, []);
            if (!isDrag && !_.isUndefined(this.board)) {
                const piece = this.board.getPiece(pos);
                if (piece !== null) {
                    const types = Dagaz.Model.getPieceTypes(piece, this.board);
                    if (Dagaz.Model.showGoals) {
                        const positions = this.design.getGoalPositions(
                            this.board.player,
                            types
                        );
                        this.view.markPositions(
                            Dagaz.View.markType.GOAL,
                            positions
                        );
                    }
                }
            }
        }
        this.currPos = pos;
    };

    App.prototype.boardApply = function (move) {
        this.board = this.board.apply(move);
        if (!_.isUndefined(this.view.sync)) {
            this.view.sync(this.board);
        }
        if (!_.isUndefined(Dagaz.Controller.addState)) {
            Dagaz.Controller.addState(move, this.board);
        }
    };

    App.prototype.mouseDown = function (view, pos) {
        this.view.markPositions(Dagaz.View.markType.GOAL, []);
        if (this.state == STATE.IDLE && !_.isUndefined(this.list)) {
            let positions = _.intersection(this.getTargets(), pos);
            if (positions.length == 0) {
                positions = _.intersection(this.getStops(), pos);
            }
            if (positions.length == 0) {
                positions = _.intersection(this.getStarts(), pos);
            }
            if (positions.length > 0) {
                Canvas.style.cursor = "move";
                this.setPosition(positions[0]);
                if (
                    this.move &&
                    this.move.isPass() &&
                    lastPosition == positions[0]
                ) {
                    if (this.list && this.list.canPass()) {
                        const moves = this.list.getMoves();
                        if (moves.length == 1) {
                            this.boardApply(moves[0]);
                            this.syncCaptures(moves[0]);
                            this.state = STATE.IDLE;
                            delete this.list;
                            this.view.clearDrops();
                            lastPosition = null;
                            if (_.isUndefined(Dagaz.Model.getMarked)) {
                                this.view.markPositions(
                                    Dagaz.View.markType.ATTACKING,
                                    []
                                );
                            }
                            this.view.markPositions(
                                Dagaz.View.markType.CURRENT,
                                []
                            );
                            this.view.markPositions(
                                Dagaz.View.markType.TARGET,
                                []
                            );
                            return;
                        }
                    }
                }
                lastPosition = positions[0];
                isDrag = true;
            }
        }
    };

    App.prototype.mouseUp = function (view, pos) {
        if (
            this.state == STATE.IDLE &&
            !_.isUndefined(this.list) &&
            Dagaz.Model.dragNdrop
        ) {
            const positions = _.intersection(this.getTargets(), pos);
            if (positions.length > 0) {
                this.setPosition(positions[0]);
            }
        }
        Canvas.style.cursor = "default";
        isDrag = false;
    };

    App.prototype.getAI = function () {
        if (_.isUndefined(this.ai)) {
            this.ai = null;
            if (this.design.isPuzzle()) {
                this.ai = Dagaz.AI.findBot("solver", this.params, this.ai);
            } else {
                this.ai = Dagaz.AI.findBot("random", this.params, this.ai);
                this.ai = Dagaz.AI.findBot("common", this.params, this.ai);
                this.ai = Dagaz.AI.findBot("smart", this.params, this.ai);
                this.ai = Dagaz.AI.findBot("opening", this.params, this.ai);
            }
        }
        return this.ai;
    };

    App.prototype.getBoard = function () {
        if (_.isUndefined(this.board)) {
            this.board = Dagaz.Model.getInitBoard();
            if (!_.isUndefined(Dagaz.Controller.addState)) {
                Dagaz.Controller.addState(Dagaz.Model.createMove(), this.board);
            }
            Dagaz.Model.Done(this.design, this.board);
        }
        return this.board;
    };

    App.prototype.getContext = function (player, forced) {
        if (
            _.isUndefined(forced) &&
            Dagaz.AI.isFriend(1, player) &&
            !this.design.isPuzzle()
        )
            return null;
        if (_.isUndefined(this.context)) {
            this.context = [];
        }
        if (_.isUndefined(this.context[player])) {
            this.context[player] = Dagaz.AI.createContext(this.design);
        }
        return this.context[player];
    };

    App.prototype.determinate = (move) => {
        const moves = move.determinate();
        determinated = null;
        if (moves.length > 1) {
            const promote = confirm("Promote piece?");
            if (promote) {
                move = moves[1];
            } else {
                move = moves[0];
            }
            determinated = move;
        }
        return move;
    };

    App.prototype.isReady = function () {
        return this.state == STATE.IDLE;
    };

    App.prototype.setBoard = function (board, isForced) {
        if (this.isReady() || isForced) {
            this.board = board;
            this.view.reInit(board);
            delete this.list;
            this.clearPositions();
            this.view.markPositions(Dagaz.View.markType.TARGET, []);
        }
    };

    App.prototype.setMove = function (move) {
        if (this.state == STATE.IDLE) {
            delete this.list;
            this.boardApply(move);
            Dagaz.Model.Done(this.design, this.board);
            this.move = move;
            this.state = STATE.EXEC;
        }
    };

    App.prototype.isRandom = function () {
        if (
            !_.isUndefined(this.design.turns) &&
            !_.isUndefined(this.design.turns[this.board.turn])
        ) {
            return this.design.turns[this.board.turn].random;
        }
        return false;
    };

    App.prototype.exec = function () {
        this.view.configure();
        if (
            !_.isUndefined(Dagaz.Model.load) &&
            Dagaz.Controller.persistense == "session"
        ) {
            var board = Dagaz.Model.getInitBoard();
            Dagaz.Model.load(board);
            delete Dagaz.Model.load;
        }
        this.view.draw(this.canvas);
        if (this.state == STATE.STOP) {
            this.state = STATE.IDLE;
            return;
        }
        if (this.state == STATE.IDLE) {
            var ctx = this.getContext(this.getBoard().player);
            if (this.isRandom()) {
                this.move = null;
                while (this.isRandom()) {
                    if (_.isUndefined(this.board.moves)) {
                        this.board.generate(this.design);
                    }
                    var moves = _.filter(
                        this.board.moves,
                        function (move) {
                            if (!_.isUndefined(move.failed)) return false;
                            return (
                                _.indexOf(
                                    this.design.turns[this.board.turn].modes,
                                    move.mode
                                ) >= 0
                            );
                        },
                        this
                    );
                    if (moves.length > 0) {
                        let ix = 0;
                        if (moves.length > 1) {
                            ix = _.random(0, moves.length - 1);
                        }
                        const move = moves[ix];
                        this.boardApply(move);
                        if (this.move === null) {
                            this.move = move;
                        } else {
                            this.move.join(move);
                        }
                    } else {
                        this.boardApply(Dagaz.Model.createMove(0));
                    }
                }
                this.state = STATE.EXEC;
                return;
            }
            const ai = this.getAI();
            if (ctx !== null && ai !== null) {
                ai.setContext(ctx, this.board);
                this.state = STATE.BUZY;
                if (!_.isUndefined(Dagaz.Controller.AI_DELAY)) {
                    Dagaz.Controller.delayTimestamp = Date.now();
                }
                Canvas.style.cursor = "wait";
                this.timestamp = Date.now();
                once = true;
            } else {
                if (
                    !_.isUndefined(Dagaz.AI.advisorStamp) &&
                    !_.isUndefined(Dagaz.Controller.pushState) &&
                    ai !== null &&
                    Dagaz.Model.advisorWait !== null
                ) {
                    const timestamp = Date.now();
                    if (Dagaz.AI.advisorStamp === null) {
                        Dagaz.AI.advisorStamp =
                            timestamp + Dagaz.Model.advisorWait;
                    }
                    if (
                        Dagaz.Controller.noRedo() &&
                        Dagaz.AI.advisorStamp < timestamp
                    ) {
                        var ctx = this.getContext(this.board.player, true);
                        if (ctx !== null) {
                            ai.setContext(ctx, this.board);
                            var result = ai.getMove(ctx);
                            if (result && result.done) {
                                delete Dagaz.AI.advisorStamp;
                                console.log("Advisor: " + result.move);
                                var board = this.board.apply(result.move);
                                Dagaz.Controller.pushState(result.move, board);
                                if (
                                    !_.isUndefined(Dagaz.Sounds) &&
                                    !_.isUndefined(Dagaz.Sounds.hint)
                                ) {
                                    Dagaz.Controller.play(Dagaz.Sounds.hint);
                                }
                            }
                        }
                    }
                }
                if (_.isUndefined(this.list)) {
                    Dagaz.AI.advisorStamp = null;
                    var player = this.design.playerNames[this.board.player];
                    console.log("Player: " + player);
                    if (!_.isUndefined(Dagaz.Model.getSetup)) {
                        console.log(
                            "Setup: " +
                                Dagaz.Model.getSetup(this.design, this.board)
                        );
                    }
                    if (!Dagaz.Controller.noDropIndex) {
                        dropIndex = 0;
                    }
                    this.list = Dagaz.Model.getMoveList(this.board);
                    let ko = [];
                    if (!_.isUndefined(this.board.ko)) {
                        ko = this.board.ko;
                    }
                    this.view.markPositions(Dagaz.View.markType.KO, ko);
                    if (!_.isUndefined(Dagaz.Model.getMarked)) {
                        this.view.markPositions(
                            Dagaz.View.markType.ATTACKING,
                            Dagaz.Model.getMarked(this.list)
                        );
                    } else {
                        if (
                            this.params.SHOW_ATTACKING &&
                            Dagaz.Model.showCaptures
                        ) {
                            this.view.markPositions(
                                Dagaz.View.markType.ATTACKING,
                                this.list.getCaptures()
                            );
                        }
                    }
                    const drops = this.getDrops();
                    if (
                        Dagaz.Model.showDrops == -2 ||
                        (!_.isUndefined(this.drops) &&
                            Dagaz.Model.showDrops > 0 &&
                            this.drops.length <= Dagaz.Model.showDrops)
                    ) {
                        if (drops.length > 0) {
                            const pieces = this.list.getDropPieces(drops[0]);
                            if (pieces !== null && pieces.length > 0) {
                                if (dropIndex >= pieces.length) {
                                    if (Dagaz.Controller.cyclicDropIndex) {
                                        dropIndex = 0;
                                    } else {
                                        dropIndex = pieces.length - 1;
                                    }
                                }
                                this.view.setDrops(
                                    pieces[dropIndex].toString(),
                                    drops
                                );
                            }
                        }
                        this.view.invalidate();
                    }
                    if (this.list.isPassForced()) {
                        if (
                            Dagaz.Model.passForcedDraw &&
                            passForced >= this.design.getPlayersCount()
                        ) {
                            this.state = STATE.DONE;
                            Canvas.style.cursor = "default";
                            sendStat(0, this.board.player);
                            if (!_.isUndefined(Dagaz.Controller.play)) {
                                Dagaz.Controller.play(Dagaz.Sounds.draw);
                            }
                            this.gameOver("Draw", 0);
                        } else {
                            this.boardApply(Dagaz.Model.createMove());
                            this.state = STATE.IDLE;
                            delete this.list;
                            this.view.clearDrops();
                            passForced++;
                        }
                        return;
                    }
                    passForced = 0;
                    if (this.list.isEmpty()) {
                        this.state = STATE.DONE;
                        Canvas.style.cursor = "default";
                        sendStat(-1, this.board.player);
                        if (!_.isUndefined(Dagaz.Controller.play)) {
                            Dagaz.Controller.play(Dagaz.Sounds.lose);
                        }
                        this.gameOver(player + " lose", -this.board.player);
                        return;
                    }
                }
            }
        }
        if (this.state == STATE.BUZY) {
            if (!_.isUndefined(Dagaz.Controller.delayTimestamp)) {
                if (
                    Date.now() - Dagaz.Controller.delayTimestamp <
                    Dagaz.Controller.AI_DELAY
                )
                    return;
                delete Dagaz.Controller.delayTimestamp;
            }
            var ctx = this.getContext(this.board.player);
            var player = this.design.playerNames[this.board.player];
            var result = this.getAI().getMove(ctx);
            if (once) {
                console.log("Player: " + player);
                if (!_.isUndefined(Dagaz.Model.getSetup)) {
                    console.log(
                        "Setup: " +
                            Dagaz.Model.getSetup(this.design, this.board)
                    );
                }
                once = false;
            }
            if (result) {
                if (_.isUndefined(result.move)) {
                    this.state = STATE.DONE;
                    Canvas.style.cursor = "default";
                    sendStat(1, this.board.player);
                    if (!_.isUndefined(Dagaz.Controller.play)) {
                        Dagaz.Controller.play(Dagaz.Sounds.win);
                    }
                    this.gameOver(player + " lose", -this.board.player);
                    return;
                }
                if (
                    result.done ||
                    Date.now() - this.timestamp >= this.params.AI_WAIT
                ) {
                    this.boardApply(result.move);
                    Dagaz.Model.Done(this.design, this.board);
                    if (result.move.isPass()) {
                        if (
                            Dagaz.Model.passForcedDraw &&
                            passForced >= this.design.getPlayersCount()
                        ) {
                            this.state = STATE.DONE;
                            Canvas.style.cursor = "default";
                            sendStat(0, this.board.player);
                            if (!_.isUndefined(Dagaz.Controller.play)) {
                                Dagaz.Controller.play(Dagaz.Sounds.draw);
                            }
                            this.gameOver("Draw", 0);
                        } else {
                            this.state = STATE.IDLE;
                            delete this.list;
                            this.view.clearDrops();
                            passForced++;
                            return;
                        }
                    } else {
                        passForced = 0;
                    }
                    this.move = result.move;
                    this.state = STATE.EXEC;
                }
            }
        }
        if (this.state == STATE.EXEC) {
            delete Dagaz.AI.advisorStamp;
            this.state = STATE.IDLE;
            isDrag = false;
            if (!_.isUndefined(this.list) && this.list.isDone()) {
                var moves = this.list.filterDrops(
                    this.list.getMoves(),
                    dropIndex
                );
                if (moves.length == 1 && moves[0].isDropMove())
                    this.move = moves[0];
            }
            if (!this.move.isPass()) {
                if (Dagaz.View.CLEAR_KO) {
                    this.view.markPositions(Dagaz.View.markType.KO, []);
                }
                this.view.markPositions(Dagaz.View.markType.TARGET, []);
                this.view.markPositions(Dagaz.View.markType.CURRENT, []);
                lastPosition = null;
                if (Dagaz.Model.showMoves) {
                    console.log(this.move.toString());
                }
                this.move = this.determinate(this.move);
                this.move.applyAll(this.view);
                if (!_.isUndefined(this.list)) {
                    this.view.markPositions(Dagaz.View.markType.CURRENT, [
                        this.move.getTarget()
                    ]);
                }
                this.state = STATE.WAIT;
            }
            if (!_.isUndefined(this.list)) {
                if (
                    this.list.isDone() ||
                    (Dagaz.Model.completePartial && !this.move.isPass())
                ) {
                    this.view.markPositions(Dagaz.View.markType.CURRENT, []);
                    var moves = this.list.filterDrops(
                        this.list.getMoves(),
                        dropIndex
                    );
                    delete this.list;
                    this.view.clearDrops();
                    let m = this.move;
                    if (
                        !Dagaz.Model.completePartial &&
                        (moves.length > 0 || determinated !== null)
                    ) {
                        m = moves[0];
                        if (determinated !== null) {
                            m.clarify(determinated);
                            determinated = null;
                        }
                    }
                    this.boardApply(m);
                    Dagaz.Model.Done(this.design, this.board);
                    console.log("Debug: " + m.toString());
                }
            }
            if (!this.move.isPass()) {
                if (!_.isUndefined(Dagaz.Controller.play)) {
                    let sound = Dagaz.Sounds.move;
                    if (!_.isUndefined(this.move.sound)) {
                        sound = this.move.sound;
                    }
                    Dagaz.Controller.play(sound, this.board.player);
                }
            }
            if (this.board.parent !== null) {
                const g = this.board.checkGoals(
                    this.design,
                    this.board.parent.player
                );
                if (g !== null) {
                    var player = this.design.playerNames[
                        this.board.parent.player
                    ];
                    this.state = STATE.DONE;
                    Canvas.style.cursor = "default";
                    if (g > 0) {
                        if (!_.isUndefined(Dagaz.Controller.play)) {
                            if (this.board.parent.player == 1) {
                                Dagaz.Controller.play(Dagaz.Sounds.win);
                            } else {
                                Dagaz.Controller.play(Dagaz.Sounds.lose);
                            }
                        }
                        this.doneMessage = player + " won";
                        this.winPlayer = this.board.parent.player;
                    } else if (g < 0) {
                        if (!_.isUndefined(Dagaz.Controller.play)) {
                            if (this.board.parent.player != 1) {
                                Dagaz.Controller.play(Dagaz.Sounds.win);
                            } else {
                                Dagaz.Controller.play(Dagaz.Sounds.lose);
                            }
                        }
                        this.doneMessage = player + " lose";
                        this.winPlayer = -this.board.parent.player;
                    } else {
                        if (!_.isUndefined(Dagaz.Controller.play)) {
                            Dagaz.Controller.play(Dagaz.Sounds.draw);
                        }
                        this.doneMessage = "Draw";
                        this.winPlayer = 0;
                    }
                    sendStat(g, this.board.parent.player);
                }
            }
        }
    };

    Dagaz.Model.InitGame();
    Dagaz.Controller.app = Dagaz.Controller.createApp(Canvas);

    if (!_.isUndefined(Dagaz.Controller.getSessionManager)) {
        Dagaz.Controller.getSessionManager(Dagaz.Controller.app);
    }
    if (!_.isUndefined(Dagaz.Controller.play)) {
        Dagaz.Controller.play(Dagaz.Sounds.start);
    }

    App.prototype.run = function () {
        const timestamp = Date.now();
        this.exec();
        const delta = Date.now() - timestamp;
        _.delay(
            () => {
                Dagaz.Controller.app.run();
            },
            delta > this.params.WAIT_FRAME ? 0 : this.params.WAIT_FRAME - delta
        );
    };

    Dagaz.Controller.app.view.init(
        Dagaz.Controller.app.canvas,
        Dagaz.Controller.app
    );
    Dagaz.Controller.app.run();
})();
