module.exports = () => {
  const controller = {};

  controller.get = async (req, res) => {
    const responseString = `Bia ${process.env.VERSAO_API || "3.1.0"}`;
    res.send(responseString);
  };

  return controller;
};
