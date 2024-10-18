import admin from 'firebase-admin';

export default async function handler(req, res){
    const sevieceAccount = {
        projectId:'test1-f45ad',
        privateKey:'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgldiklkFNDZ7t\nOTi7IDMP1+YXk4iXiehDci1inhY4kR0snT1eAGWUxrkG/FgWJnh0CEOjqaqcSBM1\nmZhDqyAkRC4+J4ET+VZZAWMSdpmpi+fvBr6AXOFHi6EZZolTkvC51b4OPJLoLNaH\nMbeGLQ3VRmPu7oba/1yKaxYsgWdTcFEQiLmIe0Lxu1rzEEd36W3QFwL/kaeZvdEN\nT5vIS3OSZZyJI5FKH3WzV3Z/YSDwGby+wXxuiWKaNkWhB5UYl7gR/j1Ylp9F7gdA\nyv/vpZSwdeBp0bdblKByx5DCeHhKNCxu4cetzyjt8s9OdzLNnjDHsC9qk4PdbbdU\nyYmIZitVAgMBAAECggEADXOlSLA6JcwQy+Vhs7HQT9ucL3hmgO8xRh5qioVx7hN1\n2AFknRsNEf04OEtreOYzFovaAqaD9Ksdn31Pdxz+yHBFAWQ0w1QSdXU7c9X8gZUx\n0guEv2LzD20KYILULmyI1BWsDIGVeskawAtxngCTKpJGwm03swugwwrnuhsC6Uca\n1cSR3qhkJfz67RpZrAWAWGaxBfNSSJzpjYVhoTPGIekaSi9n754ZCV+c5Me0eLXJ\nKT5y6KsIiOPmGF++9Q2hw9ywDRsNrsW4GFBtddwKLTz8aJiKGsXY8liiMqqeIfKV\nwyIbY4QQHW5yqBkVVjnuMij2nRAfvKvMJ5O9NajzZwKBgQDP+javcVRzdScdfZjN\n98wQpzcoLJzCVKw1edO5PTFh86yDC23an0jWrT7Pe4QjvvneMr+LzCqRKdCv/g8r\n48jUgoEt5QopE91NJ/h/pMJOrPbflhnUnLbKMnqIrnD277qjW4EBxkVuu0PG0rru\nJNOA9EgBWBgI5XvVkuJdjQ1cHwKBgQDFqjuUcZbcHyWEZ7CP7649NrjpwU5W9/ZE\nHSDKbk+v+PW6F7Oj+4Ru+KLXMschX85q6COJ6jGPd3L18QoFtCWzw2pBnQPPSyBs\nt8vZ4cG4Z1epnzyfA5qVdoefRnBfqrHBc3IAn55jBzRdTd6pfl4nwBwMfwWgz9kJ\nCuzk5YYKCwKBgQCkiUeKNRai4SQ46IxjJo+C/UdduS2rcGFtTRx7iDXxUF5CrmAS\nfcGaVSVD8Gvx+7yiVXPEnZlvjq1TDqPiDSttNHIOZQ1MwjJqQB0QnsA6jgwhhxaY\nZgMWpCjcyWUFd1MoudOuG7YCjJRqT30jum65rojox1D8eNEnfjUn3deb8QKBgBex\nwFKbCyp30Vd91nxqjshntuLOeUWTk8G2fCfH8WV2wn38OVx+2fEzfNGvFI+7nFLU\nYO43VJmOCAnTSxBD+AEEe8hBuiMvLkPaBGWp2j7wpGGA5RNqqy0feEJvfyj4nTZD\nUHciqynTw0MsAnTu4PqC3NnioBoW0D11QdBucxLhAoGBAMaZGeO5mOL3OqN0EH3Z\nUzjrA2v+Skrrcn/PCN5KCagzkiVXYdFnJjVz5P2R2ijZjrP21i+vFGZlN6U87RZL\nO9ZI/Y1Knel/mTLgoZEQaVDfgzlrIbsQOA+59oeOsfqToVvJwsCnHfY7xk19qt3r\n3TmTlcenGfMWdse+uaPU6lTQ\n-----END PRIVATE KEY-----\n',
        clientEmail:'firebase-adminsdk-mth28@test1-f45ad.iam.gserviceaccount.com'
    }

    admin.initializeApp();
        const msg = await admin.messaging().send();

    res.status(200).json({id:1000});
}

