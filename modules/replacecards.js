module.exports = (temp, data) => {
  let output = temp.replace(/{%IMAGE%}/g, data.image);
  output = output.replace(/{%HEADING%}/g, data.heading);
  output = output.replace(/{%DESCRIPTION%}/g, data.description);
  return output;
}