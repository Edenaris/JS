import { userData, Strwrs, getDataPlanet, runTasks } from './Asyns.js';
import { addit, subtract, multiply, divide } from './mathOperations.js';
import { UPP, reverse } from './stringUtilities.js';
runTasks();
console.log(addit(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));
console.log(UPP("hello"));
console.log(reverse("hello"));