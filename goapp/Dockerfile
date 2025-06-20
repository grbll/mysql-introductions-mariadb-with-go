FROM golang:1.24-alpine

WORKDIR /usr/src/app

COPY ./go-introductions-rest-api/go.mod ./go-introductions-rest-api/go.sum ./go-introductions-rest-api/main.go ./

RUN go mod download
RUN go build -v -o /usr/local/bin/gobackend ./...

CMD ["gobackend"]
