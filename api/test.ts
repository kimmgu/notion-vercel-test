import {VercelRequest, VercelResponse} from '@vercel/node'

export default async function (VercelRequest, VercelResponse) {
  res.status(200).json({
    name: 'Frank!!'
  })
}
