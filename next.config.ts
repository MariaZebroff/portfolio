import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mariasdesignstudio.ca",
          },
        ],
        destination: "https://mariasdesignstudio.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
