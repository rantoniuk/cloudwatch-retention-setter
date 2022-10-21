import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { TestStack } from './TestStack';

test('Test', () => {
  const app = new cdk.App();

  // WHEN
  const stack = new TestStack(app, 'TestStack');

  // THEN
  Template.fromStack(stack).templateMatches({});
});
