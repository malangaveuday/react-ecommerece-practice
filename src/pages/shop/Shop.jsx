import React, { Component } from 'react';
import { SHOP_DATA } from '../../variable';
import CollectionPreview from '../../components/collection_preview/CollectionPreview';

export default class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		}
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map((collection) => <CollectionPreview key={collection.id} {...collection} />)}
			</div>
		)
	}
}
