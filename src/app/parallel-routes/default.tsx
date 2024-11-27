import React from 'react'

// parallel-routes 에 없는값이 있는경우 default.tsx 가 출력됨
// ex) @admin 에는 settings/page 가 있는데, @user 에는 settings/page 가 없는 상태에서 settings 페이지 들어가는 경우
// * 이건 children 에서도 마찬가지임!

export default function Default() {
  return (
    <div>Default page</div>
  )
}
