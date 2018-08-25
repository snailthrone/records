import collection from '../data/data_collection'
import upcoming from '../data/data_upcoming'
import vinyls from '../data/data_vinyls'
import wishlist from '../data/data_wantlist'

export default (value) => {
  if (value === 'collection') {
    return { data: collection }
  }
  if (value === 'upcoming') {
    return { data: upcoming }
  }
  if (value === 'wishlist') {
    return { data: wishlist }
  }
  return { data: vinyls }
}
