#!/bin/bash

dev_build() {
  echo "Building dev version"
  cp .env-dev .env -f
}

live_build() {
  echo "Building live version"
  cp .env-live .env -f
}

if [[ "$#" -eq "0" ]]; then
  echo "No arguments supplied, building live version."
  live_build
else
  if [ "$1" = "dev" ]; then
    dev_build
  else
    live_build
  fi
fi

docker-compose up -d
