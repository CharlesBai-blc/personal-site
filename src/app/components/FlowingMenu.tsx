'use client';

import { useState } from 'react';

interface FlowingMenuProps {
  items: {
    id: string;
    title: string;
    description: string;
    href: string;
  }[];
}

export default function FlowingMenu({ items }: FlowingMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flowing-menu">
      {/* Menu Items */}
      <div className="flowing-menu-items">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flowing-menu-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <a href={item.href} className="flowing-menu-link">
              <div className="flowing-menu-content">
                <h3 className="flowing-menu-title">{item.title}</h3>
                <p className="flowing-menu-description">{item.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Flowing Background */}
      <div 
        className="flowing-background"
        style={{
          transform: `translateY(${activeIndex * 100}%)`,
        }}
      />
    </div>
  );
}
