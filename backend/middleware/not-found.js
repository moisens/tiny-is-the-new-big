const notFound = (req, res) =>
  res.status(404).send(`Sorry, this route doesn't exist`);
export default notFound;
