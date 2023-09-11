import path from "path";
import { promises as fs } from "fs";

export async function GET(req, { params }) {
  // const query = req.query;
  console.log(params);
  const { holidayPackage } = params;
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "src/data/holidayPackages/");
  // //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + holidayPackage + ".json",
    "utf-8"
  );
  //Return the content of the data file in json format
  // res.status(200).json(fileContents);
  return new Response(fileContents);
}
