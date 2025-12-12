// Image mapping for AI-generated military images
export const IMAGE_MAP: Record<string, string> = {
    // Home page
    'military': '/images/military_hero_1765558877414.png',
    'tank': '/images/tank_battlefield_1765558897699.png',
    'cyber_security': '/images/cyber_security_operations_1765558913777.png',

    // About page
    'history': '/images/military_hero_1765558877414.png',
    'map': '/images/military_map_strategy_1765558934139.png',

    // Missions
    'mission': '/images/military_hero_1765558877414.png',
    'swat': '/images/commando_elite_soldier_1765559105514.png',

    // Navy
    'navy_ship': '/images/navy_aircraft_carrier_1765558963291.png',
    'aircraft_carrier': '/images/navy_aircraft_carrier_1765558963291.png',
    'diver': '/images/navy_diver_commando_1765559001375.png',

    // Airforce
    'fighter_jet': '/images/fighter_jet_sky_1765559019636.png',
    'jet_formation': '/images/jet_formation_1765559046993.png',

    // Secret Operations
    'night_vision': '/images/night_vision_operations_1765559069472.png',
    'soldier_silhouette': '/images/soldier_silhouette_stealth_1765559086924.png',

    // Special Forces
    'commando': '/images/commando_elite_soldier_1765559105514.png',
    'training': '/images/special_forces_training_1765559132574.png',

    // Equipment
    'armor': '/images/armored_vehicles_1765559166569.png',

    // Training
    'pushups': '/images/special_forces_training_1765559132574.png',
    'obstacle': '/images/obstacle_course_training_1765559147775.png',

    // Recruitment
    'recruit': '/images/special_forces_training_1765559132574.png',

    // Ranks
    'medal': '/images/military_hero_1765558877414.png',

    // Galleries
    'gallery': '/images/military_hero_1765558877414.png',
    'soldiers_smiling': '/images/commando_elite_soldier_1765559105514.png',
    'helicopter': '/images/fighter_jet_sky_1765559019636.png',

    // News
    'newspaper': '/images/military_hero_1765558877414.png',

    // Academics
    'library': '/images/military_map_strategy_1765558934139.png',

    // Veterans
    'veteran': '/images/commando_elite_soldier_1765559105514.png',

    // Martyrs
    'memorial': '/images/war_memorial_1765559207570.png',
    'flowers': '/images/flowers_memorial_tribute_1765559225999.png',

    // Women in Forces
    'woman_soldier': '/images/woman_soldier_portrait_1765559241250.png',
    'pilot': '/images/female_pilot_1765559261878.png',

    // Events
    'parade': '/images/military_hero_1765558877414.png',

    // Border Security
    'fence': '/images/military_hero_1765558877414.png',
    'binoculars': '/images/soldier_silhouette_stealth_1765559086924.png',

    // Defence Tech
    'cyber': '/images/cyber_security_operations_1765558913777.png',
    'robot': '/images/robot_military_tech_1765559182445.png',

    // Contact
    'phone': '/images/military_map_strategy_1765558934139.png',

    // Donation
    'handshake': '/images/military_hero_1765558877414.png',

    // Careers
    'office': '/images/military_map_strategy_1765558934139.png',
};

// Helper function to get image path
export const getImagePath = (keyword: string): string => {
    return IMAGE_MAP[keyword] || IMAGE_MAP['military'];
};
