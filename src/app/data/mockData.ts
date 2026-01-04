
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  time: string;
  hourlyRate: number;
  type: 'Bartender' | 'Server' | 'Security' | 'Usher' | 'Cleanup' | 'Brand Ambassador';
  description: string;
  image: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  rating: number;
  jobsCompleted: number;
  hourlyRate: number;
  location: string;
  skills: string[];
  avatar: string;
  bio: string;
}

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Wedding Bartender',
    company: 'Elegant Events Co.',
    location: 'Downtown Hilton',
    date: 'Oct 24, 2025',
    time: '4:00 PM - 11:00 PM',
    hourlyRate: 25,
    type: 'Bartender',
    description: 'Looking for an experienced bartender for a high-end wedding. Must be able to mix classic cocktails and handle high volume.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Event Security',
    company: 'SafeGuard Staffing',
    location: 'City Stadium',
    date: 'Oct 25, 2025',
    time: '12:00 PM - 8:00 PM',
    hourlyRate: 22,
    type: 'Security',
    description: 'Crowd control and ticket checking for a music festival. Security license required.',
    image: 'https://images.unsplash.com/photo-1555696958-c5049b866f6f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Brand Ambassador',
    company: 'Fizz Energy Drink',
    location: 'Convention Center',
    date: 'Oct 26, 2025',
    time: '9:00 AM - 5:00 PM',
    hourlyRate: 30,
    type: 'Brand Ambassador',
    description: 'Energetic individuals needed to hand out samples and engage with conference attendees.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Banquet Server',
    company: 'Grand Catering',
    location: 'Riverside Hall',
    date: 'Oct 24, 2025',
    time: '5:00 PM - 10:00 PM',
    hourlyRate: 20,
    type: 'Server',
    description: 'Serving plated dinner for a corporate gala. Black tie attire required.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Registration Usher',
    company: 'Tech Summit 2025',
    location: 'Moscone Center',
    date: 'Nov 12, 2025',
    time: '7:00 AM - 3:00 PM',
    hourlyRate: 18,
    type: 'Usher',
    description: 'Help check in attendees, hand out badges, and direct foot traffic.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_STAFF: Staff[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Certified Mixologist',
    rating: 4.9,
    jobsCompleted: 42,
    hourlyRate: 35,
    location: 'Downtown',
    skills: ['Cocktails', 'Wine Knowledge', 'POS Systems'],
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    bio: 'Experienced bartender with 5 years in high-volume clubs and fine dining.'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Event Specialist',
    rating: 4.8,
    jobsCompleted: 28,
    hourlyRate: 25,
    location: 'Westside',
    skills: ['Serving', 'Set Up', 'Customer Service'],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    bio: 'Reliable and hardworking. I engage well with guests and ensure smooth operations.'
  },
  {
    id: '3',
    name: 'Jessica Davis',
    role: 'Promo Model',
    rating: 5.0,
    jobsCompleted: 15,
    hourlyRate: 40,
    location: 'North Hills',
    skills: ['Sales', 'Public Speaking', 'Social Media'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    bio: 'High energy brand ambassador. I help brands make a lasting impression.'
  }
];
