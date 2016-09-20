#!/bin/sh

git add build
read -p "Commit Message: " commitMessage
git commit -m "$commitMessage"
git push origin master

git subtree push --prefix build origin gh-pages