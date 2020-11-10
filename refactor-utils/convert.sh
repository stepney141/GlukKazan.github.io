for name in `find dot/svg/ -size +114c | sed 's!^.*/!!'`;
do
    ./svg2pdf.sh ./dot/svg/${name} ./dot/pdf/${name}.pdf
done