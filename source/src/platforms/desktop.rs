use crate::commands;

pub fn main() {
  tauri::Builder::default().invoke_handler(
    tauri::generate_handler![
      commands::common::my_custom_command,
    ],
  ).run(
    tauri::generate_context!()
  ).expect(
    "error while running tauri application"
  );
}