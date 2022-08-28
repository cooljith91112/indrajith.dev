#!/usr/bin/zsh
npm run build
cd public
mv -v -f ./* /var/www/html