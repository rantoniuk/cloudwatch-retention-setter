const { awscdk, ReleasableCommits } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Radek Antoniuk',
  authorAddress: 'radek.antoniuk@gmail.com',
  majorVersion: 1,
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cloudwatch-retention-setter',
  repositoryUrl: 'https://github.com/rantoniuk/cloudwatch-retention-setter.git',
  description:
    'Based on EventBridge rule, automatically set the logGroup retention policy when new AWS CloudWatch logGroup is created.',

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  publishToPypi: {
    distName: 'rantoniuk.cloudwatch-retention-setter',
    module: 'rantoniuk.cloudwatch_retention_setter',
  },
  releasableCommits: ReleasableCommits.featuresAndFixes(),
});
project.synth();
