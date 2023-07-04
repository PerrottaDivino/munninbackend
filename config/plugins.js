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
dfb1619d708c2a5c7325a6565f057c558a8189c186f0dc6df3f169508e904273d388cc6281e6abb43516abdd683b0ecc7d232ff3ebda16b57b3c4ed717bb58fb43facbe3a030dd03322fdc77d195fa89d03522f6e46263998a1c195145661971b170a9b155869edef8628622b8eb9b66d4c718282c88f5598d7cd93d4bf22deb