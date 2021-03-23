let logsToRender = [];
let intervalId = null;

export const logger = {
  info: function (component, message, hook, ...args) {
    logsToRender.push(
      `<span class='cmp'>${component}:&nbsp;</span>
      <span class='hook'>${hook || ""}</span>
      <span class='msg'>${message}</span>
      <span class='addl'>${args.map((arg) => arg.toString()).join(" ")}</span>`
    );
    this._renderQueue();
  },

  _renderQueue: function () {
    if (intervalId) {
      return;
    }
    intervalId = setInterval(() => {
      if (logsToRender.length > 0) {
        const li = document.createElement("li");
        li.innerHTML = logsToRender.shift();
        document.getElementById("logger").appendChild(li);

        if (logsToRender.length === 0 && intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }
    }, 200);
  },

  clear: function () {
    document.getElementById("logger").innerHTML = "";
  },
};
