AWS.config.update({
    accessKeyId: 'AKIAKGVBGUJSVBFBIRGDMTMCIH3LAX4TA7MWA4I2HBDR',
    secretAccessKey: 'omLfJI6Kg3i5Aa1AyYSSr9f6aDW06HZpbe94jF0P',
    region: 'eu-central-1',
});

const s3 = new AWS.S3({
    endpoint: 'https://s3.eu-central-1.s4.mega.io',
    s3ForcePathStyle: true,
    signatureVersion: 'v4'
});

const bucket = 'preview';

const params = {
    Bucket: bucket,
    Prefix: '',
    MaxKeys: 100
};

async function listObjects() {
    const data = await s3.listObjectsV2(params).promise();
    console.log(data);

    const video = document.createElement('video');
    video.src = data.Contents[2]
}


listObjects();
