import { $, chalk, echo, fetch, question } from "zx";

const test = async () => {
  let res = await $`git diff-files`;
  console.log(chalk.blue(res));
};

test();
