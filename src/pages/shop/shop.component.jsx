import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { SHOPDATA } from './shop.data';


export default class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            collections: SHOPDATA
        }
    }

    render() { 
        const {collections} = this.state;
        return (<div className='shop-page'>
        {
            collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
        </div>)
    }
}