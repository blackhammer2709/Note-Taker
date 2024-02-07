systemctl start postgresql
cd ./backend && npm install
npm run dev
cd ../frontend && npm install
npm run dev
cd ..
xdg-open http://localhost:5173/