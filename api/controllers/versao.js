module.exports = () => {
  const controller = {};

  controller.get = async (req, res) => {
    const responseString = `Versao 2025 da Bia ${process.env.VERSAO_API || "3.2.0"}`;
    res.send(responseString);
  };

  return controller;
};
