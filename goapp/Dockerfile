FROM golang:1.24-alpine

ENV DOCKERIZE_VERSION=v0.9.3

RUN apk update --no-cache \
  && apk add --no-cache wget openssl \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apk del wget

WORKDIR /usr/src/app

COPY . .

RUN go mod download
RUN go build -v -o /usr/local/bin/gobackend ./...

CMD [ "dockerize", "-wait", "tcp://mysql:3306", "-timeout", "30s", "gobackend" ]
