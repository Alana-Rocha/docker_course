FROM node:16-alpine
WORKDIR /getting-started-app
# RUN addgroup dev && adduser -S -G alana dev
# USER alana
COPY package.json .
#* RUN EXECUTA QUANDO SE ESTÁ CONSTRUINDO A IMAGEM.
RUN apk add --no-cache python3 g++ make
RUN yarn install --production
COPY . .
#* CMD EXECUTA DEPOIS QUE A IMAGEM ESTÁ INICIALIZADA.
CMD [ "node", "src/index.js" ]
EXPOSE 3000