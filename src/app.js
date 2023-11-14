import express from 'express';

const app = express()
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen (PORT, () => {
  console.log((`Server runnig at ${HOST}: ${PORT}`));
})

app.listen(3000, ()=> {
  console.log("gfgkgfj");
})

app.get("/",(res,req) => {
  res.send("Node meets cloud")
})

export default app;