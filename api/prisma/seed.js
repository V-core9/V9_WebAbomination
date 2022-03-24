const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

var seeds = require('./seeds');

var objListNames = Object.keys(seeds);
console.log(objListNames);

(async () => {
  console.log("Started V-core9 Database Seeding >>>");

  for (var i = 0; i < objListNames.length; i++) {
    var objName = objListNames[i];
    console.log(objName);
    console.log("1. CleanUp : Deleting " + objName);
    console.log(await prisma[objName].deleteMany());


    console.log("2. Seeding Data: " + objName);
    var objList = seeds[objName];
    for (var j = 0; j < objList.length; j++) {
      var obj = objList[j];
      await prisma[objName].create({data: obj});
    }
  }

  console.log("3. DONE >> Proceeding to exit, Bye!");
  console.log(await prisma.$disconnect());
  process.exit(1);
})();
