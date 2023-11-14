import app from "./app";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen (PORT, () => {
  console.log((`Server runnig at ${HOST}: ${PORT}`));
})

app.get("/", (req,res) => {
  res.send("Hello Node meets Cloud");
})
