use crate::commands;

pub fn main() {
  let app = tauri::Builder::default();

  let app = app.invoke_handler(
    tauri::generate_handler![
      commands::common::my_custom_command,
    ],
  );

  let error = app.run(tauri::generate_context!());
  error.expect("error while running tauri application");
}