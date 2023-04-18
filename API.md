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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchRetentionSetter <a name="CloudwatchRetentionSetter" id="cloudwatch-retention-setter.CloudwatchRetentionSetter"></a>

#### Initializers <a name="Initializers" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.Initializer"></a>

```typescript
import { CloudwatchRetentionSetter } from 'cloudwatch-retention-setter'

new CloudwatchRetentionSetter(scope: Construct, id: string, props: CloudwatchRetentionSetterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetter.Initializer.parameter.props">props</a></code> | <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetterProps">CloudwatchRetentionSetterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.Initializer.parameter.props"></a>

- *Type:* <a href="#cloudwatch-retention-setter.CloudwatchRetentionSetterProps">CloudwatchRetentionSetterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetter.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.isConstruct"></a>

```typescript
import { CloudwatchRetentionSetter } from 'cloudwatch-retention-setter'

CloudwatchRetentionSetter.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cloudwatch-retention-setter.CloudwatchRetentionSetter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### CloudwatchRetentionSetterProps <a name="CloudwatchRetentionSetterProps" id="cloudwatch-retention-setter.CloudwatchRetentionSetterProps"></a>

#### Initializer <a name="Initializer" id="cloudwatch-retention-setter.CloudwatchRetentionSetterProps.Initializer"></a>

```typescript
import { CloudwatchRetentionSetterProps } from 'cloudwatch-retention-setter'

const cloudwatchRetentionSetterProps: CloudwatchRetentionSetterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cloudwatch-retention-setter.CloudwatchRetentionSetterProps.property.retentionDays">retentionDays</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | *No description.* |

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="cloudwatch-retention-setter.CloudwatchRetentionSetterProps.property.retentionDays"></a>

```typescript
public readonly retentionDays: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

---



