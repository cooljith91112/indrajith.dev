#!/usr/bin/zsh
npm run build
cd public
mv -v ./* /var/www/html