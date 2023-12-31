export interface Profile {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
  password?: String;
  dateOfBirth: String;
  gender: String;
  phoneNumber: String;
  bio: String;
  profilePictureUrl: string;
  coverImageUrl: String;
  video1Url: String;
  video2Url: String;
  video3Url: String;
  registrationDate: String;
  lastLoginDate: String;
  isVerified: String;
  role: String;
}

export interface Post {
  id?: Number;
  authorId: Number;
  content: String;
  likes: Number;
  comments: Number;
  createdAt: String;
  updatedAt: String;
  isPublshed: String;
  imageUrl: String;
  externalUrl: String;
  location: String;
}

export interface NewPost {
  content: String;
  image: String;
}