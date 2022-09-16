import { createApp } from "vue";
import { Button } from "@nutui/nutui-taro";
import "./app.scss";

const App = createApp({
  onShow(options) {}
});

App.use(Button);

export default App;
