// Types pour les données mockées de la plateforme de formation
export interface Video {
  id: string;
  title: string;
  duration: number; // en minutes
  description: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  videos: Video[];
  progress: number; // pourcentage 0-100
  totalDuration: number; // en minutes
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'audio' | 'document';
  size: string;
  downloadUrl: string; // mock URL
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  totalProgress: number; // pourcentage global 0-100
  completedModules: number;
  totalModules: number;
}

export interface ProgressStats {
  completedVideos: number;
  totalVideos: number;
  studyTime: number; // en heures
  streakDays: number;
}