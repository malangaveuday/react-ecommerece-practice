import React from 'react';
import './collection_preview.scss';
import CollectionItem from '../collection_item/CollectionItem';

export default function CollectionPreview({title, items}) {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map((item)=> ( <CollectionItem key={item.id} {...item} />))
				}
			</div>
		</div>
	)
}
