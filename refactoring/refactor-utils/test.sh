#!/bin/bash
# curl -w '\n' https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js > d-shogi.js

awk 1 \
src/common-scripts/dagaz.js \
src/common-scripts/zrf-model.js \
src/common-scripts/zobrist.js \
src/common-scripts/common-setup-v2.js \
src/common-scripts/ko.js \
src/common-scripts/2d-view-v2.js \
src/common-scripts/move-list-v2.js \
src/common-scripts/session-manager.js \
src/common-scripts/sound-manager-v2.js \
src/common-scripts/random-ai.js \
src/common-scripts/uct-ai-v5.js \
src/common-scripts/sgf-parser.js \
src/breakthrough/data/doubutsu.js \
src/common-scripts/sgf-ai-v2.js \
src/breakthrough/scripts/doubutsu-shogi-extension.js \
src/breakthrough/scripts/doubutsu-shogi.js \
src/common-scripts/app-v2.js > d-shogi.js

# ./rexdep --pattern '<script src="(\S+)"></script>' --format dot -r ./src/breakthrough > breakthrough.dot