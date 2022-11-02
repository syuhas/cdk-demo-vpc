import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ec2.Vpc(this, 'myDemoVPC', {
      
      maxAzs: 3,

      subnetConfiguration: [
        
        {
          cidrMask: 24,
          name: 'demoPublicSubnet',
          subnetType: ec2.SubnetType.PUBLIC,
        }

      ]
    });
  }
}
