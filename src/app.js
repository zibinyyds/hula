import { createApp } from "vue";
import Taro from "@tarojs/taro";
import {
  Tabs,
  TabPane,
  Icon,
  Cell,
  CellGroup,
} from "@nutui/nutui-taro";
import { createPinia } from "pinia";
import { useAppStore } from "./store";
import "./app.scss";

const app = createApp({
  onLaunch() {
    const appStore = useAppStore();
    let Rect = Taro.getMenuButtonBoundingClientRect();
    appStore.update(Rect.top + Rect.height + 4);
  },
  onShow(options) {}
});
app.use(createPinia());

app.use(Icon);

app.use(Cell);

app.use(Tabs);
app.use(TabPane);
app.use(CellGroup);

export default app;
