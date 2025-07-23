FROM golang:1.24-alpine

RUN apk add --no-cache git

WORKDIR /usr/src/app

RUN git clone https://github.com/grbll/go-introductions-rest-api.git .

RUN go mod download

RUN ls -la
RUN go build -v -o /usr/local/bin/gobackend .

CMD ["gobackend"]
