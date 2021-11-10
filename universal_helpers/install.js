/*jshint esversion: 8 */
const cliProgress = require("cli-progress");

// create a new progress bar instance and use shades_classic theme
const bar1 = new cliProgress.SingleBar({
  format:
    "Install Progress |" +
    "{bar}" +
    "| {percentage}% || {value}/{total} Chunks ]>",
  barCompleteChar: "\u2588",
  barIncompleteChar: "\u2591",
  hideCursor: true,
});

const proBar = {
  name: "install_progress_bar",
  max: 10,
  val: 0,
  init: 0,
};

const stopBar = () => {
  try {
    clearInterval(barInter);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const boxen = require("boxen");

console.log(boxen("Installing <]_ vdo _[> CLI Application ", { padding: 1 }));

// start the progress bar with a total value of 200 and start value of 0
bar1.start(proBar.max, proBar.init);

var barInter = setInterval(() => {
  proBar.val++;
  // update the current value in your application..
  bar1.update(proBar.val);

  if (proBar.val == proBar.max) {
    // stop the progress bar
    bar1.stop();
    stopBar();
  }
}, 500);
