#!/bin/bash

# Define the URL prefix to prepend to each line
# alternatively... just wget the URL without the prefix

URL_PREFIX="https://recipes-list-download.vercel.app/api/main?URL="

# Read the lines from the text file
while IFS= read -r line; do
    wget -qO- "$URL_PREFIX$line"
done < links.txt

