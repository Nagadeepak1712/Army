import { PageData, PageId } from './types';

export const PAGES: Record<PageId, PageData> = {
  home: {
    id: 'home',
    title: 'Home',
    heroTitle: 'Welcome to ZSOS Army Hub',
    heroSubtitle: 'Army • Navy • Airforce',
    heroImageKeyword: 'military',
    sections: [
      {
        title: 'Tri-Service Excellence',
        content: 'ZSOS Army Hub represents the pinnacle of national defense, integrating Land, Sea, and Air capabilities into a unified shield.',
        listItems: ['Army - Dominating the land.', 'Navy - Ruling the oceans.', 'Airforce - Controlling the skies.'],
        imageKeyword: 'military'
      },
      {
        title: 'Latest Joint Operations',
        content: 'Coordinated strikes and peacekeeping missions involving our elite Army battalions, Naval fleets, and Air squadrons.',
        imageKeyword: 'tank'
      },
      {
        title: 'Secret Operations Division',
        content: 'Beyond the visible battlefield lies the shadow war. Recruitment for our classified intelligence wing is now open for select candidates.',
        imageKeyword: 'cyber_security'
      }
    ]
  },
  about: {
    id: 'about',
    title: 'About',
    heroTitle: 'History of Our Forces',
    heroSubtitle: 'Legacy of Valor',
    heroImageKeyword: 'history',
    sections: [
      {
        title: 'Evolution of Warfare',
        content: 'From ancient cavalry to modern cyber-warfare, ZSOS has evolved to meet the changing face of global conflict.',
        imageKeyword: 'tank'
      },
      {
        title: 'Organizational Structure',
        content: 'A disciplined hierarchy ensures efficient command and control across all regiments, fleets, and squadrons.',
        imageKeyword: 'map'
      },
      {
        title: 'Ethics & Code of Honor',
        content: 'We adhere to a strict code of conduct that respects human rights, international law, and the dignity of all.',
        imageKeyword: 'medal'
      }
    ]
  },
  missions: {
    id: 'missions',
    title: 'Missions',
    heroTitle: 'Strategic Operations',
    heroSubtitle: 'Global Peace & Security',
    heroImageKeyword: 'mission',
    sections: [
      {
        title: 'Peacekeeping Missions',
        content: 'Deployed under UN mandates, our troops maintain order and provide humanitarian aid in conflict zones.',
        imageKeyword: 'military'
      },
      {
        title: 'Counter-Terrorism',
        content: 'Specialized units work around the clock to neutralize threats and dismantle terror networks.',
        imageKeyword: 'swat'
      },
      {
        title: 'Disaster Relief',
        content: 'When natural disasters strike, the Armed Forces are the first responders, providing airlift, medical aid, and engineering support.',
        imageKeyword: 'helicopter'
      }
    ]
  },
  navy: {
    id: 'navy',
    title: 'Navy',
    heroTitle: 'ZSOS Naval Command',
    heroSubtitle: 'Guardians of the Deep Blue',
    heroImageKeyword: 'navy_ship',
    sections: [
      {
        title: 'The Blue Water Navy',
        content: 'Our carrier strike groups and destroyer squadrons project power across the seven seas, ensuring maritime trade safety and territorial integrity.',
        imageKeyword: 'aircraft_carrier'
      },
      {
        title: 'Submarine Warfare',
        content: 'Silent and deadly, our nuclear and diesel-electric submarines patrol the depths, providing strategic deterrence.',
        listItems: ['Hunter-Killer Subs', 'Ballistic Missile Submarines', 'Deep Submergence Rescue Vehicles'],
        imageKeyword: 'navy_ship'
      },
      {
        title: 'Marine Commandos',
        content: 'The amphibious warriors specialized in maritime special operations, underwater sabotage, and hostage rescue.',
        imageKeyword: 'diver'
      }
    ]
  },
  airforce: {
    id: 'airforce',
    title: 'Airforce',
    heroTitle: 'ZSOS Air Command',
    heroSubtitle: 'Touch the Sky with Glory',
    heroImageKeyword: 'fighter_jet',
    sections: [
      {
        title: 'Air Superiority',
        content: 'Our fleet of multi-role fighter jets ensures dominance of the skies, neutralizing enemy aircraft before they threaten our borders.',
        imageKeyword: 'jet_formation'
      },
      {
        title: 'Strategic Airlift',
        content: 'Heavy transport aircraft capable of deploying tanks, troops, and humanitarian aid to any corner of the globe within hours.',
        imageKeyword: 'helicopter'
      },
      {
        title: 'Air Defense Systems',
        content: 'A multi-layered shield of surface-to-air missiles and radar networks protecting national airspace from aerial threats.',
        listItems: ['Long-range Radar', 'Interceptor Missiles', 'Drone Defense Dome'],
        imageKeyword: 'fighter_jet'
      }
    ]
  },
  'secret-ops': {
    id: 'secret-ops',
    title: 'Secret Ops',
    heroTitle: 'Classified Operations',
    heroSubtitle: 'Beyond the Frontlines',
    heroImageKeyword: 'night_vision',
    sections: [
      {
        title: 'Covert Infiltration',
        content: '[REDACTED] units specialized in deep-penetration missions behind enemy lines for sabotage and high-value target acquisition.',
        imageKeyword: 'soldier_silhouette'
      },
      {
        title: 'Cyber Warfare Division',
        content: 'The digital battlefield is active 24/7. Our cyber warriors defend critical infrastructure and launch offensive counter-measures.',
        listItems: ['Network Defense', 'Digital Espionage', 'Information Warfare'],
        imageKeyword: 'cyber_security'
      },
      {
        title: 'Black Ops',
        content: 'Deniable operations conducted by non-uniformed personnel to safeguard national interests without diplomatic fallout.',
        imageKeyword: 'night_vision'
      }
    ]
  },
  'special-forces': {
    id: 'special-forces',
    title: 'Special Forces',
    heroTitle: 'Elite Commandos',
    heroSubtitle: 'Silent. Swift. Deadly.',
    heroImageKeyword: 'commando',
    sections: [
      {
        title: 'Training of Special Forces',
        content: 'The selection process is grueling. Only the fittest physically and mentally survive the "Hell Week" and advanced tactical courses.',
        imageKeyword: 'training'
      },
      {
        title: 'Specialized Weapons',
        content: 'Equipped with state-of-the-art weaponry, night vision optics, and suppressed firearms for covert operations.',
        imageKeyword: 'commando'
      },
      {
        title: 'Notable Operations',
        content: 'Classified missions that have safeguarded national security against high-value targets.',
        imageKeyword: 'soldier_silhouette'
      }
    ]
  },
  equipment: {
    id: 'equipment',
    title: 'Equipment',
    heroTitle: 'Arsenal of Defense',
    heroSubtitle: 'Modern Warfare Technology',
    heroImageKeyword: 'tank',
    sections: [
      {
        title: 'Armored Tanks',
        content: 'Main Battle Tanks (MBTs) capable of engaging enemies at long range with precision fire and composite armor protection.',
        imageKeyword: 'armor'
      },
      {
        title: 'Military Aircraft',
        content: 'Air superiority fighters and tactical transport aircraft ensure dominance of the skies.',
        imageKeyword: 'fighter_jet'
      },
      {
        title: 'Surveillance Drones',
        content: 'Unmanned Aerial Vehicles (UAVs) provide real-time intelligence and reconnaissance capabilities.',
        imageKeyword: 'robot'
      }
    ]
  },
  training: {
    id: 'training',
    title: 'Training',
    heroTitle: 'Forging Warriors',
    heroSubtitle: 'Discipline & Excellence',
    heroImageKeyword: 'pushups',
    sections: [
      {
        title: 'Military Training Stages',
        content: 'From basic boot camp to specialized trade training, every soldier undergoes rigorous preparation.',
        imageKeyword: 'obstacle'
      },
      {
        title: 'Combat & Tactical Training',
        content: 'Live-fire exercises, urban warfare simulations, and jungle survival courses.',
        imageKeyword: 'training'
      },
      {
        title: 'Cadet Life',
        content: 'Life at the academy is a blend of academic study, physical conditioning, and character building.',
        imageKeyword: 'recruit'
      }
    ]
  },
  recruitment: {
    id: 'recruitment',
    title: 'Recruitment',
    heroTitle: 'Join the Forces',
    heroSubtitle: 'A Career of Pride',
    heroImageKeyword: 'recruit',
    sections: [
      {
        title: 'Eligibility Criteria',
        content: 'Check your age, educational qualification, and physical standards before applying.',
        listItems: ['Age: 17.5 - 23 years', 'Height: Minimum 170cm', 'Education: High School Diploma / Degree'],
        imageKeyword: 'recruit'
      },
      {
        title: 'Entry Schemes',
        content: 'Multiple pathways available: Technical Entry, General Duty, Officer Training Academy, and Short Service Commission.',
        imageKeyword: 'training'
      },
      {
        title: 'Online Registration Guide',
        content: 'Visit our official portal to submit your application and track your status.',
        imageKeyword: 'office'
      }
    ]
  },
  ranks: {
    id: 'ranks',
    title: 'Ranks',
    heroTitle: 'Chain of Command',
    heroSubtitle: 'Structure & Hierarchy',
    heroImageKeyword: 'medal',
    sections: [
      {
        title: 'Commissioned Officer Ranks',
        content: 'Leaders of the force, from Lieutenants to Generals, responsible for strategy and command.',
        listItems: ['Lieutenant', 'Captain', 'Major', 'Colonel', 'Brigadier', 'General'],
        imageKeyword: 'medal'
      },
      {
        title: 'Junior Commissioned Officers',
        content: 'The bridge between officers and soldiers, holding critical operational roles.',
        imageKeyword: 'commando'
      },
      {
        title: 'Rank Insignias',
        content: 'Understanding the stars, stripes, and emblems worn on the uniform.',
        imageKeyword: 'medal'
      }
    ]
  },
  galleries: {
    id: 'galleries',
    title: 'Galleries',
    heroTitle: 'Visual Archive',
    heroSubtitle: 'Moments of Glory',
    heroImageKeyword: 'gallery',
    sections: [
      {
        title: 'Soldier Photo Gallery',
        content: 'Candid moments from the frontlines and barracks.',
        imageKeyword: 'soldiers_smiling'
      },
      {
        title: 'Weapons & Vehicles',
        content: 'High-resolution images of our mechanized assets.',
        imageKeyword: 'helicopter'
      },
      {
        title: 'Ceremonial Parade',
        content: 'The pomp and show of our annual parades and displays.',
        imageKeyword: 'parade'
      }
    ]
  },
  news: {
    id: 'news',
    title: 'News',
    heroTitle: 'Official Bulletins',
    heroSubtitle: 'Stay Informed',
    heroImageKeyword: 'newspaper',
    sections: [
      {
        title: 'Press Releases',
        content: 'Official statements regarding recent operations and policy changes.',
        imageKeyword: 'newspaper'
      },
      {
        title: 'Defence Tech News',
        content: 'Updates on the latest acquisitions and indigenous defense production.',
        imageKeyword: 'robot'
      },
      {
        title: 'Public Announcements',
        content: 'Important notices for civilians regarding restricted areas and recruitment rallies.',
        imageKeyword: 'military'
      }
    ]
  },
  academics: {
    id: 'academics',
    title: 'Academics',
    heroTitle: 'Strategic Studies',
    heroSubtitle: 'Intellectual Warfare',
    heroImageKeyword: 'library',
    sections: [
      {
        title: 'Defence Research Papers',
        content: 'Scholarly articles on geopolitics, military history, and future warfare trends.',
        imageKeyword: 'library'
      },
      {
        title: 'War Analysis',
        content: 'Deep dives into historical battles and modern tactical scenarios.',
        imageKeyword: 'map'
      },
      {
        title: 'Military Strategy',
        content: 'Educational resources for officers and defense enthusiasts.',
        imageKeyword: 'library'
      }
    ]
  },
  veterans: {
    id: 'veterans',
    title: 'Veterans',
    heroTitle: 'Honoring Service',
    heroSubtitle: 'Support for Ex-Servicemen',
    heroImageKeyword: 'veteran',
    sections: [
      {
        title: 'Veteran Support Programs',
        content: 'Pension schemes, re-employment assistance, and housing support for our retired heroes.',
        imageKeyword: 'veteran'
      },
      {
        title: 'Health & Welfare',
        content: 'Comprehensive medical coverage for veterans and their dependents.',
        imageKeyword: 'veteran'
      },
      {
        title: 'Retired Personnel Stories',
        content: 'Inspirational tales from those who served in past conflicts.',
        imageKeyword: 'medal'
      }
    ]
  },
  martyrs: {
    id: 'martyrs',
    title: 'Martyrs',
    heroTitle: 'The Supreme Sacrifice',
    heroSubtitle: 'Lest We Forget',
    heroImageKeyword: 'memorial',
    sections: [
      {
        title: 'Hall of Heroes',
        content: 'A digital memorial dedicated to the brave souls who laid down their lives for the nation.',
        imageKeyword: 'memorial'
      },
      {
        title: 'Tribute Wall',
        content: 'Leave a message of gratitude for the fallen soldiers.',
        imageKeyword: 'flowers'
      },
      {
        title: 'Stories of Bravery',
        content: 'Accounts of extraordinary courage under fire that earned the highest gallantry awards.',
        imageKeyword: 'medal'
      }
    ]
  },
  women: {
    id: 'women',
    title: 'Women in Forces',
    heroTitle: 'Breaking Barriers',
    heroSubtitle: 'Strength Has No Gender',
    heroImageKeyword: 'woman_soldier',
    sections: [
      {
        title: 'Women Leadership',
        content: 'Female officers leading battalions and specialized units with distinction.',
        imageKeyword: 'woman_soldier'
      },
      {
        title: 'Women in Combat Roles',
        content: 'The expansion of roles for women in fighter aviation, artillery, and infantry.',
        imageKeyword: 'pilot'
      },
      {
        title: 'Achievements',
        content: 'Record-breaking feats in mountaineering, marksmanship, and peacekeeping.',
        imageKeyword: 'woman_soldier'
      }
    ]
  },
  events: {
    id: 'events',
    title: 'Events',
    heroTitle: 'Calendar',
    heroSubtitle: 'Tradition & Celebration',
    heroImageKeyword: 'parade',
    sections: [
      {
        title: 'Annual Army Day',
        content: 'A day of parades and medal ceremonies to honor the founding of our force.',
        imageKeyword: 'parade'
      },
      {
        title: 'Training Exhibitions',
        content: 'Public demonstrations of combat skills and equipment capabilities.',
        imageKeyword: 'training'
      },
      {
        title: 'Ceremonies',
        content: 'Wreath-laying ceremonies at war memorials.',
        imageKeyword: 'memorial'
      }
    ]
  },
  'border-security': {
    id: 'border-security',
    title: 'Border Security',
    heroTitle: 'The First Line',
    heroSubtitle: 'Vigilance at the Frontier',
    heroImageKeyword: 'fence',
    sections: [
      {
        title: 'Surveillance Systems',
        content: 'Thermal imaging, motion sensors, and smart fencing to prevent infiltration.',
        imageKeyword: 'binoculars'
      },
      {
        title: 'Ground Deployment',
        content: 'Forward posts and bunkers manned 24/7 in extreme weather conditions.',
        imageKeyword: 'binoculars'
      },
      {
        title: 'Patrol Units',
        content: 'Foot and vehicle patrols ensuring the sanctity of the borderline.',
        imageKeyword: 'soldier_silhouette'
      }
    ]
  },
  tech: {
    id: 'tech',
    title: 'Defence Tech',
    heroTitle: 'Future Warfare',
    heroSubtitle: 'Innovation & Modernization',
    heroImageKeyword: 'cyber',
    sections: [
      {
        title: 'Weapon Modernization',
        content: 'Upgrading legacy systems with smart targeting and modular components.',
        imageKeyword: 'armor'
      },
      {
        title: 'AI & Robotics',
        content: 'Autonomous ground vehicles and AI-driven threat analysis systems.',
        imageKeyword: 'robot'
      },
      {
        title: 'Future Innovations',
        content: 'Directed energy weapons, hypersonic missiles, and quantum encryption.',
        imageKeyword: 'cyber'
      }
    ]
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    heroTitle: 'Get in Touch',
    heroSubtitle: 'Headquarters & Helplines',
    heroImageKeyword: 'phone',
    sections: [
      {
        title: 'Contact Headquarters',
        content: 'Ministry of Defence, Gate 4, Capital City. Email: hq@zsos-army.mil',
        imageKeyword: 'office'
      },
      {
        title: 'Helpline Numbers',
        content: 'Recruitment: 1800-ZSOS-JOIN | General Enquiry: 1800-DEFENCE',
        imageKeyword: 'phone'
      },
      {
        title: 'Grievance Cell',
        content: 'A dedicated portal for addressing public and personnel grievances.',
        imageKeyword: 'office'
      }
    ]
  },
  donation: {
    id: 'donation',
    title: 'Donation',
    heroTitle: 'Support the Cause',
    heroSubtitle: 'Welfare Fund',
    heroImageKeyword: 'handshake',
    sections: [
      {
        title: 'Donate for Families',
        content: 'Contributions go directly to the welfare of widows and children of martyrs.',
        imageKeyword: 'flowers'
      },
      {
        title: 'Become a Volunteer',
        content: 'Join our civil support groups to assist in organizing events and welfare drives.',
        imageKeyword: 'military'
      },
      {
        title: 'NGO Collaboration',
        content: 'Partnering with certified organizations to rehabilitate disabled veterans.',
        imageKeyword: 'handshake'
      }
    ]
  },
  careers: {
    id: 'careers',
    title: 'Careers',
    heroTitle: 'Civilian Careers',
    heroSubtitle: 'Work with the Best',
    heroImageKeyword: 'office',
    sections: [
      {
        title: 'Defence Internships',
        content: 'Opportunities for engineering and medical students to intern at defense labs.',
        imageKeyword: 'library'
      },
      {
        title: 'Career Growth',
        content: 'Long-term civilian roles in logistics, administration, and research.',
        imageKeyword: 'office'
      },
      {
        title: 'Student Programs',
        content: 'Summer camps and leadership workshops for university students.',
        imageKeyword: 'training'
      }
    ]
  }
};