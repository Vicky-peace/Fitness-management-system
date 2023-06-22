import avatar1 from "./images/avatar1.jpg";
import avatar2 from "./images/avatar2.jpg";
import avatar3 from "./images/avatar3.jpg";
import avatar4 from "./images/avatar4.jpg";
import avatar5 from "./images/avatar5.jpg";


import { RiHome2Line, RiInformationLine, RiGalleryLine, RiCalendar2Line, RiUserLine, RiContactsLine } from 'react-icons/ri';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export const links = [
  {
    name: "Home",
    path: '/',
    icon: <RiHome2Line />
  },
  {
    name: "About",
    path: '/about',
    icon: <RiInformationLine />
  },
  {
    name: "Gallery",
    path: '/gallery',
    icon: <RiGalleryLine />
  },
  {
    name: "Plans",
    path: '/plans',
    icon: <RiCalendar2Line />
  },
  {
    name: "Trainers",
    path: '/trainers',
    icon: <RiUserLine />
  },
  {
    name: "Contact",
    path: '/contacts',
    icon: <RiContactsLine />
  },
  {
    name: 'Sign In',
    path: '/signin',
    icon: <FaSignInAlt />
  },
  {
    name: 'Sign Up',
    path: '/signup',
    icon: <FaUserPlus />
  }
];


export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer: "The frequency of exercise depends on your fitness goals and current fitness level. It is generally recommended to engage in moderate-intensity exercise for at least 150 minutes per week or vigorous-intensity exercise for 75 minutes per week."
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer: "The best time to work out varies from person to person. Some people find that exercising in the morning helps energize them for the day, while others prefer evening workouts to relieve stress. Choose a time that works best for your schedule and allows you to be consistent with your exercise routine."
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer: "The duration of your workouts depends on your fitness level and the type of exercise you're performing. For cardiovascular workouts, aim for 30 to 60 minutes per session. Strength training sessions can range from 20 to 60 minutes. It's important to listen to your body and gradually increase the duration as your fitness improves."
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer: "Yes, warming up before workouts is important to prepare your body for exercise. It helps increase blood flow to your muscles, improves flexibility, and reduces the risk of injury. Spend 5 to 10 minutes doing dynamic stretches and light aerobic exercises to warm up before your main workout."
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer: "A balanced fitness routine usually includes a combination of strength training and cardio exercises. Strength training helps build muscle strength and tone, while cardio exercises improve cardiovascular health and burn calories. Incorporating both types of exercises can provide a well-rounded fitness program."
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer: "Yes, lifting weights is an effective way to engage in strength training. It helps build muscle mass, increase strength, and improve overall body composition. Start with lighter weights and proper form, gradually increasing the weight as you progress. Consult with a fitness professional to design a safe and effective weightlifting routine."
  }
];











export const programs = [
  {
    id: 1,
    title: "Strength and Conditioning",
    info: "Take your fitness to the next level with our comprehensive strength and conditioning program. Build muscle, increase endurance, and improve overall performance.",
    path: '/programs/111',
  },
  {
    id: 2,
    title: "Cardio Blast",
    info:  "Get your heart pumping and burn calories with our high-energy cardio program. Improve cardiovascular health, boost metabolism, and achieve your weight loss goals.",
    path: '/programs/222',
  },
  {
    id: 3,
    title: "Functional Fitness",
    info: "Enhance your everyday movement patterns and functional abilities with our functional fitness program. Improve flexibility, balance, and coordination for better performance in daily activities.",
    path: '/programs/333',
  },
  {
    id: 4,
    title: "Mind-Body Fusion",
    info: "Find balance and inner peace with our mind-body fusion program. Experience a combination of yoga, meditation, and mindful exercises to reduce stress and improve overall well-being.",
    path: '/programs/444',
  },
];



export const values = [
  {
    id: 1,
  
    title: "Fitness Training",
    desc: "Achieve your fitness goals through tailored workout programs and expert guidance."
  },
  {
    id: 2,
    
    title: "Strength Building",
    desc: "Build strength and increase muscle mass with effective weightlifting and resistance training."
  },
  {
    id: 3,
   
    title: "Cardiovascular Fitness",
    desc: "Improve your cardiovascular health and endurance with various cardio exercises and routines."
  },
  {
    id: 4,
  
    title: "Group Classes",
    desc: "Join fun and energetic group classes led by experienced instructors for a motivating workout."
  }
];

export default values;

export const testimonials = [
  {
      id: 1,
      name: "John Smith",
      quote: "I had an amazing experience at the gym. The trainers were highly knowledgeable and helped me achieve my fitness goals.",
      job: "Marketing Executive",
      avatar: avatar1
  },
  {
      id: 2,
      name: "Emily Johnson",
      quote: "The gym provided a supportive environment for me to work on my strength and endurance. I saw great improvements in my fitness level.",
      job: "Graphic Designer",
      avatar: avatar2
  },
  {
      id: 3,
      name: "Michael Thompson",
      quote: "As a professional athlete, I was impressed by the state-of-the-art equipment and personalized training programs offered at the gym.",
      job: "Professional Athlete",
      avatar: avatar3
  },
  {
      id: 4,
      name: "Sophia Martinez",
      quote: "The gym has a friendly and welcoming atmosphere. The group classes are fun and motivating, making every workout enjoyable.",
      job: "Teacher",
      avatar: avatar4
  },
  {
      id: 5,
      name: "Oliver Davis",
      quote: "I've never been a fan of exercise, but the gym changed my perspective. The trainers made the workouts engaging and helped me stay motivated.",
      job: "Writer",
      avatar: avatar5
  }
];



export const plans = [
  {
    id: 1,
    name: 'Silver Package',
    desc: 'This package is perfect for beginners who need constant help',
    price: 'KES 2,999',
    features: [
      { feature: 'Personalized Workout Programs', available: true },
      { feature: 'Access to Fitness Classes', available: true },
      { feature: 'Gym Equipment Orientation', available: true },
      { feature: 'Locker and Shower Facilities', available: true },
      { feature: 'Dedicated Personal Trainer', available: true },
      { feature: 'Advanced Workout Techniques', available: false },
      { feature: 'Nutrition Consultation', available: false },
      { feature: 'Group Training Sessions', available: false },
      { feature: 'Progress Tracking', available: false },
      { feature: 'Online Fitness Resources', available: false },
      { feature: '24/7 Gym Access', available: false },
      { feature: 'Recovery and Relaxation Area', available: false },
      { feature: 'Discounted Supplements', available: false },
    ],
  },
  {
    id: 2,
    name: 'Gold Package',
    desc: 'This is the perfect package for beginners who know what they\'re doing',
    price: 'KES 4,999',
    features: [
      { feature: 'Personalized Workout Programs', available: true },
      { feature: 'Access to Fitness Classes', available: true },
      { feature: 'Gym Equipment Orientation', available: true },
      { feature: 'Locker and Shower Facilities', available: true },
      { feature: 'Dedicated Personal Trainer', available: true },
      { feature: 'Advanced Workout Techniques', available: true },
      { feature: 'Nutrition Consultation', available: true },
      { feature: 'Group Training Sessions', available: true },
      { feature: 'Progress Tracking', available: false },
      { feature: 'Online Fitness Resources', available: false },
      { feature: '24/7 Gym Access', available: false },
      { feature: 'Recovery and Relaxation Area', available: false },
      { feature: 'Discounted Supplements', available: false },
    ],
  },
  {
    id: 3,
    name: 'Platinum Package',
    desc: 'This package is perfect for busy people who need home service',
    price: 'KES 8,999',
    features: [
      { feature: 'Personalized Workout Programs', available: true },
      { feature: 'Access to Fitness Classes', available: true },
      { feature: 'Gym Equipment Orientation', available: true },
      { feature: 'Locker and Shower Facilities', available: true },
      { feature: 'Dedicated Personal Trainer', available: true },
      { feature: 'Advanced Workout Techniques', available: true },
      { feature: 'Nutrition Consultation', available: true },
      { feature: 'Group Training Sessions', available: true },
      { feature: 'Progress Tracking', available: true },
      { feature: 'Online Fitness Resources', available: true },
      { feature: '24/7 Gym Access', available: true },
      { feature: 'Recovery and Relaxation Area', available: true },
      { feature: 'Discounted Supplements', available: true },
    ],
  },
];


