import { nanoid } from "nanoid";
import { Actors, ImageType, StoriesCategories, Story } from "./model";

export const stories: Story[] = [
  {
    id: "0",
    title: "Ronalda",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Ronalda was a beautiful black cat with green eyes. She loved to play and explore, and she was always the first to find the best hiding spots. Her family loved her dearly, and she was always the center of attention.\n\nOne day, Ronalda went exploring a little too far and got lost. She searched and searched for a way back home, but she couldn't find her way. She was getting tired and hungry, and she wasn't sure what to do.\n\nFinally, Ronalda came across a kind-looking woman who helped her find her way home. ",
  },
  {
    id: "1",
    title: "Whiskers",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Whiskers was a mischievous tabby cat with long, white whiskers. He loved to chase after birds and climb trees. His playful nature always kept his owners entertained.\n\nOne sunny afternoon, Whiskers spotted a little bird perched on a branch. He couldn't resist the temptation and pounced, but the bird flew away just in time. Whiskers was left looking up at the sky, dreaming of his next adventure.",
  },
  {
    id: "2",
    title: "Midnight",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/14206402/pexels-photo-14206402.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Midnight was a sleek black cat with bright yellow eyes. She was known for her mysterious and independent nature. Every night, she would sneak out of the house and explore the neighborhood.\n\nOne night, Midnight encountered a group of stray cats. They were friendly and invited her to join their little cat gang. Midnight hesitated at first, but she decided to give it a try. Together, they roamed the streets, looking for hidden treasures and enjoying the freedom of the night.",
  },
  {
    id: "3",
    title: "Luna",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Luna was a beautiful white cat with mesmerizing blue eyes. She was elegant and graceful, always moving with a sense of purpose. Luna enjoyed spending her days basking in the sunlight and watching birds from the window sill.\n\nOne evening, Luna spotted a family of birds building a nest near her favorite tree. She was captivated by their intricate nest-building skills and spent hours observing their activities. Luna learned a lot about the birds' behavior and became an expert bird watcher.",
  },
  {
    id: "4",
    title: "Max",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/12623663/pexels-photo-12623663.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Max was a curious and adventurous orange tabby cat. He had a knack for getting into all sorts of mischief. Max loved exploring the great outdoors and would often disappear for hours on his expeditions.\n\nOne day, Max stumbled upon a hidden path in the woods. He followed it with excitement, not knowing where it would lead. The path took him to a beautiful meadow filled with colorful flowers and butterflies. Max spent the rest of the day frolicking in the meadow, enjoying the wonders of nature.",
  },
  {
    id: "5",
    title: "Bella",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/14731737/pexels-photo-14731737.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Bella was a small and delicate calico cat with a sweet disposition. She had a gentle nature and loved to be cuddled by her owners. Bella was happiest when she was surrounded by love and affection.\n\nOne stormy night, Bella found a tiny kitten meowing outside her house. The poor kitten was scared and hungry. Bella's heart melted, and she took the little one under her wing. She became a caring and nurturing mother figure, ensuring the kitten felt safe and loved.",
  },
  {
    id: "6",
    title: "Simba",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Simba was a majestic Maine Coon with a regal appearance and a gentle heart. He was known for his impressive size and luxurious fur. Simba loved to spend his days lounging in the sun and receiving royal treatment from his devoted family.\n\nOne day, a butterfly caught Simba's attention with its vibrant colors. He couldn't resist the temptation and embarked on a playful chase through the garden. Simba's graceful movements amazed everyone who watched, and he became the true king of the backyard.",
  },

  {
    id: "7",
    title: "Coco",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/236660/pexels-photo-236660.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Coco was a playful and energetic Siamese cat with striking blue eyes. She had a mischievous personality and loved to entertain her owners with her acrobatic tricks. Coco's agility and nimbleness were unmatched, making her the star of every gathering.\n\nOne evening, Coco discovered an old box filled with ribbons and balls of yarn. Inspired by her findings, she organized a spectacular feline circus. Coco performed daring jumps and twirls, captivating everyone's attention and earning a standing ovation from her delighted audience.",
  },

  {
    id: "8",
    title: "Mittens",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Mittens was a sweet and gentle gray tabby cat with adorable white paws. She had a calm and nurturing presence, always comforting those around her. Mittens enjoyed spending her time curled up on her favorite armchair, providing warmth and companionship.\n\nOne winter's night, a stray kitten appeared at Mittens' doorstep, shivering from the cold. Without hesitation, Mittens welcomed the little one into her home. She taught the kitten valuable life lessons, such as the joy of chasing snowflakes and the comfort of a cozy blanket.",
  },

  {
    id: "9",
    title: "Shadow",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1005174/pexels-photo-1005174.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Shadow was a mysterious black and white cat with a playful and mischievous nature. He had a talent for sneaking around unnoticed and surprising his family members. Shadow's antics brought laughter and excitement to everyone's lives.\n\nOne day, Shadow discovered a hidden stash of catnip in a secret corner of the house. Unable to resist its allure, he rolled and tumbled in a euphoric state of bliss. Shadow's hilarious and ecstatic behavior became the talk of the town, and he gained a reputation as the party animal among the local feline community.",
  },

  {
    id: "10",
    title: "Sophie",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1323326/cat-pet-pussy-animal-1323326.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Sophie was an elegant and sophisticated Persian cat with a fluffy coat that demanded attention. She had a refined taste and enjoyed the finer things in life. Sophie loved to be pampered and treated like a queen.\n\nOne day, Sophie's family decided to throw her a birthday party fit for royalty. The house was adorned with luxurious decorations, and a banquet of gourmet treats was prepared. Sophie received gifts and affection from her adoring subjects, making her feel truly cherished and loved on her special day.",
  },
  {
    id: "11",
    title: "Oliver",
    category: StoriesCategories.ANIMALS,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/5441459/pexels-photo-5441459.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Oliver was a fluffy orange cat with a playful personality. He loved to chase after toys and snuggle up with his owners. Oliver was always full of energy and brought joy to everyone around him.\n\nOne day, Oliver discovered a secret passage behind a bookshelf. It led him to a hidden room filled with old toys and cozy blankets. Oliver claimed the room as his own secret hideaway, spending hours exploring and napping in his newfound sanctuary.",
  },
  {
    id: "12",
    title: "The Unlikely Duo",
    category: StoriesCategories.FRIENDSHIP,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/47349/texture-zebra-stripes-47349.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "In a vast savannah, there lived a giraffe named Gerald and a zebra named Zach. They were an unlikely duo, with their differences in size and appearance. Despite that, they became the best of friends. Together, they embarked on thrilling adventures, exploring the savannah and facing various challenges. Their bond of friendship taught them the true meaning of acceptance and loyalty.",
  },
  {
    id: "13",
    title: "The Secret Realm",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "In a world where magic was real, there existed a secret realm hidden from human eyes. This realm was home to mystical creatures and ancient sorcery. One day, a young girl named Emily stumbled upon a hidden portal that transported her to the secret realm. There, she discovered her own magical abilities and embarked on an extraordinary adventure to save the realm from an evil sorcerer.",
  },
  {
    id: "14",
    title: "The Enchanted Rose",
    category: StoriesCategories.LOVE,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/967396/pexels-photo-967396.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Once upon a time, in a magical kingdom, there was a beautiful princess named Isabella. She was kind-hearted and loved by everyone in the kingdom. One day, a mysterious stranger presented her with an enchanted rose. The rose had the power to grant true love to anyone who believed in its magic. Isabella cared for the rose with all her heart, hoping that one day her true love would find her.",
  },
  {
    id: "15",
    title: "The Magical Forest",
    category: StoriesCategories.NATURE,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1125265/pexels-photo-1125265.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Deep in the heart of a lush forest, there existed a magical realm filled with enchanting creatures and breathtaking beauty. The trees whispered secrets, and the flowers bloomed with vibrant colors. One day, a curious child named Lily discovered the hidden entrance to the magical forest. She embarked on a thrilling adventure, encountering talking animals, friendly fairies, and discovering the true power of nature.",
  },
  {
    id: "16",
    title: "The Courageous Knight",
    category: StoriesCategories.COURAGE,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/45217/monument-golden-rider-dresden-august-45217.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "In a kingdom plagued by darkness, a young knight named Ethan rose to the challenge of restoring light and hope. Armed with a loyal steed and a heart full of bravery, Ethan embarked on a perilous journey. Along the way, he faced terrifying creatures, treacherous paths, and his own fears. Through his unwavering courage, Ethan proved that even the smallest light could dispel the darkest shadows.",
  },
  {
    id: "17",
    title: "The Mischievous Fairy",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2",
    },
    content:
      "Tinkerbell was a mischievous fairy with a twinkle in her eye and a sprinkle of magic in her hands. She lived in a world where every whisper of the wind carried secrets and every flower held a secret door. Tinkerbell's playful tricks brought joy to all who encountered her, but sometimes her mischief got her into trouble. Through her adventures, Tinkerbell learned the importance of using her magic wisely and thinking of others.",
  },
  {
    id: "20",
    title: "The Mysterious Key",
    category: StoriesCategories.MYSTERY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/612800/pexels-photo-612800.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a dusty attic, young Emily discovered a small, golden key. She had no idea what it unlocked, but she was determined to find out. The key led her on a thrilling adventure through hidden passages, ancient maps, and long-forgotten secrets. As Emily unraveled the mystery, she discovered the key to unlocking her own courage and resilience."
  },
  {
    id: "26",
    title: "The Secret Door",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/13228271/pexels-photo-13228271.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "Hidden within an old oak tree stood a secret door, known only to the woodland creatures. One day, a young rabbit named Oliver stumbled upon it. With curiosity in his heart, Oliver turned the key and stepped into a world of wonder. Behind the door, he found a magical realm filled with talking animals, sparkling rivers, and endless adventures. Oliver's life would never be the same again."
  },
  {
    id: "27",
    title: "The Brave Astronaut",
    category: StoriesCategories.EXPLORATION,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/7169853/pexels-photo-7169853.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In the vast expanse of space, a brave astronaut named Sarah embarked on a mission to explore the unknown. She floated weightlessly among the stars, discovering new galaxies and encountering alien civilizations. Sarah's courage and determination inspired generations to dream big and reach for the stars. Her journey reminded us that the universe is full of endless possibilities waiting to be explored."
  },
  {
    id: "28",
    title: "The Dancing Flames",
    category: StoriesCategories.MAGIC,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/21490/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a forgotten village, a young girl named Mia discovered her unique ability to control fire. With a wave of her hand, flames danced to her command. Mia used her gift to bring warmth, light, and joy to those around her. But as her powers grew, she faced a choice—to use them for good or let the flames consume her. Through self-discovery, Mia learned that true magic lies not in the flames but in the goodness of her heart."
  },
  {
    id: "29",
    title: "The Cursed Kingdom",
    category: StoriesCategories.FAIRY_TALE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/3061171/pexels-photo-3061171.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "Once upon a time, in a faraway kingdom, a wicked curse fell upon the land. The skies turned dark, and the people were trapped in an eternal sleep. Only a true hero could break the curse. A brave young prince named Oliver embarked on a perilous quest to save his kingdom. Along the way, he faced fearsome creatures, daunting challenges, and his own doubts. With unwavering determination, Oliver shattered the curse and restored happiness to the kingdom."
  },
  {
    id: "30",
    title: "The Talking Trees",
    category: StoriesCategories.FRIENDSHIP,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a magical forest, a lonely girl named Sophia discovered that the trees could talk. Each tree had a unique personality and wisdom to share. As Sophia spent time with her newfound friends, she learned the importance of listening, empathy, and the true meaning of friendship. Together, they created a harmonious world where humans and nature coexisted in perfect harmony."
  },
  {
    id: "32",
    title: "The Rainbow Unicorn",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/5189975/pexels-photo-5189975.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "Deep in the enchanted forest, a young girl named Lily discovered a rare and magical creature—the Rainbow Unicorn. With its vibrant colors and gentle spirit, the unicorn brought hope and joy to all who encountered it. Lily became the guardian of the unicorn, and together they embarked on a quest to spread love, kindness, and the beauty of diversity throughout the land."
  },
  {
    id: "33",
    title: "The Starry Night",
    category: StoriesCategories.NATURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1175136/pexels-photo-1175136.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "Under the shimmering starry sky, a young girl named Stella discovered the magic of nature. As she explored the wonders of the natural world, she learned about the delicate balance of ecosystems and the importance of preserving the environment. Stella became an advocate for nature, inspiring others to cherish and protect the beauty that surrounds us all."
  },
  {
    id: "36",
    title: "The Magical Pen",
    category: StoriesCategories.EDUCATIONAL,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a small town, a shy girl named Emma discovered a magical pen that brought her drawings to life. With every stroke, her creations leaped off the page and into the real world. Emma used her newfound power to teach others about history, science, and the power of imagination. The magical pen showed her that knowledge is a gift meant to be shared."
  },
  {
    id: "37",
    title: "The Courageous Firefighter",
    category: StoriesCategories.COURAGE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/36031/firefighter-fire-portrait-training.jpg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In the bustling city, a brave firefighter named Max risked his life to save others from blazing fires. With his unwavering courage and quick thinking, Max became a hero in the eyes of the community. Through his selfless acts, he taught everyone the importance of facing their fears and standing tall in the face of adversity."
  },
  {
    id: "38",
    title: "The Enchanted Garden",
    category: StoriesCategories.NATURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/4417496/pexels-photo-4417496.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a hidden corner of the world, a magical garden bloomed with vibrant colors and mystical creatures. A young girl named Lily discovered this enchanted sanctuary and became its guardian. Together with the fairies, talking animals, and gentle spirits, Lily learned the true essence of nature's beauty and the importance of nurturing our environment."
  },
  {
    id: "40",
    title: "The Wishing Stone",
    category: StoriesCategories.MAGIC,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/6687532/pexels-photo-6687532.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a faraway land, a young boy named Oliver stumbled upon a magical stone with the power to grant wishes. But as Oliver made his wishes, he soon learned that true happiness lies not in material possessions but in the love and joy he shared with others. With the help of his newfound friends, Oliver used the wishing stone to make the world a better place for everyone."
  },
  {
    id: "41",
    title: "The Little Explorer",
    category: StoriesCategories.EXPLORATION,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/841286/pexels-photo-841286.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a tiny village nestled in the mountains, a young girl named Maya dreamed of exploring the world beyond. Determined and full of curiosity, Maya set off on an epic adventure, encountering new cultures, breathtaking landscapes, and overcoming challenges along the way. Through her journey, Maya discovered the beauty of diversity and the transformative power of exploration."
  },
  {
    id: "42",
    title: "The Superpowered Squad",
    category: StoriesCategories.SUPERHEROES,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a world threatened by evil, a group of ordinary kids discovered extraordinary powers. With their unique abilities, they formed a superpowered squad dedicated to protecting the innocent and upholding justice. Each member brought their own strengths and weaknesses, teaching them the value of teamwork, empathy, and using their powers for the greater good."
  },
  {
    id: "43",
    title: "The Jolly Jester",
    category: StoriesCategories.HUMOR,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/6876577/pexels-photo-6876577.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In the kingdom of Merrymore, a jolly jester named Jack brought laughter to everyone's lives. With his witty jokes, funny tricks, and contagious joy, Jack taught the importance of finding humor in the simplest things. Through his performances, he reminded the kingdom that a smile is the greatest treasure and laughter is the best medicine."
  },
  {
    id: "44",
    title: "The Mysterious Amulet",
    category: StoriesCategories.MYSTERY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/6441617/pexels-photo-6441617.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a forgotten attic, a young girl named Emily discovered a dusty amulet that held ancient secrets. As Emily delved into its mysteries, she embarked on a thrilling adventure, unearthing hidden clues and solving cryptic puzzles. In the end, Emily learned that true power lies within oneself and that the greatest secrets are often found within."
  },
  {
    id: "45",
    title: "The Little Star",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1556654/pexels-photo-1556654.jpeg"
    },
    content: "In a magical realm, a little star named Stella fell from the sky and landed in a young girl's backyard. Together, they embarked on an enchanting journey through galaxies, meeting celestial beings and exploring the wonders of the universe. Through their adventure, Stella and the girl discovered the power of dreams, imagination, and the limitless possibilities that lie beyond our world."
  },
  {
    id: "46",
    title: "The Brave Princess",
    category: StoriesCategories.COURAGE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1637884/pexels-photo-1637884.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a kingdom ruled by tradition, a princess named Amelia defied expectations and ventured on a quest to save her people from an ancient curse. With her unwavering courage and determination, she faced daunting challenges, battled mythical creatures, and inspired her kingdom with her bravery. Amelia proved that true strength comes from within and that a single act of courage can change the course of history."
  },
  {
    id: "48",
    title: "The Magical Symphony",
    category: StoriesCategories.MUSIC,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/7095737/pexels-photo-7095737.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a bustling city, a young musician named Clara discovered a magical instrument that could bring music to life. With each note she played, the city transformed into a symphony of colors and melodies. Through her musical journey, Clara learned the power of self-expression, the beauty of collaboration, and how music has the ability to touch hearts and unite communities."
  },
  {
    id: "49",
    title: "The Lost Treasure",
    category: StoriesCategories.ADVENTURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/366791/pexels-photo-366791.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "Deep within a hidden island, a group of young explorers embarked on a thrilling quest to find a legendary treasure. Along the way, they encountered treacherous obstacles, solved ancient riddles, and forged unbreakable bonds of friendship. In their pursuit of the treasure, they discovered that the true riches lie not in material wealth but in the memories and experiences they shared."
  },
  {
    id: "50",
    title: "The Enchanted Forest",
    category: StoriesCategories.NATURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "Deep within an ancient forest, a young girl named Lily discovered a hidden realm filled with magical creatures. As she explored the enchanted forest, she learned the importance of preserving nature's beauty and living in harmony with the creatures that called it home. Lily became the guardian of the forest, ensuring its preservation for generations to come."
  },
  {
    id: "51",
    title: "The Unbreakable Bond",
    category: StoriesCategories.FRIENDSHIP,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a small village, three unlikely friends—a brave knight, a wise wizard, and a mischievous elf—embarked on a quest to save their land from darkness. Through their perilous journey, they faced challenges that tested their courage, wisdom, and loyalty. Together, they proved that true friendship knows no boundaries and that by supporting one another, they could overcome any obstacle."
  },
  {
    id: "52",
    title: "The Little Gardener",
    category: StoriesCategories.NATURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a bustling city, a young girl named Mia discovered the joy of gardening. With her green thumb and nurturing spirit, she transformed a neglected rooftop into a vibrant oasis. Through her love for plants and nature, Mia inspired her community to appreciate the beauty of the natural world and the importance of caring for our environment."
  },
  {
    id: "53",
    title: "The Magical Paintbrush",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/3615730/pexels-photo-3615730.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a world devoid of color, a young artist named Oliver discovered a magical paintbrush that brought his paintings to life. With each stroke, his imagination materialized into a vibrant reality. Through his artistic journey, Oliver learned the transformative power of creativity, the importance of self-expression, and the ability of art to inspire and uplift others."
  },
  {
    id: "55",
    title: "The Magical Circus",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1576303/pexels-photo-1576303.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a small town, a traveling circus arrived, bringing with it a world of wonder and enchantment. From acrobats and jugglers to magicians and clowns, the circus was a place where dreams came alive. As the townspeople experienced the magic under the big top, they discovered the joy of laughter, the thrill of excitement, and the power of imagination."
  },
  {
    id: "56",
    title: "The Secret Kingdom",
    category: StoriesCategories.ADVENTURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/5299414/pexels-photo-5299414.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "Hidden deep within the mountains, a secret kingdom thrived, protected by ancient guardians. When a curious young adventurer named Alex stumbled upon the kingdom, they were chosen to embark on a quest to save it from an impending darkness. With bravery and determination, Alex faced mythical creatures and solved ancient riddles to restore balance to the secret kingdom."
  },
  {
    id: "57",
    title: "The Little Inventor",
    category: StoriesCategories.EDUCATIONAL,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://media.istockphoto.com/id/117146176/es/foto/las-aventuras-en-mente-de-lectura.jpg?b=1&s=612x612&w=0&k=20&c=VdAUe1LisqJ7i9LiIHX7jjoKOAHAoqpJvvzvXRGpAws="
    },
    content: "In a world of imagination and gadgets, a young inventor named Leo had a mind full of ideas. With his trusty tools and creative spirit, he built incredible machines and contraptions that amazed everyone. Through Leo's inventions, children learned about science, engineering, and the power of curiosity, inspiring them to explore and create in their own unique ways."
  },
  {
    id: "58",
    title: "The Magical Forest",
    category: StoriesCategories.NATURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=360"
    },
    content: "Deep within a mystical forest, a group of woodland creatures lived in harmony with nature. From talking animals to whimsical fairies, the forest was a place where magic abounded. As the seasons changed, the creatures learned valuable lessons about growth, renewal, and the interconnectedness of all living things in the enchanting embrace of the magical forest."
  },
  {
    id: "59",
    title: "The Legendary Sword",
    category: StoriesCategories.ADVENTURE,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/7780214/pexels-photo-7780214.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a time of ancient kingdoms and valiant knights, a young squire named Arthur embarked on a quest to find the legendary sword Excalibur. Along the way, he encountered mythical creatures, faced daunting challenges, and discovered the true meaning of courage and honor. As Arthur wielded the mighty sword, he became a symbol of hope and inspired others to follow their own noble path."
  },
  {
    id: "61",
    title: "The Magical Music Box",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://media.istockphoto.com/id/467799452/es/foto/caja-musical-con-notas.jpg?b=1&s=612x612&w=0&k=20&c=Hc1E1qRpWPY3AZ2v_3MVYrG1ydzBz-wQRFAQWpwDRus="
    },
    content: "In a forgotten attic, a young girl named Emily stumbled upon a dusty music box that held a magical secret. Whenever she played its melodic tunes, she was transported to whimsical realms filled with wonder and enchantment. Through her musical journeys, Emily discovered her own inner harmony and shared the joy of music with others, spreading happiness and magic wherever she went."
  },
  {
    id: "63",
    title: "The Magical Time Machine",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In the attic of an old house, a pair of siblings discovered a mysterious time machine. With its magical powers, they traveled through different eras, witnessing historical events and meeting remarkable individuals. Through their time-traveling adventures, they gained a deeper appreciation for the past, a brighter perspective for the future, and cherished the importance of living in the present."
  },
  {
    id: "64",
    title: "The Kindness Kingdom",
    category: StoriesCategories.FRIENDSHIP,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/2486258/pexels-photo-2486258.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a faraway land, a kingdom thrived where kindness was the greatest power. Its inhabitants, both humans and magical beings, embraced compassion, empathy, and generosity. Through acts of kindness and the strength of their unity, they created a world where love and understanding prevailed, reminding everyone that a simple act of kindness could transform lives and make the world a better place."
  },
  {
    id: "67",
    title: "The Laughing Potion",
    category: StoriesCategories.HUMOR,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/7978810/pexels-photo-7978810.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a world where laughter was scarce, a young alchemist named Max concocted a special potion that could make even the grumpiest of people burst into laughter. With a mischievous grin, Max went on a hilarious adventure, spreading joy and giggles wherever they went. Through laughter, people discovered the healing power of humor and the importance of finding joy in everyday life."
  },
  {
    id: "68",
    title: "The Dragon's Quest",
    category: StoriesCategories.FANTASY,
    coverImage: {
      //@ts-ignore  
      id: () => nanoid(),
      actorType: Actors.STORY,
      actorId: "0",
      subPath: ImageType.COVER,
      storePath: "",
      url: "https://images.pexels.com/photos/713663/pexels-photo-713663.jpeg?auto=compress&cs=tinysrgb&w=360&h=360&dpr=2"
    },
    content: "In a realm of knights and mythical creatures, a young warrior named Ethan embarked on a perilous quest to save his kingdom from a fearsome dragon. Along his journey, Ethan faced battles, encountered magical beings, and discovered his inner strength and bravery. Through determination and courage, he proved that heroes could be found in unexpected places."
  }
];
