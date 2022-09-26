import React, {useEffect} from "react";

import {Center, MantineProvider, Text} from "@mantine/core";
import {NotificationsProvider} from "@mantine/notifications";

import { invoke } from '@tauri-apps/api/tauri'


import appTheme from "@/app/theme";

const App = () => {
  const theme = appTheme();

  useEffect(() => {
    invoke("my_custom_command").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <Center sx={{height: "100vh"}}>
          <Text>Hello World</Text>
        </Center>
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default App;