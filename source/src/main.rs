#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

mod commands;
mod platforms;

fn main() {
  #[cfg(desktop)]
  platforms::desktop::main();
}