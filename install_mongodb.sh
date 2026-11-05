#!/usr/bin/env bash
set -euo pipefail

# Check if script is run as root
if [ "$EUID" -ne 0 ]; then
  echo "[-] Please run this script with sudo or as root: sudo bash $0"
  exit 1
fi

echo "[*] Step 1: Installing required prerequisites (curl, gnupg)..."
apt-get update -y
apt-get install -y curl gnupg

echo "[*] Step 2: Importing MongoDB 8.0 GPG public key..."
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
  gpg --dearmor --yes -o /usr/share/keyrings/mongodb-server-8.0.gpg

echo "[*] Step 3: Configuring MongoDB repository (using Ubuntu 24.04 noble release)..."
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | \
  tee /etc/apt/sources.list.d/mongodb-org-8.0.list

echo "[*] Step 4: Updating package index..."
apt-get update -y

echo "[*] Step 5: Installing MongoDB Community Edition (mongodb-org)..."
apt-get install -y mongodb-org

echo "[*] Step 6: Enabling and starting MongoDB service..."
systemctl daemon-reload
systemctl enable mongod
systemctl restart mongod

echo "[*] Step 7: Verifying MongoDB service status..."
if systemctl is-active --quiet mongod; then
  echo "[+] SUCCESS: MongoDB is running and enabled on boot!"
  echo "[+] MongoDB Version:"
  mongod --version | head -n 2
  echo "[+] MongoDB Shell (mongosh): $(which mongosh)"
  echo "[+] Default port: 27017"
  echo ""
  echo "You can now connect to MongoDB using:"
  echo "    mongosh"
else
  echo "[-] WARNING: mongod service is not running. Check logs with:"
  echo "    sudo journalctl -u mongod -e"
fi
