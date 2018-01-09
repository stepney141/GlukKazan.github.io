(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-setup") {
      checkVersion(design, name, value);
  }
}

var isSame = function(a, b) {
  var row = (a / 8) | 0;
  if (row % 2 != 0) {
      a++;
  }
  row = (b / 8) | 0;
  if (row % 2 != 0) {
      b++;
  }
  return (a + b) % 2 == 0;
}

var notValid = function(design, board, pos, piece) {
  if (board.getPiece(pos) !== null) return true;
  var bishop = design.getPieceType("Bishop");
  if (piece.type == bishop) {
      var p = Dagaz.Model.findPiece(design, board, piece.player, bishop);
      if ((p !== null) && isSame(pos, p)) {
          return true;
      }
  }
  return Dagaz.Model.checkPositions(design, board, piece.player, [ pos ]);
}

var getPosition = function(design, board, piece) {
  var pos = _.random(0, design.positions.length - 1);
  while (notValid(design, board, pos, piece)) {
      pos = _.random(0, design.positions.length - 1);
  }
  return pos;
}

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  if (!_.isUndefined(design.reserve)) {
      _.each(_.keys(design.reserve), function(type) {
          _.each(_.keys(design.reserve[type]), function(player) {
               var piece = Dagaz.Model.createPiece(+type, +player);
               for (var i = 0; i < design.reserve[type][player]; i++) {
                    var pos = getPosition(design, board, piece);
                    board.setPiece(pos, piece);
               }
          });
      });
  }
}

})();
