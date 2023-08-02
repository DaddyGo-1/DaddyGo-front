import {AuthProvider} from './AuthContext';
import { combineComponents } from '../utilities/CombineComponents';
import { PostsProvider } from './PostsContext';
import { ImageUploadProvider } from './ImageUploadCOntext';
import { UserPostsProvider } from './UserPostContext';
const providers = [
  AuthProvider,
  PostsProvider,
  ImageUploadProvider,
  UserPostsProvider
]
export const AppContextProvider = combineComponents(...providers);