import { defineMonorepo, Runner } from "roserepo";

export default defineMonorepo({
  runner: {
    dev: Runner.many({
      parallel: true,
    }),
    build: Runner.pipeline({
      parallel: true,
      throwOnError: true,
    }),
    lint: Runner.many({
      parallel: true,
    }),
  }
});