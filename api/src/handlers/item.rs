use anyhow::Result;
use serde_json::json;
use spin_sdk::{http::{IntoResponse, Params, Request, Response}, pg::{Connection, Decode, ParameterValue}};

pub fn get_random_handler(_req: Request, _params: Params, conn: &Connection) -> Result<Response> {

    let params: Vec<ParameterValue> = vec![];
    let rowset = conn.query("SELECT name, image_url FROM alcohols ORDER BY RANDOM() LIMIT 1;", &params)?;

    let (name, image_url) = match rowset.rows.first() {
        None => /* no rows matched query */panic!(),
        Some(row) => (String::decode(&row[0]).unwrap(), String::decode(&row[1]).unwrap())
    };

    let response_data = json!({
        "name": name,
        "image_url": image_url
    });
    let body = serde_json::to_string(&response_data).unwrap();
    
    Ok(Response::builder().status(200).body(body.to_string()).build().into_response())
}
