import { JoinRequest } from '@/types'

export const requests: JoinRequest[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    handle: '@arjun.eth',
    initials: 'AM',
    projectId: '1',
    note: 'Senior Solidity dev, 3 yrs DeFi. Want to help with the router contracts.',
    skills: ['Solidity', 'Hardhat', 'Ethers.js'],
    status: 'pending',
  },
  {
    id: '2',
    name: 'Zoe Nakamura',
    handle: '@z0e_builds',
    initials: 'ZN',
    projectId: '3',
    note: 'Smart contract auditor + frontend. Interested in governance module.',
    skills: ['Vyper', 'React', 'The Graph'],
    status: 'pending',
  },
  {
    id: '3',
    name: 'Felix Osei',
    handle: '@felixonchain',
    initials: 'FO',
    projectId: '4',
    note: 'Game dev background, new to Web3. Excited to learn VRF integration.',
    skills: ['Unity', 'C#', 'JavaScript'],
    status: 'pending',
  },
]