#!/bin/bash
# Automatically run when Codespace starts

# Install Vite-based Vue project if not already present
if [ ! -d "my-vue-app" ]; then
  npm create vite@latest my-vue-app -- --template vue
  cd my-vue-app
  npm install
else
  echo "Vue project already exists."
fi
