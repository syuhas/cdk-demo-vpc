# cdk-demo-vpc



<code>Installing the AWS CDK toolkit and creating a simple VPC with subnets</code>

A more detailed overview of the project can be [found here](https://digitalsteve.net "DigitialSteve.net").


`This is a small project to demonstrate the capabilities of the AWS CDK toolkit. From here we can add any desired AWS resources programmatically.`

For this demo project, we used the CDK to add a VPC with 3 public subnets, each with a subnet mask of /24 (255.255.255.0) leaving us with 254 usable IP addresses each.




This really shows how powerful the CDK is. By simply bootstrapping the IDE we are using to our AWS account and region, we can automatically create resources as needed
with the help of <code>CloudFormation</code> working behind the scenes. The entire stack can be created and destroyed all from the programmatic access to the CDK.
