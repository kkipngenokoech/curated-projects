extern crate futures;
extern crate telegram_bot;
extern crate tokio_core;

use std::env;

use futures::Stream;
// use futures::future::ok;
use tokio_core::reactor::Core;
use telegram_bot::*;

fn main() {
    let mut core = Core::new().unwrap();
    let token = env::var("RUST_TELEGRAM_BOT_TOKEN")
    let future = api.stream().for_each(|update|{
        if let UpdateKind::Message(message) = update.Kind{
            if let MessageKind::Text {ref data, ..} = message.kind{
                println!("<{}>: {}",&message.from.first_name,data);
                api.spawn(message.text_reply(format!("Hi, {}!, You just wrote '{}'",&message.from.first_name, data)));
            }
        }
        Ok(())
    });
    core.run(future).unwrap();
}