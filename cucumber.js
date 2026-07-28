module.exports = {
  default: {
    paths: ["tests/feature/**/*.feature"],
    require: ["tests/StepDefinitions/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: ["progress"]
  }
};