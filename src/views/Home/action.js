
import {fetchPosts} from '../../utils'
export function loadArticals() {
return fetchPosts("/api/article.json")
}

