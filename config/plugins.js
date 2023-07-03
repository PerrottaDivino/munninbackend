module.exports = ({ env }) => ({

    upload:{
        config:{
            provider: 'cloudnary',
            providerOptions: {
                cloud_name: env('CLODINARY_NAME'),
                api_key: env('CLODINARY_KEY'),
                api_secret: env('CLODINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },     
});