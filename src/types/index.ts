export interface Project {
  id: string
  icon: string
  name: string
  description: string
  tags: string[]
  chain: string
  tvl: string
  contributors: number
  active: boolean
}

export interface JoinRequest {
  id: string
  name: string
  handle: string
  initials: string
  projectId: string
  note: string
  skills: string[]
  status: 'pending' | 'accepted' | 'declined'
}