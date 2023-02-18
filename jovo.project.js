const { ProjectConfig } = require('@jovotech/cli-core');
const { AlexaCli } = require('@jovotech/platform-alexa');

/*
  |--------------------------------------------------------------------------
  | JOVO PROJECT CONFIGURATION
  |--------------------------------------------------------------------------
  |
  | Information used by the Jovo CLI to build and deploy projects
  | Learn more here: www.jovo.tech/docs/project-config
  |
  */

const project = new ProjectConfig({
  plugins: [
    // Add Jovo CLI plugins here
    new AlexaCli({
      locales: {
        en: ['en-US'],
      },
      skillId: 'amzn1.ask.skill.7a8e69bb-7fff-423b-a8c5-dc3c5ce89a57',
      askProfile: 'default',
    }),
  ],
});


module.exports = project;
