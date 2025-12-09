import React from 'react';

export interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export interface CraidNode {
  id: string;
  name: string;
  status: 'active' | 'dead' | 'recovering';
  shards: string[];
}

export interface TrpuDataPoint {
  time: number;
  psi: number;
  entropy: number;
}

export interface NgcNucleotide {
  id: string;
  subject: string;
  predicate: string;
  object: string;
  confidence: number;
  type: 'axiome' | 'fact';
}