import { Ref } from 'vue'
import { gsap } from 'gsap'
import { useUser } from '@/store'

export default function getCode(
  disabled: Ref<Boolean>,
  btnText: Ref,
  phoneNumber: string
) {
  disabled.value = true
  const start = { values: 60 }
  const user = useUser()
  user.userGetCodeAction(phoneNumber)
  gsap.to(start, {
    values: 0,
    ease: 'none',
    duration: 60,
    onUpdate: () => {
      if (!Math.floor(start.values)) {
        disabled.value = false
        btnText.value = '获取验证码'
      } else {
        btnText.value = ` ${Math.floor(start.values)}s 后重试`
      }
    }
  })
}
