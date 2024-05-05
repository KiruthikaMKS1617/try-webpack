import { run } from "./app/app";
import { ComponentService } from "./app/components.service";
import { AlertService } from "./app/alerts.service";
import "./main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
