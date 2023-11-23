FROM node

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Exponha a porta em que sua aplicação está executando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]