const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
