fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n-1) + fibonacci(n-2)    
    }
}

use std::env;
fn main(){
    if let Some(arg1) = env::args().nth(1){
        let my_int = arg1.parse().unwrap();
        println!("{}",fibonacci(my_int));
    }
    else {
        println!("missing input")
    }
}