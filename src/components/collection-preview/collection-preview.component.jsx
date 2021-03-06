import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items
            .filter((_item, idx) => idx < 4)
            .map(({id, ...collectionItemsProps}) => (
                <CollectionItem id={id} {...collectionItemsProps}/>
            ))
        }
        </div>
    </div>
) 

export default CollectionPreview;