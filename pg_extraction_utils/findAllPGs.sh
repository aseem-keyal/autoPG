# usage: bash findAllPGs.sh Packets/pdf/2018_SMT findPGs.sh "[" “? ”? "]"
# TODO: explain this
find $1 -type f -name "*" -print -exec sh -c "bash $2 {} '$3' '$4' '$5' '$6'" \;
