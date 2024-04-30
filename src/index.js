import { run } from "./app/app";
import { ComponentService } from "./app/components.service";
import { AlertService } from "./app/alerts.service";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
