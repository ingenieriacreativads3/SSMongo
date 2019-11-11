FROM mongo:3.6.3

RUN apt -y update

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y nodejs

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

RUN npm i pm2 -g

EXPOSE 3000

COPY [".", "/usr/src/"]

RUN pm2 start npm -- start