import "./App.css";
const Calendar = require("tui-calendar"); /* CommonJS */
require("tui-calendar/dist/tui-calendar.css");

// If you use the default popups, use this.
require("tui-date-picker/dist/tui-date-picker.css");
require("tui-time-picker/dist/tui-time-picker.css");
function App() {
  const calendar = new Calendar("#calendar", {
    height: "500px",

    defaultView: "month",

    template: {
      milestone: function (model) {
        return (
          '<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' +
          model.bgColor +
          '">' +
          model.title +
          "</span>"
        );
      },
    },
  });
  return (
    <div className="App">
      <header>Trying my first calendar </header>
    </div>
  );
}

export default App;
