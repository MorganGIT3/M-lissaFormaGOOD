// Données mockées pour la plateforme de formation
import { Module, Resource, User, ProgressStats } from './types';

export const mockUser: User = {
  id: '1',
  name: 'Marie Dupont',
  email: 'marie.dupont@email.com',
  avatar: '/assets/generated_images/Professional_coach_portrait_eed1c557.png',
  totalProgress: 45,
  completedModules: 1,
  totalModules: 3
};

export const mockModules: Module[] = [
  {
    id: '1',
    title: 'Les Bases',
    description: 'Découvrez les fondamentaux essentiels pour bien commencer votre parcours de formation.',
    progress: 70,
    totalDuration: 30,
    videos: [
      {
        id: '1-1',
        title: 'Introduction aux concepts de base',
        duration: 10,
        description: 'Une introduction complète aux concepts fondamentaux.',
        completed: true
      },
      {
        id: '1-2',
        title: 'Méthodologie et approche pratique',
        duration: 12,
        description: 'Apprenez la méthodologie étape par étape.',
        completed: true
      },
      {
        id: '1-3',
        title: 'Mise en pratique - Premiers exercices',
        duration: 8,
        description: 'Mettez en pratique vos nouvelles connaissances.',
        completed: false
      }
    ]
  },
  {
    id: '2',
    title: 'Approfondissement',
    description: 'Développez vos compétences avec des techniques avancées et des cas pratiques.',
    progress: 25,
    totalDuration: 45,
    videos: [
      {
        id: '2-1',
        title: 'Techniques avancées - Partie 1',
        duration: 15,
        description: 'Explorez des techniques plus poussées.',
        completed: true
      },
      {
        id: '2-2',
        title: 'Techniques avancées - Partie 2',
        duration: 12,
        description: 'Suite des techniques avancées avec exemples.',
        completed: false
      },
      {
        id: '2-3',
        title: 'Analyse de cas pratiques',
        duration: 10,
        description: 'Analysez des situations réelles.',
        completed: false
      },
      {
        id: '2-4',
        title: 'Exercices d\'approfondissement',
        duration: 8,
        description: 'Renforcez vos acquis avec des exercices ciblés.',
        completed: false
      }
    ]
  },
  {
    id: '3',
    title: 'Pratique Avancée',
    description: 'Maîtrisez les aspects les plus complexes et devenez expert dans votre domaine.',
    progress: 0,
    totalDuration: 25,
    videos: [
      {
        id: '3-1',
        title: 'Stratégies expertes',
        duration: 18,
        description: 'Les stratégies utilisées par les experts.',
        completed: false
      },
      {
        id: '3-2',
        title: 'Projet final et certification',
        duration: 7,
        description: 'Projet complet pour valider vos compétences.',
        completed: false
      }
    ]
  }
];

export const mockResources: Resource[] = [
  {
    id: 'r1',
    title: 'Guide Complet - Les Bases',
    type: 'pdf',
    size: '2.4 MB',
    downloadUrl: '/mock/guide-bases.pdf'
  },
  {
    id: 'r2',
    title: 'Méditation Guidée - Relaxation',
    type: 'audio',
    size: '15.2 MB',
    downloadUrl: '/mock/meditation.mp3'
  },
  {
    id: 'r3',
    title: 'Fiches Récapitulatives',
    type: 'document',
    size: '1.8 MB',
    downloadUrl: '/mock/fiches-recap.docx'
  }
];

export const mockProgressStats: ProgressStats = {
  completedVideos: 3,
  totalVideos: 9,
  studyTime: 12.5,
  streakDays: 7
};