#!/bin/bash

# Unofficial Bash Strict Mod
set -euo pipefail
IFS=$'\n\t'

# Get current directory
cur_dir=$(cd $(dirname $0) && pwd)

# Go to current directory
pushd $cur_dir

http-server ./dist/ -p 8080

popd
