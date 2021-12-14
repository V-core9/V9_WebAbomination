const models = require('.');

checkUser = async () => {
    console.log(await models.user.all());
    console.log(await models.user.register({ username: '.-v-.', password: '123456789', email: 'slavko.vuletic92@gmail.com', firstName: 'Slavko', lastName: 'Vuletic' }));
    console.log(await models.user.all());

    console.log(models);

    
    console.log(await models.page.all());
    console.log(await models.page.create({content: await models.page.byId('index'), name: 'test_2'}));
    console.log(await models.page.all());
    console.log(await models.page.one('test_2'));
    console.log(await models.page.remove('test_2'));
};

checkUser();
