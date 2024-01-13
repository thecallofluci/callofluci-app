/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 's3.amazonaws.com',
		  port: '',
		  pathname: '/my-bucket/**',
		},
		{
		  protocol: 'https',
		  hostname: 'images.squarespace-cdn.com',
		  port: '',
		  pathname:
			'/content/v1/53b6eb62e4b06e0feb2d8e86/1656776064476-ADETQUJY3NV2AOI39K3T/**',
		},
		{
		  protocol: 'https',
		  hostname: 'media.niftygateway.com',
		  port: '',
		  pathname:
			'/image/upload/v1692056679/publishers/niftygateway_curated/91741/111343/**',
		},
	  ],
	},
	eslint: {
	  ignoreDuringBuilds: true, // temporary workaround for Vercel deployments
	},
  }
  
  module.exports = nextConfig


