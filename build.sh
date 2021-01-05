#!/bin/bash

rm -f qrcoder.zip
zip -r qrcoder.zip . -x '*.git*' -x 'build.sh'