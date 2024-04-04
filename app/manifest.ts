import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hierlogphycs',
    short_name: 'Hierlogphycs',
    description: 'A web app which uses hieroglyphics to fix your logging experience',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#510400',
    icons: [
      {
        src: '/diablo/D2-LOD-Logo.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}