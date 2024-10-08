# Fase 1: Build da aplicação React
FROM node:latest AS build

WORKDIR /app

# Definir a variável de build ARG
ARG REACT_APP_HOST

COPY package*.json ./

# Configurações de rede do npm
RUN npm config set fetch-retries 5
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 120000
# Se necessário, adicione as configurações de proxy aqui

# Instala as dependências
RUN npm install

# Copia os arquivos restantes da aplicação
COPY . .

# Passar a variável REACT_APP_HOST durante o build
RUN REACT_APP_HOST=$REACT_APP_HOST npm run build

# Fase 2: Servir com NGINX
FROM nginx:alpine

# Remove arquivos padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos estáticos do build para o NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Copia o arquivo de configuração do NGINX para o local correto
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 3001 para acessar a aplicação
EXPOSE 3001

# Comando para rodar o NGINX
CMD ["nginx", "-g", "daemon off;"]
