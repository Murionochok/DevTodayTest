import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const dateNagerBase = process.env.DATE_NAGER_API_BASE;
const countriesShowBase = process.env.COUNTRIES_SHOW_API_BASE;

app.get("/all-countries", async (req, res) => {
  const response = await fetch(`${dateNagerBase}AvailableCountries`);
  const data = await response.json();

  res.status(200).json(data);
});

app.get("/country-info", async (req, res) => {
  const query = req.query.countryCode;

  const response = await fetch(`${dateNagerBase}CountryInfo/${query}`);
  const data = await response.json();

  res.status(200).json(data);
});

app.post("/population", async (req, res) => {
  const { country } = req.body;
  const request = await fetch(`${countriesShowBase}population`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country: country }),
  });
  const data = await request.json();

  res.status(200).json(data);
});

app.post("/flag", async (req, res) => {
  const { countryCode } = req.body;
  const request = await fetch(`${countriesShowBase}flag/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ iso2: countryCode }),
  });
  const data = await request.json();

  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
