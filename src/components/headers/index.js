import React from 'react'
import BottomHeader from './BottomHeader'
import MiddleHeader from './MiddleHeader'
import TopHeader from './TopHeader'
import TrendingHeader from './TrendingHeader'
const Headers = () => {
  return (
    <React.Fragment>
      <header id="header" class="herald-site-header">
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
        <TrendingHeader />
      </header>
    </React.Fragment>
  )
}

export default Headers
