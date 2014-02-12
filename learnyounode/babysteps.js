var gTotal=0;

for (var i=2; i < process.argv.length; i++)
    gTotal += Number(process.argv[i]);

console.log(gTotal)
