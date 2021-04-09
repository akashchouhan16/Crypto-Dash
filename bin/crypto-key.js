const program = require('commander');
const key = require('../commands/key');
const colors = require('colors');

program
  .command('set')
  .description('Set API Key -- Get at https://nomics.com'.bold)
  .action(key.set);

program
  .command('show')
  .description('Show API Key'.bold)
  .action(key.show);

program
  .command('remove')
  .description('Remove API Key'.bold)
  .action(key.remove);

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}
