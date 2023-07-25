import {AuthProvider} from './AuthContext';
import { combineComponents } from '../utilities/CombineComponents';
import { PostsProvider } from './PostsContext';
import { ImageUploadProvider } from './ImageUploadCOntext';
const providers = [
  AuthProvider,
  PostsProvider,
  ImageUploadProvider
]
export const AppContextProvider = combineComponents(...providers);