/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'selection' | 'game' | 'result';

export type SwimmerId = 'gor' | 'gayane';

export interface Swimmer {
  id: SwimmerId;
  name: string;
  color: string;
  avatar: string;
}

export interface Question {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  translation: string;
}

export interface GameState {
  gorProgress: number; // 0 to 100
  gayaneProgress: number; // 0 to 100
  currentTurn: SwimmerId;
  currentQuestionIndex: number;
  scoreGor: number;
  scoreGayane: number;
  isFinished: boolean;
  winner: SwimmerId | null;
}
