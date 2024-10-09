import { MantineProvider } from "@mantine/core";

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/nprogress/styles.css';
import {AppRoutes} from "./routes/AppRoutes.tsx";

function App() {
  return (
    <MantineProvider>
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
