import express from "express";

const app = express();
const port = 3000;


app.use(express.json());

let teaData = [];
let nextId = 1;

// add a new hardware
app.post("/hardware", (req, res) => {
  const { name, price } = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// get all hardware
app.get("/hardware", (req, res) => {
  res.status(200).send(teaData);
});

// get a hardware with id
app.get("/hardware/:id", (req, res) => {
  const tea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Hardware not found");
  }

  res.status(200).send(tea);
});

// update hardware
app.put("/hardware/:id", (req, res) => {
  const hardware = hardwareData.find((hardware) => hardware.id === parseInt(req.params.id));
  if (!hardware) {
    return res.status(404).send("Hardware not found");
  }

  const { name, price } = req.body;
  hardware.name = name;
  hardware.price = price;

  res.status(200).send(hardware);
});

// delete hardware
app.delete("/hardware/:id", (req, res) => {
  const index = hardwareData.findIndex((hardware) => hardware.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Hardware not found");
  }

  hardwareData.splice(index, 1);
  res.status(204).send("Deleted");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
