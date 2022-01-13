from node:14
run mkdir -p /usr/src/app
workdir /usr/src/app
copy package*.json ./
run npm install
copy . .
expose 3000
cmd ["npm", "run", "dev"]
