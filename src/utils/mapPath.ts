import { useRoute } from 'vue-router'

const mapPath = () => {
  const route = useRoute()
  console.log(route.fullPath)
}

export default mapPath
