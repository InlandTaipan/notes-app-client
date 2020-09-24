const dev = {
    STRIPE_KEY: "pk_test_51HUGUJCdgciutt78lOhlXuOfWEyxLobxTitts51nN22j5PdPA7UYREihOfE9sxw7QPuAMo1zNvNqGveLOToikPZs00Et0HYza1",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-15eqfovlaei2q"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://eu85edoo3c.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_hElkn621s",
        APP_CLIENT_ID: "6v9fbgs24k1lp6rutdd20lc9ri",
        IDENTITY_POOL_ID: "us-east-2:bf89f376-8317-454c-9a88-406a62a5d158"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_51HUGUJCdgciutt78lOhlXuOfWEyxLobxTitts51nN22j5PdPA7UYREihOfE9sxw7QPuAMo1zNvNqGveLOToikPZs00Et0HYza1",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-2gt0zve56hvt"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://lnv8u8p7oc.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_nlTrULgEe",
        APP_CLIENT_ID: "4orblnp565hqrs75ipp725eg5q",
        IDENTITY_POOL_ID: "us-east-2:cf2e0658-dfc1-4e43-9109-a6c891c867ea"
    }
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5E6,
    ...config
};