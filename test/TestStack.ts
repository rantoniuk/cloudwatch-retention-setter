import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CloudwatchRetentionSetter } from '../src';

export class TestStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new CloudwatchRetentionSetter(this, 'setter', { retentionDays: 90 });
  }
}
