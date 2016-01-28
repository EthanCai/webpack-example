#!/bin/bash

# Unofficial Bash Strict Mod
set -euo pipefail
IFS=$'\n\t'

# Get current directory
cur_dir=$(cd $(dirname $0) && pwd)

# Go to current directory
pushd $cur_dir

# clear dist
rm -rf dist/

# compile
webpack

# copy html page to dist
rm -rf dist/page
mkdir dist/page
cp src/page/*.html dist/page/

popd
