import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.action';

import { 
    firestore, 
    convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverviewSpinner = WithSpinner(CollectionOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            updateCollections(collectionsMap);
            this.setState({loading: false})
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <main className='main shop'>
                <Route exact path={`${match.path}`}  render={props => <CollectionOverviewSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageSpinner isLoading={loading} {...props}/>}/>
            </main>
        )
    }
}
    
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(
    null, 
    mapDispatchToProps
)(ShopPage);