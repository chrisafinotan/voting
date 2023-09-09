/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.externals.push({
          "utf-8-validate": "commonjs utf-8-validate",
          bufferutil: "commonjs bufferutil",
        });
        config.resolve.extensionAlias = {
          ".js": [".ts", ".tsx", ".js", ".jsx"],
          ".mjs": [".mts", ".mjs"],
          ".cjs": [".cts", ".cjs"],
        };
        return config;
      },
}

module.exports = nextConfig
