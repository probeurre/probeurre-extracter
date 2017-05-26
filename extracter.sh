#!/bin/bash

while [[ $# -gt 1 ]]
do
key="$1"

case $key in 
    -w|--workdir)
    WORKDIR="$2"
    shift # past argument
    ;;
    -d|--date)
    DATE="$2"
    shift # past argument
    ;;
    *)
            # unknown option
    ;;
esac
shift # past argument or value
done

WORKDIR="/probeurre-data/$WORKDIR/"

cd "$WORKDIR/repo"

# checkout to date
git checkout `git rev-list -1 --before="$DATE" master`

# get all relevant files
FILES=`find -type f -not -path './.git/*' -print0 | tr '\0' ' '`

cd -

# send to parser
node index.js "$WORKDIR" $FILES > "$WORKDIR/extracted.json"

