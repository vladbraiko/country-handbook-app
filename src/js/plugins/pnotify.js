import PNotify from "pnotify/dist/es/PNotify.js";
import PNotifyStyle from "pnotify/dist/es/PNotifyStyleMaterial.js";
import "material-design-icons/iconfont/material-icons.css";

PNotify.defaults.styling = "material";
PNotify.defaults.icons = "material";
PNotify.defaults.width = "400px";

export default PNotify;
