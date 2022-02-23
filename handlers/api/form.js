const { asy } = require('../../helpers');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = form = {

  list: async (req, res) => {
    var data = await prisma.form.findMany({});
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  byId: async (req, res) => {
    var data = await prisma.form.findUnique({ where: { id: await asy.parseInt(req.params.id) } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  create: async (req, res) => {
    req.body.content = await asy.stringifyJSON(req.body.content);
    var data = await prisma.form.create({ data: req.body });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  update: async (req, res) => {
    var data = await prisma.form.update({
      where: {
        id: await asy.parseInt(req.params.id)
      },
      data: {
        content: await asy.stringifyJSON(req.body)
      }
    });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  delete: async (req, res) => {
    var data = await prisma.form.delete({ where: { id: await asy.parseInt(req.params.id) } });
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  purge: async (req, res) => {
    var data = await prisma.form.deleteMany();
    return res.status(200).end(await asy.stringifyJSON(data));
  },

  submit: async (req, res) => {
    const formInfo = await prisma.form.findUnique({ where: { slug: req.params.slug } });

    const data = { data: { formId: formInfo.id, content: await asy.stringifyJSON(req.body) } };

    const formRespResp = await prisma.formResponse.create(data);

    return res.status(200).end(await asy.stringifyJSON(formRespResp));
  }

};

