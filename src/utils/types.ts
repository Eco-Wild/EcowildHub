export interface CommentValues {
  name: string;
  email: string;
  comment: string;
}

export interface ContactValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  acceptTerms?: boolean;
}

export interface SigninValues {
  userName: string;
  password: string;
}

export interface ImageValues {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface FormValues {
  title: string;
  date: Date;
  author: string;
  description: string;
  images: ImageValues[];
}

export interface Post {
  title: string;
  text: string;
  author: string;
  date: string;
  thumbnail: string;
}

export interface PasswordReset {
  newPassword: string;
  confirmNewPassword: string;
}
