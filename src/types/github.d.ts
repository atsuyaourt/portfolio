import { z } from 'zod'

import { ghProfile } from '../schemas/github'

type _GHProfile = z.infer<typeof ghProfile>
export type GHProfile = _GHProfile['data']['user']
export type GHRepo = GHProfile['pinnedItems']['edges'][0]['node']
