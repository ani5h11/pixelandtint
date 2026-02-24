
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: 'Automotive' | 'Residential' | 'Commercial';
  title: string;
}
