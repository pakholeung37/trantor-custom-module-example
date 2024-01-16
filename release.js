import x from "shelljs";
import "dotenv/config";

const { ACCESS_KEY, SECRET_ACCESS_KEY, BUCKET_NAME } = process.env;

x.exec(
  `package-tools oss -c ${ACCESS_KEY} ${SECRET_ACCESS_KEY} ${BUCKET_NAME} -d dist -m dev`
);
