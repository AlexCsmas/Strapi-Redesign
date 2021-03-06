import React, { useState, useCallback } from 'react'

function Tabs({ children }) {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback((label) => setActiveTab(label), [])

  const tabs = children.map((child) => (
    <button
      onClick={(e) => {
        e.preventDefault()
        handleActiveTab(child.props.label)
      }}
      className={
        child.props.label === activeTab
          ? [
            'pl-5 mr-10 h-full text-left tabs__tab hover:bg-gray-100 ',
            'pl-5 mr-10 h-full text-left tabs__tab-active border-b-2 border-white bg-alternative-1 focus:outline-none',
          ].join(' ')
          : 'pl-5 mr-10 h-full text-left tabs__tab'
      }
      key={child.props.label}
    >
      <div>{child.props.tabName}</div>

    </button>
  ))

  const tabContent = children.filter((child) => child.props.label === activeTab)

  return (
    <div className='flex h-full '>
      <div className='tabs__box w-5/12 flex flex-col flex-grow justify-between'>
        {tabs}
      </div>
      <div className='w-7/12 '>
        <div className='px-4'>{tabContent}</div>
      </div>
    </div>
  )
}

function Tab(props) {
  return <>{props.children}</>
}

export { Tabs, Tab }
