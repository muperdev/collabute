/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        appIsrStatus: true,
        devLoading: true,
    },
    headers: [
        {
            key: 'Access-Control-Allow-Origin',
            value: '*',
        },
    ],

};

export default nextConfig;
