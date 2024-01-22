import logo from '../public/logo.svg'
import icon from '../public/icon.svg'
import banner from '../public/banner.jpg'
// import other images...

export { logo, icon, banner }
// export other images...

// list of props for Next.js Image Component

// Required props
//    src="/profile.png" // The path or URL to the image
//    width={500} // The intrinsic width of the image in pixels
//    height={500} // The intrinsic height of the image in pixels
//    alt="Picture of the author" // A description of the image for accessibility

// Optional props
//    loader={myLoader} // The image loader function to use
//    fill={true} // Whether the image should fill its container
//    sizes="(max-width: 768px) 100vw, 33vw" // A string with one or more descriptors indicating a set of source sizes
//    quality={80} // The quality of the optimized image
//    priority={true} // When true, the image will be considered high priority and will be loaded eagerly
//    placeholder="blur" // Adds a blurred placeholder to the image

// Advanced props
//    style={{objectFit: "contain"}} // The fit of the image within the box
//    onLoadingComplete={() => console.log('Image loaded')} // Function called when the image finishes loading
//    onLoad={(event) => console.log('Image loaded')} // Function called when the image finishes loading
//    onError={(event) => console.log('Image failed to load')} // Function called when the image fails to load
//    loading="lazy" // The loading behavior of the image
//    blurDataURL="data:image/jpeg..." // The URL for a blurred placeholder image
//    unoptimized={true} // When true, the image will not be optimized
