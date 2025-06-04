FROM golang:1.24

WORKDIR /usr/src/app

COPY . .

RUN go mod download
RUN go build -v -o /usr/local/bin/gobackend ./...

CMD [ "gobackend" ]
