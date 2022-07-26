import React from 'react'
import Card from './Card';
import data from './sampleNews.json'

export default function NewsPage() {
    return (
        <div className="container">
            {data.map((element, index)=> {
                return <Card
                key={index}
                data={element}
                />
            })}
        </div>
      );
    };  