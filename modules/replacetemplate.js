module.exports = (template, data) => {
  let output = template.replace(/{%PROJECT_NAME%}/g, data.projectName);
  output = output.replace(/{%PROJECT_NAME2%}/g, data.projectName2);
  output = output.replace(/{%MAIN_DESC%}/g, data.mainDesc);
  output = output.replace(/{%WHAT_HEADING%}/g, data.whatHeading);
  output = output.replace(/{%WHAT_DESC%}/g, data.whatDesc);
  output = output.replace(/{%PATHCSS%}/g, data.pathcss);
  return output;
};
