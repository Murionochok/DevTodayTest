# DevTodayTest

Set up the project:

### Front-end:
.env.local:
```
NEXT_PUBLIC_BASE=http://localhost:4000/
```
Start:
```
cd ./client
npm install
npm run dev
```

### Back-end:
.env.local:
```
PORT=4000
DATE_NAGER_API_BASE=https://date.nager.at/api/v3/
COUNTRIES_SHOW_API_BASE=https://countriesnow.space/api/v0.1/countries/
```
Start:
```
cd ../server
npm install
npm start
```
