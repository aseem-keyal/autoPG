# usage: bash findPGs.sh Packets/pdf/2018_SMT/Stevenson_Memorial_Tournament_Packet_01.pdf "[" “ ” "]"
# first argument is packet location, second is opening character of PGs, usually [ or (, second character is second character of PG, usually “? or "? will match it
# TODO: comment what each step is doing

pdftotext $1 - | gsed 's/\xe2\x80\x8b\x20//g' | gsed 's/\xe2\x80\x8b//g' | egrep -o "\S+ ?\\$2$3[A-Za-z'’,\-]+$4\\$5" | sed 's/(/,(/g' | sed "s/\[/,\[/g"| sed 's/ ,/,/g'
pdftotext $1 - | gsed 's/\xe2\x80\x8b\x20//g' | gsed 's/\xe2\x80\x8b//g' | egrep -o "\S+ \S+ ?\\$2$3[A-Za-z'’,\-]+ [A-Za-z'’,\-]+$4\\$5" | sed 's/(/,(/g' | sed "s/\[/,\[/g"| sed 's/ ,/,/g'
pdftotext $1 - | gsed 's/\xe2\x80\x8b\x20//g' | gsed 's/\xe2\x80\x8b//g' | egrep -o "\S+ \S+ \S+ ?\\$2$3[A-Za-z'’,\-]+ [A-Za-z'’,\-]+ [A-Za-z'’,\-]+$4\\$5" | sed 's/(/,(/g' | sed "s/\[/,\[/g"| sed 's/ ,/,/g'
pdftotext $1 - | gsed 's/\xe2\x80\x8b\x20//g' | gsed 's/\xe2\x80\x8b//g' | egrep -o "\S+ \S+ \S+ \S+ ?\\$2$3[A-Za-z'’,\-]+ [A-Za-z'’,\-]+ [A-Za-z'’,\-]+ [A-Za-z'’,\-]+$4\\$5" | sed 's/(/,(/g' | sed "s/\[/,\[/g"| sed 's/ ,/,/g'
pdftotext $1 - | gsed 's/\xe2\x80\x8b\x20//g' | gsed 's/\xe2\x80\x8b//g' | egrep -o "\S+ \S+ \S+ \S+ \S+ ?\\$2$3[A-Za-z'’,\-]+ [A-Za-z'’,\-]+ [A-Za-z'’,\-]+ [A-Za-z'’,\-]+ [A-Za-z'’,\-]+$4\\$5" | sed 's/(/,(/g' | sed "s/\[/,\[/g"| sed 's/ ,/,/g'
