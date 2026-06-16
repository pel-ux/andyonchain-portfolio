import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    name: 'VoltSwap',
    description: 'AMM DEX with concentrated liquidity and zap-in routing built on Ethereum.',
    tags: ['Solidity', 'React', 'Ethers.js'],
    link: '#',
    year: '2024',
  },
  {
    id: '2',
    name: 'AuraPass',
    description: 'Soulbound identity NFT system with on-chain reputation scoring on Polygon.',
    tags: ['NFT', 'Next.js', 'TypeScript'],
    link: '#',
    year: '2024',
  },
  {
    id: '3',
    name: 'GovCore',
    description: 'Modular on-chain governance toolkit for DAOs built on Arbitrum.',
    tags: ['DAO', 'Solidity', 'The Graph'],
    link: '#',
    year: '2023',
  },
]