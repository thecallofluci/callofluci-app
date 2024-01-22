// Gallery.tsx
import React from 'react';
import ObservationMockup from '@/src/app/working/ObservationMockup';

const GalleryTest = () => {
    const data = Array(10).fill({
      imageSrc: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      imageAlt: "nextui logo",
      title: "Player 256",
      subtitle: "Observation",
      body: "In the hushed whispers of smoke, I am both shadow and guide. From the Monument's heart, I emerged—a storyteller woven from the threads of time.",
      footerLink: "https://github.com/nextui-org/nextui",
      footerText: "View Observation in Call Of Luci.",
      additionalLinks: [
        {
          href: 'https://github.com/nextui-org/nextui',
          text: 'View original Observation.',
        },
      ],
      additionalAttributes: ['Provenance Attribute 1', 'Provenance Attribute 2']
    });
  
    return (
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem'}}>
        {data.map((item, index) => (
          <ObservationMockup key={index} {...item} />
        ))}
      </div>
    );
  };

export default GalleryTest;