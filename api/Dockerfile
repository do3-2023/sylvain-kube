FROM rust:1.74 AS build
RUN rustup target add wasm32-wasi
WORKDIR /app
COPY Cargo.toml Cargo.lock ./
COPY src ./src
RUN cargo build --target wasm32-wasi --release
RUN chmod a+x /app/target/wasm32-wasi/release/api.wasm

FROM scratch
COPY spin.toml /spin.toml
COPY --link --from=build /app/target/wasm32-wasi/release/api.wasm /api.wasm
ENTRYPOINT [ "/api.wasm" ]