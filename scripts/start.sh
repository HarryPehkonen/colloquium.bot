#!/bin/bash
set -e

# Ensure we're in the right directory
cd "$(dirname "$0")/.."

# Start the server
sudo systemctl start colloquium

# Check status
sudo systemctl status colloquium
