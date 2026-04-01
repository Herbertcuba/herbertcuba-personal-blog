#!/bin/bash
# publish-draft.sh — Move article from Neo-progress/Blog-draft to blog /drafts/ with hashed URL
# Usage: bash scripts/publish-draft.sh <folder-name-in-Blog-draft>
#
# Example: bash scripts/publish-draft.sh 2026-04-01-apx-framework
# Result: Article available at /drafts/a3f8b2c1/ (hash of slug)

set -e

BLOG_DRAFT_DIR="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Neo-progress/Blog-draft"
BLOG_DIR="$HOME/clawd/personal-blog"
DRAFTS_DIR="$BLOG_DIR/src/drafts"

if [ -z "$1" ]; then
  echo "Usage: bash scripts/publish-draft.sh <folder-name>"
  echo ""
  echo "Available drafts:"
  ls "$BLOG_DRAFT_DIR/" 2>/dev/null || echo "  (none)"
  exit 1
fi

FOLDER="$1"
SOURCE="$BLOG_DRAFT_DIR/$FOLDER"

if [ ! -d "$SOURCE" ]; then
  echo "Error: $SOURCE not found"
  exit 1
fi

# Find the article file
ARTICLE=""
for f in "$SOURCE/article.md" "$SOURCE"/*.md; do
  if [ -f "$f" ]; then
    ARTICLE="$f"
    break
  fi
done

if [ -z "$ARTICLE" ]; then
  echo "Error: No .md file found in $SOURCE"
  exit 1
fi

# Generate hash from folder name (first 8 chars of md5)
HASH=$(echo -n "$FOLDER" | md5 | cut -c1-8)

# Extract title from frontmatter for logging
TITLE=$(grep "^title:" "$ARTICLE" | head -1 | sed 's/title: *"//' | sed 's/"$//')

# Copy article to drafts with hash as filename
mkdir -p "$DRAFTS_DIR"

# Add permalink to frontmatter if not present
if ! grep -q "permalink:" "$ARTICLE"; then
  # Insert permalink after the first ---
  sed "0,/^---$/!{0,/^---$/s|^---|permalink: /drafts/$HASH/\n---|}" "$ARTICLE" > "$DRAFTS_DIR/$HASH.md"
else
  cp "$ARTICLE" "$DRAFTS_DIR/$HASH.md"
fi

# Copy any images from the source folder
for img in "$SOURCE"/*.webp "$SOURCE"/*.png "$SOURCE"/*.jpg "$SOURCE"/*.svg; do
  if [ -f "$img" ]; then
    cp "$img" "$BLOG_DIR/src/images/posts/"
    echo "  Copied image: $(basename "$img")"
  fi
done

echo ""
echo "✅ Draft published!"
echo "  Title: $TITLE"
echo "  Hash: $HASH"
echo "  URL: /drafts/$HASH/"
echo "  File: $DRAFTS_DIR/$HASH.md"
echo ""
echo "Next: cd $BLOG_DIR && git add -A && git commit -m 'draft: $FOLDER' && git push"
