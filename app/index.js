import clock from "clock";
import document from "document";

let hourhand = document.getElementById("hourhand");
let minutehand = document.getElementById("minutehand");
let outercenterdot = document.getElementById("outercenterdot");
let innercenterdot = document.getElementById("innercenterdot");

clock.granularity = "minutes";
clock.ontick = (evt) => {

hourhand.groupTransform.rotate.angle = (30 * (evt.date.getHours() % 12)) + (0.5 * evt.date.getMinutes());
minutehand.groupTransform.rotate.angle = (6 * evt.date.getMinutes()) + (0.1 * evt.date.getSeconds());
};