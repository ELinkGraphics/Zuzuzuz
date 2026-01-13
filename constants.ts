
import { Character } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'family-photo',
    name: 'Little Tigers: The Adventure Begins',
    nameAm: 'ትናንሽ ነብሮች፡ ጀብዱ ይጀምራል',
    role: 'Special Edition Book',
    roleAm: 'ልዩ እትም መጽሐፍ',
    gradient: 'from-[#22c55e] to-[#15803d]',
    image: 'https://littletigersbooks.com/img/family.png',
    stats: { power: 0, agility: 0, intelligence: 0 },
    bio: 'Join Zuzu and the rest of the Little Tigers in their first grand adventure! This beautifully illustrated hardcover book takes you deep into the heart of the jungle, teaching lessons of courage, family, and friendship.',
    bioAm: 'ከዙዙ እና ከሌሎች ትናንሽ ነብሮች ጋር በመሆን የመጀመሪያውን ታላቅ ጀብዱ ይጀምሩ! ይህ በሚያምር ሁኔታ በምስል የተደገፈ መጽሐፍ ወደ ጫካው ጥልቅ ልብ ይወስድዎታል፣ የድፍረት፣ የቤተሰብ እና የጓደኝነት ትምህርቶችን ያስተምራል።',
    voiceActor: 'Hardcover Edition',
    isFamilyCard: true,
    price: '$24.99',
    pages: 48,
    ageRange: '3-8 Years',
    publisher: 'Little Tigers Publishing',
    publisherAm: 'ትናንሽ ነብሮች ህትመት'
  },
  {
    id: '1',
    name: 'Zuzu',
    nameAm: 'ዙዙ',
    role: 'Little Tigers',
    roleAm: 'ትናንሽ ነብሮች',
    gradient: 'from-[#ff4b5c] to-[#e63946]',
    image: 'https://littletigersbooks.com/img/zuzu.png',
    video: 'https://littletigersbooks.com/img/zuzudance.mp4',
    stats: { power: 65, agility: 90, intelligence: 80 },
    bio: 'Zuzu is a brave and curious character from the Little Tigers series. With a heart of gold and a spirit of adventure, Zuzu is always ready to explore new worlds and help friends along the way.',
    bioAm: 'ዙዙ ከትናንሽ ነብሮች ተከታታይ ደፋር እና የማወቅ ጉጉት ያለው ገጸ-ባህሪ ነው። በወርቅ ልብ እና በጀብደኝነት መንፈስ፣ ዙዙ ሁል ጊዜ አዳዲስ ዓለሞችን ለማሰስ እና ጓደኞችን ለመርዳት ዝግጁ ነው።',
    voiceActor: 'Little Tigers'
  },
  {
    id: '2',
    name: 'Emama Selam',
    nameAm: 'እማማ ሰላም',
    role: 'Little Tigers',
    roleAm: 'ትናንሽ ነብሮች',
    gradient: 'from-[#fbbf24] to-[#d97706]',
    image: 'https://littletigersbooks.com/img/Mom%20-%20Emama%20Selam%20(1).png',
    stats: { power: 45, agility: 50, intelligence: 100 },
    bio: 'Emama Selam is the heart and soul of the Little Tigers family. Known for her wisdom, kindness, and unwavering support, she guides the young tigers through their many adventures with love and patience.',
    bioAm: 'እማማ ሰላም የትናንሽ ነብሮች ቤተሰብ ልብ እና ነፍስ ናት። በጥበቧ፣ በደግነቷ እና በማያወላውል ድጋፏ የምትታወቀው እሷ፣ ትናንሽ ነብሮችን በብዙ ጀብዱዎቻቸው በፍቅር እና በትዕግስት ትመራለች።',
    voiceActor: 'Little Tigers'
  },
  {
    id: '3',
    name: 'Ababa mallo',
    nameAm: 'አባባ ማሎ',
    role: 'Little Tigers',
    roleAm: 'ትናንሽ ነብሮች',
    gradient: 'from-[#3a86ff] to-[#023e8a]',
    image: 'https://littletigersbooks.com/img/Dad%20-%20Ababa%20mallo%20(1).png',
    stats: { power: 95, agility: 60, intelligence: 85 },
    bio: 'Ababa mallo is the strong and protective father figure of the Little Tigers family. He provides strength, security, and shares important life lessons with his family as they navigate the wonders of their world.',
    bioAm: 'አባባ ማሎ የትናንሽ ነብሮች ቤተሰብ ጠንካራ እና ጠባቂ የአባት ምስል ነው። ቤተሰቡ የአለማቸውን ድንቆች በሚቃኙበት ጊዜ ጥንካሬን፣ ደህንነትን ይሰጣል እንዲሁም ጠቃሚ የህይወት ትምህርቶችን ያካፍላል።',
    voiceActor: 'Little Tigers'
  },
  {
    id: '4',
    name: 'Ababu',
    nameAm: 'አባቡ',
    role: 'Little Tigers',
    roleAm: 'ትናንሽ ነብሮች',
    gradient: 'from-[#2ec4b6] to-[#011627]',
    image: 'https://littletigersbooks.com/img/Friend%20-%20ababu%20(1).png',
    stats: { power: 70, agility: 95, intelligence: 88 },
    bio: 'Ababu is the energetic and loyal friend in the Little Tigers universe. With lightning-fast reflexes and a playful spirit, Ababu brings joy and excitement to every journey the tigers undertake.',
    bioAm: 'አባቡ በትናንሽ ነብሮች ዓለም ውስጥ ጉልበት ያለው እና ታማኝ ጓደኛ ነው። በመብረቅ ፍጥነት እና በጨዋታ መንፈስ፣ አባቡ ነብሮች በሚያደርጉት እያንዳንዱ ጉዞ ላይ ደስታን እና ደስታን ያመጣል።',
    voiceActor: 'Little Tigers'
  },
  {
    id: '5',
    name: 'Mimi',
    nameAm: 'ሚሚ',
    role: 'Little Tigers',
    roleAm: 'ትናንሽ ነብሮች',
    gradient: 'from-[#9b5de5] to-[#f15bb5]',
    image: 'https://littletigersbooks.com/img/Sister%20-%20Mimi%20(1).png',
    stats: { power: 55, agility: 88, intelligence: 94 },
    bio: 'Mimi is the clever and energetic sister in the Little Tigers family. She is known for her sharp wit and imaginative ideas, often leading her siblings on creative quests through the jungle and beyond.',
    bioAm: 'ሚሚ በትናንሽ ነብሮች ቤተሰብ ውስጥ ብልህ እና ጉልበት ያላት እህት ናት። በፈጣን አስተሳሰቧ እና በምናባዊ ሀሳቦቿ ትታወቃለች፣ ብዙ ጊዜ ወንድሞቿን እና እህቶቿን በጫካ ውስጥ እና ከዚያም በላይ በፈጠራ ፍለጋዎች ትመራለች።',
    voiceActor: 'Little Tigers'
  },
  {
    id: '6',
    name: 'Bewiqetu',
    nameAm: 'በእውቀቱ',
    role: 'Little Tigers',
    roleAm: 'ትናንሽ ነብሮች',
    gradient: 'from-[#06d6a0] to-[#118ab2]',
    image: 'https://littletigersbooks.com/img/Bewiqetu%20(1).png',
    stats: { power: 82, agility: 75, intelligence: 92 },
    bio: 'Bewiqetu is the brilliant and thoughtful explorer of the Little Tigers crew. Known for his keen observation and problem-solving skills, he helps the group navigate through the densest parts of the jungle with ease.',
    bioAm: 'በእውቀቱ የትናንሽ ነብሮች ቡድን ብልህ እና አሳቢ አሳሽ ነው። በንቁ ታዛቢነቱ እና ችግር ፈቺ ክህሎቱ የሚታወቀው እሱ፣ ቡድኑ በጫካው ጥቅጥቅ ያሉ ክፍሎች ውስጥ በቀላሉ እንዲጓዝ ይረዳል።',
    voiceActor: 'Little Tigers'
  }
];

export const LOADING_MESSAGES = [
  "Gathering the Tigers...",
  "Sharpening Claws...",
  "Calibrating Adventure Levels...",
  "Enhancing 3D Fur...",
  "Rendering Tiger Magic...",
  "Preparing the Pride..."
];