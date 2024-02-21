// Tab.js
"use client"
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import styles from './tab.module.scss';

export default function Tabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className={styles.container}>
      <Tab.Group as="div" className={styles.tabGroup}>
        <Tab.List className={styles.tabList}>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              className={`${styles.tab} ${currentTab === tab ? styles.active : ''}`}
              onClick={() => setCurrentTab(tab)}
            >
              <p className={styles.title}>{tab.title}</p>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={styles.tabPanelContainer}>
          {tabs.map(tab => (
            <Tab.Panel key={tab.id} className={`${styles.tabPanel} ${currentTab === tab ? styles.active : ''}`}>
              {currentTab === tab && tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}