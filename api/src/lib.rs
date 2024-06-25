mod handlers;

use log::info;
use spin_sdk::{
    http::{Request, Response, Router},
    http_component, pg::Connection, variables,
};

/// A simple Spin HTTP component.
#[http_component]
fn handle_route(req: Request) -> anyhow::Result<Response> {
    let address = variables::get("database_url")?;
    
    // Establish a connection to Postgres
    let conn = Connection::open(&address)?;
    info!("Data base connect with success!");

    let mut router = Router::new();
    router.get("/", handlers::index::index_handler);
    router.get("/healthz", handlers::index::healthz_handler);
    router.get("/api/item", move |req: Request, params| handlers::item::get_random_handler(req, params, &conn));

    Ok(router.handle(req))
}
