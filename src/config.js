export default {
    MAX_ATTACHMENT_SIZE: 5E6,
    STRIPE_KEY: "pk_test_51HUGUJCdgciutt78lOhlXuOfWEyxLobxTitts51nN22j5PdPA7UYREihOfE9sxw7QPuAMo1zNvNqGveLOToikPZs00Et0HYza1",
    s3: {
        REGION: "us-east-2",
        BUCKET: "note-files-upload"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://1wtkep8ktc.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_bGnuiz0i2",
        APP_CLIENT_ID: "7gpo8di895k1r1jpqem5f2npmn",
        IDENTITY_POOL_ID: "us-east-2:cf51a934-aada-4da7-974d-ee18fc6c4156"
    }
};