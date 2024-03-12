/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: '/country/:path*',
                destination: 'http://api.geonames.org/countryCodeJSON?lat=51.52241608253256&lng=-0.6555171310901643&username=liongoncalves'
            }
        ];
    }
};

export default nextConfig;
