FROM node:15
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN touch out.csv
RUN touch out.json
COPY . .
EXPOSE 3003
CMD [ "node", "index.js" ]
