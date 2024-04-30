import { inputsAreValid } from "./utils/inputs-are-valid";
import { parseInputs } from "./utils/parse-inputs";

export const run = (alertService, componentService) => {
  alertService.hideErrors();
  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
// "devDependencies": {
//   "webpack": "^5.91.0",
//   "webpack-cli": "^5.1.4"
// }
