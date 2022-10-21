# Cloudwatch Retention Setter

![release](https://github.com/rantoniuk/cloudwatch-retention-setter/actions/workflows/release.yml/badge.svg)[![npm version](https://badge.fury.io/js/cloudwatch-retention-setter.svg)](https://badge.fury.io/js/cloudwatch-retention-setter)[![PyPI version](https://badge.fury.io/py/cloudwatch-retention-setter.svg)](https://badge.fury.io/py/cloudwatch-retention-setter)

Cloudwatch Retention Setter is an AWS CDK construct library that reacts on AWS CloudWatch events. AWS CloudWatch does not offer the ability to set a "default retention policy" that would be set to all newly created Log Groups (e.g. by Lambda Function runs).

This construct addresses this by monitoring AWS CloudWatch Events via EventBridge, when a new LogGroup is created a Lambda function is invoked automatically that sets the retention policy to the specified value.

![](https://raw.githubusercontent.com/rantoniuk/cloudwatch-retention-setter/main/img/arch.png)

## Getting started

### TypeScript

#### Installation

npm:

```
npm install --save cloudwatch-retention-setter
```

yarn:

```
yarn add cloudwatch-retention-setter
```

#### Usage

```typescript
import * as cdk from 'aws-cdk-lib';
import { CloudwatchRetentionSetter } from 'cloudwatch-retention-setter';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Schedule } from 'aws-cdk-lib/aws-events';

const app = new cdk.App();
const stack = new cdk.Stack(app, '<stack-name>');

// use default retention of 6 months
new CloudwatchRetentionSetter(stack, 'cloudwatch-retention-setter');

// use custom retention
new CloudwatchRetentionSetter(stack, 'cloudwatch-retention-setter', {
  retentionDays: RetentionDays.ONE_MONTH,
});
```

### Python

#### Installation

```bash
$ pip install cloudwatch-retention-setter
```

#### Usage

```python
import aws_cdk.core as cdk
from cdk_cloudwatch_retention_setter import CloudwatchRetentionSetter

app = cdk.App()
stack = cdk.Stack(app, "<stack-name>")

CloudwatchRetentionSetter(stack, "cloudwatch-retention-setter")
```
