import logging
import os

import boto3

logger = logging.getLogger()
logger.setLevel(logging.INFO)
client = boto3.client('logs')


def handler(event):

    logGroupName = event.detail.requestParameters.logGroupName
    logger.info("New AWS CloudWatch was created: %s", logGroupName)

    client.put_retention_policy(
        logGroupName=logGroupName,
        retentionInDays=int(os.environ.setdefault('RETENTION_DAYS', 180))
    )

    return {
        'message': 'Retention policy set for: ' + logGroupName
    }


if __name__ == "__main__":
    handler("event", "context")
