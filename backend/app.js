const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");
const PORT = 8000;
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/tasks", require("./routes/getAllTasks"));
app.use("/api/create", require("./routes/addTask"));
app.use("/api/delete", require("./routes/deleteTask"));
app.use("/api/edit", require("./routes/editTask"));
app.use("/api/complete", require("./routes/completeTask"));
const startApp = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vapoltavecs:lp9T9koq@cluster0.ww3tp.mongodb.net/todo?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    app.listen(PORT, () => console.log(`app started on ${PORT} port`));
  } catch (e) {
    console.log(e.message);
  }
};

startApp();
