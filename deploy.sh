#!/bin/sh
# git subtree push --prefix build origin gh-pages

# officially recommended way for deploying to gh-pages
# https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages
git commit -am "Save local changes"
git checkout -B gh-pages
git add -f build
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin gh-pages
git checkout -