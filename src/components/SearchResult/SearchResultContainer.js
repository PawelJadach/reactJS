import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForSearch } from '../../redux/cardsRedux';
import { createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.search),
});

const mapDispatchToProps = dispatch => ({
  changeSearchString: newSearchString =>
    dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
