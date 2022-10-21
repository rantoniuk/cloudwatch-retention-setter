import { Rule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Architecture, Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

export interface CloudwatchRetentionSetterProps {
  readonly retentionDays?: RetentionDays | RetentionDays.SIX_MONTHS;
}

export class CloudwatchRetentionSetter extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: CloudwatchRetentionSetterProps,
  ) {
    super(scope, id);

    const lambda = new Function(this, 'CloudwatchSetRetentionFunction', {
      handler: 'function.handler',
      code: Code.fromAsset('lambda'),
      runtime: Runtime.PYTHON_3_9,
      architecture: Architecture.ARM_64,
      description:
        'Lambda function that sets retention policy of newly created logGroups',
      environment: {
        RETENTION_DAYS: props.retentionDays!.toString(),
      },
    });

    lambda.addToRolePolicy(
      new PolicyStatement({
        actions: ['logs:PutRetentionPolicy'],
        resources: ['arn:aws:logs:*:*:log-group:*'],
      }),
    );

    const rule = new Rule(this, 'LogGroupCreatedRule', {
      eventPattern: {
        source: ['aws.logs'],
        detailType: ['AWS API Call via CloudTrail'],
        detail: {
          eventSource: ['logs.amazonaws.com '],
          eventName: ['CreateLogGroup'],
        },
      },
    });

    rule.addTarget(new LambdaFunction(lambda));
  }
}
