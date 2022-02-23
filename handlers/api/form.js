const { asy } = require('../../helpers');
const { Form, FormResponse } = require('../../models');
const formModel = new Form();
const formRespModel = new FormResponse();

module.exports = form = {
  list: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.all()));
  },
  byId: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.byId(await asy.parseInt(req.params.id))));
  },
  create: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.create({ title: req.body.title, content: await asy.stringifyJSON(req.body.content), slug: req.body.slug })));
  },
  update: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.update(await asy.parseInt(req.params.id), { content: await asy.stringifyJSON(req.body) })));
  },
  delete: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.delete(await asy.parseInt(req.params.id))));
  },
  purge: async (req, res) => {
    return res.status(200).end(await asy.stringifyJSON(await formModel.purge()));
  },
  submit: async (req, res) => {
    const formInfo = await formModel.byArgs({ slug: req.params.slug });
    const formRespResp = await formRespModel.create({ formId: formInfo.id, content: await asy.stringifyJSON(req.body) });
    return res.status(200).end(await asy.stringifyJSON(formRespResp));
  }
};

