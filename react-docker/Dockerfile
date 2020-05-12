FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM mhart/alpine-node:12
RUN yarn global add http-server
WORKDIR /app
COPY --from=builder /app/build .
CMD ["http-server", "-p", "80"]