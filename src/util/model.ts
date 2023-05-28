interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  profilePic: Image
}
interface Image {
  id: string;
  actorType: Actors;
  actorId: string;
  subPath: string;
  storePath: string;
  url: string;
}
interface Story {
  id: string;
  title: string;
  category: StoriesCategories;
  coverImage: Image;
  storyImages: Image[];
  content: string;
}
interface UserGeneratedStory extends Story {
  userId: string;
  prompt: string;
}
interface Favorite {
  id: string;
  userId: string;
  storyId: string;
}
export enum StoriesCategories {
  ADVENTURE = "adventure",
  LOVE = "love",
  FAIRY_TALE = "fairy tale",
  ANIMALS = "animals",
  FANTASY = "fantasy",
  FRIENDSHIP = "friendship",
  MAGIC = "magic",
  BEDTIME_STORIES = "bedtime stories",
  EDUCATIONAL = "educational",
  NATURE = "nature",
  SUPERHEROES = "superheroes",
  HUMOR = "humor",
  MYSTERY = "mystery",
  COURAGE = "courage",
  EXPLORATION = "exploration"
}

export enum Actors {
  USER = "user",
  STORY = "story"
}  
