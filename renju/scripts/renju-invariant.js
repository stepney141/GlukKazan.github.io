(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "renju-invariant") {
      checkVersion(design, name, value);
  }
}

var addKo = function(board, move) {
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
       pos = move.actions[0][1][0];
       if (_.isUndefined(board.ko)) {
           board.ko = [];
       }
       if (_.indexOf(board.ko, pos) < 0) {
           board.ko.push(pos);
       }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dirs   = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  if (board.player == 1) {
      _.each(board.moves, function(move) {          
          if (move.isPass()) return;
          var pos    = move.actions[0][1][0];
          var piece  = move.actions[0][2][0];
          var result = [];
          for (var ix = 0; ix < 4; ix++) {
               var v = +piece.getValue(ix);
               if (v > 5) {
                   addKo(board, move);
                   move.failed = true;
                   return;
               }
          }
      });
  }
  CheckInvariants(board);
}

})();
