import { FaHeart } from 'react-icons/fa'
import { Button } from '../ui/button'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '../form/Buttons'
import { fetchFavoriteId } from '@/utils/action'
import FavoriteToggleForm from './FavoriteToggleForm'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = auth()
  if (!userId) return <CardSignInButton />
  const favoriteId = await fetchFavoriteId({ productId })
  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />
}
export default FavoriteToggleButton
