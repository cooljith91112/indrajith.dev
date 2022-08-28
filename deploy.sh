#!/usr/bin/zsh
npm run build
cd public
PROJECTDIR=$(pwd)
cd /var/www/html
rm -R ./*
cd $PROJECTDIR
cp -rp ./* /var/www/html/