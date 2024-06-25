use anyhow::Result;
use serde_json::{Map, Value};
use spin_sdk::http::{IntoResponse, Params, Request, Response};

type Message = Map<String, Value>;

pub fn index_handler(_req: Request, _params: Params) -> Result<Response> {
    let mut default = Message::new();
    default.insert("success".to_string(), Value::String("true".to_string()));
    default.insert("message".to_string(), Value::String("API REST Spin Rust + PostgreSQL".to_string()));
    default.insert("version".to_string(), Value::String("1.0.0".to_string()));

    let body = serde_json::to_string(&default).unwrap();

    Ok(Response::builder().status(200).body(body).build().into_response())
}

pub fn healthz_handler(_req: Request, _params: Params) -> Result<Response> {
    let mut default = Message::new();
    default.insert("message".to_string(), Value::String("Ok".to_string()));
    default.insert("date".to_string(), Value::String(chrono::offset::Local::now().to_string()));

    let body = serde_json::to_string(&default).unwrap();

    Ok(Response::builder().status(200).body(body).build().into_response())
}
