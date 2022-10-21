import logging
import os

import boto3

logger = logging.getLogger()
logger.setLevel(logging.INFO)
client = boto3.client('logs')


def handler(event, context):
    log_group = event['detail']['requestParameters']['logGroupName']
    logger.info("New AWS CloudWatch was created: %s", log_group)

    response = client.put_retention_policy(
        logGroupName=log_group,
        retentionInDays=int(os.environ.setdefault('RETENTION_DAYS', 180))
    )

    response_code = response['ResponseMetadata']['HTTPStatusCode']

    if (response_code == 200):
        logger.info("Retention policy updated for %s", log_group)
    else:
        logger.error(response)

    return {
        'statusCode': response_code
    }


if __name__ == "__main__":
    handler("event", "context")
