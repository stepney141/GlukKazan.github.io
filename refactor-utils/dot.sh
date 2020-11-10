#!/bin/bash

# プロジェクト全体の依存関係グラフの生成
rexdep --pattern '<script src="(\S+)"></script>' --format dot -r ../src > ./glukkazan.dot

# 各ディレクトリごとの依存関係グラフの生成
dirs=`ls ../src -l | awk '$1 ~ /d/ {print $9 }'`
for name in $dirs;
do
    echo $name
    rexdep --pattern '<script src="(\S+)"></script>' --format dot -r ../src/${name} > ./dot/${name}.dot
done

# 各dotファイルの2行目にグラフ描画に関するオプションを追記
files=`find dot/ -type f -name "*.dot"`
for name2 in $files;
do
    echo $name2;
    sed -i -e "2i graph[ ranksep=10, rankdir = LR ];" ${name2};
done

# ここまで生成した全dotファイルを描画、svgで出力
for name3 in $dirs;
do
    echo $name3
    dot -Tpng ./dot/${name3}.dot -o ./dot/svg/${name3}.svg
done
