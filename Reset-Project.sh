#!/usr/bin/env bash

# Reset-Project.sh
# Run from the project root to wipe the default Next.js/Tailwind files.

set -e

echo "🧹 Cleaning default Next.js + Tailwind project files..."

# Files to remove from src/app
files=(
  "src/app/page.tsx"
  "src/app/layout.tsx"
  "src/app/favicon.ico"
  "src/app/globals.css"
)

for f in "${files[@]}"; do
  if [ -e "$f" ]; then
    rm -f "$f"
    echo "🗑️ Removed: $f"
  fi
done

# Clean the public directory
public_dir="public"
if [ -d "$public_dir" ]; then
  rm -rf "$public_dir"/*
  echo "🧼 public/ directory cleaned"
fi

# Recreate minimal structure
mkdir -p src/app src/styles
: > src/app/layout.tsx
: > src/app/page.tsx
: > src/styles/globals.css

echo -e "\n✅ Project cleaned and ready to start from scratch!"
